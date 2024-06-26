import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';


@Injectable({
  providedIn: 'root'
})

export class VacinaService {


  private readonly API = 'http://localhost:8080/ex01/rest/vacina';

  constructor(private httpClient: HttpClient) {}

  public listarTodas(): Observable <Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas');

  }

  public consultarPorId(id: number): Observable <Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/' + id);

  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + id);
  }

  public salvar(vacina: Vacina): Observable<Vacina> {
    return this.httpClient.post<Vacina>(this.API + '/inserir', vacina)
  }

  public atualizar(vacina: Vacina):Observable<boolean> {
    return this.httpClient.put<boolean>(this.API + '/atualizar', vacina)
  }

}
