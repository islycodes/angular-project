import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresComponent } from '../fornecedores/component/fornecedores.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FornecedoresComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,  
    SharedModule,
  ],

  exports: [
    FornecedoresComponent,
  ],
})
export class FornecedoresModule { }
