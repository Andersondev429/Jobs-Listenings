import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Conteudo } from './conteudo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  private readonly API = 'http://localhost:3000/jobs'

  constructor(private http: HttpClient) { }

  listar(): Observable<Conteudo[]>{
    return this.http.get<Conteudo[]>(this.API)
  }

}
