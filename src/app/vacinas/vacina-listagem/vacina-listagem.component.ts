import { Component, OnInit } from '@angular/core';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import { VacinaService } from '../../shared/service/vacinas.service';
import { Pais } from '../../shared/model/pais';


@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})

export class VacinaListagemComponent implements OnInit  {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();

  constructor(private vacinaService: VacinaService, private paisService: PaisService){}

  ngOnInit(): void {
    this.consultarTodas();

    this.paisService.consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }


  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    )
  }

  limpar(){
    this.seletor = new VacinaSeletor();
  }



  private consultarTodas(){
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
         this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    );
  }
}
