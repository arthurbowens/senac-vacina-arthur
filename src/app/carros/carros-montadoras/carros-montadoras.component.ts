import { Component, OnInit } from '@angular/core';
import { Montadora } from '../../shared/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';
import './carros-montadoras.component.css';


@Component({
  selector: 'app-carros-montadoras',
  templateUrl: './carros-montadoras.component.html',
  styleUrls: ['./carros-montadoras.component.css']
})
export class CarroMontadoraComponent implements OnInit {
  montadoras: Montadora[] = [];
  montadoraSelecionada: Montadora | null = null;
  totalVeiculos: number | null = null;

  constructor(private montadoraService: MontadoraService) { }

  ngOnInit(): void {
    this.consultarMontadoras();
  }

  consultarMontadoras(): void {
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
        this.montadoras = resultado;
      },
      error => {
        console.error('Erro ao consultar montadoras', error);
      }
    );
  }

  consultarEstoque(): void {
    if (this.montadoraSelecionada) {
      this.montadoraService.consultarEstoque(this.montadoraSelecionada.id).subscribe(
        totalVeiculos => {
          this.totalVeiculos = totalVeiculos;
        },
        error => {
          console.error('Erro ao consultar estoque', error);
        }
      );
    } else {
      alert('Selecione uma montadora antes de consultar o estoque.');
    }
  }
}
