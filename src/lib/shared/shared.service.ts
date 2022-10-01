import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export abstract class SharedService<T extends Pessoa> {

  constructor(protected http: HttpClient) { }

  url: string = 'api/dados';

  //definir metodos como abstract obriga as classes que forem extende-la
  //a definir esses metodos

  abstract getPessoa(id: number): Observable<T[]>

  abstract deletePessoa(id: number): Observable<T> 

}
