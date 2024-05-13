import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacinacao } from '../model/vacinacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService  {

  private readonly API = 'http://localhost:8080/ex01/rest/vacinacao';

  constructor(private httpClient: HttpClient) { }

  inserir(vacinacao: Vacinacao):Observable<any> {
    return this.httpClient.post<Vacinacao>(this.API + '/inserir', vacinacao);
  }

  atualizar(alterar: Vacinacao): Observable<any>{
    return this.httpClient.post<Vacinacao>(this.API + '/atualizar', alterar);
  }

  excluir (id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir' + id)
  }

  consultarPorId(id: number):Observable<Vacinacao>{
    return this.httpClient.get<Vacinacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes(vacinacao: Vacinacao):Observable<Array<Vacinacao>>{
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/todas')
  }

}
