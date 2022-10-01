import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Fornecedor } from '../fornecedores.model';
import { FornecedoresService } from '../fornecedores.service';
import { MatDialogComponent } from '../../shared/mat-dialog/mat-dialog.component';


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Fornecedor[] = [];

  columnsToDisplay = ['id', 'name', 'cnpj', 'ultimoPagamento', 'cell', 'address', 'fornecedorDesde', 'delete'];

  constructor(private fornecedoresService: FornecedoresService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFornecedores();
  }

  getFornecedores(): void {
    this.fornecedoresService.getPessoa()
    .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  confirmDialog(fornecedor: Fornecedor): void {
    const dialogRef = this.dialog.open(MatDialogComponent);

    dialogRef.afterClosed().subscribe((escolha: Boolean) => {
      if(escolha) {
        this.deleteFornecedor(fornecedor);
      }
    })
  }

  deleteFornecedor(fornecedor: Fornecedor): void {
    this.fornecedores = this.fornecedores.filter(f => f !== fornecedor)
    this.fornecedoresService.deletePessoa(fornecedor.id).subscribe();
  }

}
