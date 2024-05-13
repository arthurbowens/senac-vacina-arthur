import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { VacinaService } from '../../shared/service/vacinas.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss',
})
export class VacinaListagemComponent implements OnInit {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();


  constructor(
    private vacinasService: VacinaService,
    private paisService: PaisService,
    private pesquisadorService: PesquisadorService,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.paisService.consultarTodos().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('erro ao consultar vacina por país', erro);
      }
    );

    this.pesquisadorService.consultarPorPesquisador().subscribe(
      (resultado) => {
        this.pesquisadores = resultado;
      },
      (erro) => {
        console.error('erro ao consultar vacinas por pesquisadores', erro);
      }
    );
  }

  private consultarTodasVacinas() {
    this.vacinasService.listarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas vacinas', erro);
      }
    );
  }

  public pesquisar() {
    this.vacinasService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar por seletor', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new VacinaSeletor();
  }

  public atualizar(idVacinaSelecionada: number) {
    this.router.navigate(['/vacina/detalhe/', idVacinaSelecionada]);
  }



  public excluir(vacinaSelecionada: Vacina) {

    Swal.fire({
      title: 'Deseja excluir vacina?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vacinasService.excluir(vacinaSelecionada.idVacina).subscribe(
          (resultado) => {
            this.pesquisar();
            Swal.fire('Sucesso!', 'Vacina excluida com sucesso!', 'success');
          },
          (erro) => {

            Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error');
          }

        );
      }
    });
  }

  public editar(idVacinaSelecionada: number) {
    this.router.navigate(['/vacinas/detalhes/', idVacinaSelecionada]);
  }

  posterior() {

    }
  anterior() {

    }



}
