import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';
import { MatDialogComponent } from '../../shared/mat-dialog/mat-dialog.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  columnsToDisplay = ['id', 'name', 'cpf', 'mensalidade', 'cell', 'address', 'clienteDesde', 'delete'];

  
  constructor(private clientesService: ClientesService, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClientes();
  }
  
  getClientes(): void {
    this.clientesService.getPessoa()
    .subscribe((clientes) => this.clientes = clientes);
  } 

  confirmDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(MatDialogComponent); 

    dialogRef.afterClosed().subscribe((escolha: Boolean) => {
      if(escolha) {
        this.deleteCliente(cliente);
      }
    })
  }
  deleteCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(c => c !== cliente)
    this.clientesService.deletePessoa(cliente.id).subscribe();
  }

}
