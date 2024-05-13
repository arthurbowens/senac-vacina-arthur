import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Montadora } from '../model/montadora';

@Injectable({
  providedIn: 'root'
})
export class MontadoraService {

  private baseUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';

  constructor(private http: HttpClient) { }

  consultarTodas(): Observable<Montadora[]> {
    return this.http.get<Montadora[]>(`${this.baseUrl}/todas`);
  }

  consultarEstoque(idMontadora: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/estoque-carros/${idMontadora}`);
  }
}
