import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../model/carro';
import { CarroSeletor } from '../model/seletor/carro.seletor';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.apiUrl}/todas`);
  }

  consultarComSeletor(seletor: CarroSeletor): Observable<Carro[]> {
    return this.http.post<Carro[]>(`${this.apiUrl}/filtro`, seletor);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Se houver mais operações CRUD, como adicionar, atualizar, etc., elas podem ser implementadas aqui
}
