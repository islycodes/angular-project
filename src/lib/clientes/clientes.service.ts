import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends SharedService<Cliente> {
  
  /* obtendo a lista de clientes do servidor */
  getPessoa(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url)
    .pipe(
      map(pessoas => pessoas.filter(pessoa => pessoa.cpf != undefined))
    )
  }

  deletePessoa(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`
    return this.http.delete<Cliente>(url);
  }

}
