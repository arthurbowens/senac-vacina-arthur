import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import { Montadora } from '../../shared/model/montadora';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CarroService } from '../../shared/service/carro.service';


@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.scss'],
})
export class CarroListaComponent implements OnInit {

  public carros: Array<Carro> = new Array();
  public seletor: CarroSeletor = new CarroSeletor();
  public montadoras: Array<Montadora> = new Array();

  constructor(
    private carroService: CarroService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  private consultarTodosCarros() {
    this.carroService.listarTodos().subscribe(
      (resultado) => {
        this.carros = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todos carros', erro);
      }
    );
  }

  public pesquisar() {
    this.carroService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.carros = resultado;
      },
      (erro) => {
        console.error('erro ao consultar por seletor', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new CarroSeletor();
  }

  public excluir(carroSelecionado: Carro) {
    Swal.fire({
      title: 'Deseja excluir carro?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.carroService.excluir(carroSelecionado.id).subscribe(
          (resultado) => {
            this.pesquisar();
            Swal.fire('Sucesso!', 'Carro excluído com sucesso!', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir carro: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }


}
