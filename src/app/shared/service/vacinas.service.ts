import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "localhost:8080/senac-20241-backend-exemplos/rest/vacina";

  public consultarTodas(): Observable<Array<Vacina>>{
    return this.httpClient.get<Array<Vacina>>(this.API + "/todas");
  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>>{
    return this.httpClient.post<Array<Vacina>>(this.API + "/filtro", seletor);
  }

  public consultarPorId(id: number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API + "/" + id);
  }

  public excluir(id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.API + "/" + id);
  }
}
