import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedores.model';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService extends SharedService<Fornecedor>{

  getPessoa(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url)
    .pipe(
      map(pessoas => pessoas.filter(pessoa => pessoa.cnpj != undefined))
    )
  }

  deletePessoa(id: number): Observable<Fornecedor> {
    const url = `${this.url}/${id}`
    return this.http.delete<Fornecedor>(url);
  }

}
