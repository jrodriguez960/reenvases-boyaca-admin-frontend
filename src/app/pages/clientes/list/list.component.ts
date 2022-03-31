import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { clientes } from 'src/assets/mocks/clientes.mock';
import Swal from 'sweetalert2';
import { Cliente } from '../../../shared/layout/models/cliente';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'cedula', 'telefono', 'ciudad', 'direccion', 'acciones'];
  dataSource = new MatTableDataSource<Cliente>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.dataSource.data = clientes;
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(cliente => {
      if (cliente) {
        this.dataSource.data = [...this.dataSource.data, cliente];
        Swal.fire({
          title: 'Correcto!',
          text: 'Cliente creado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  edit(cliente: Cliente): void {
    const dialogRef = this.dialog.open(FormComponent, { 
      disableClose: true,
      data: cliente
    });

    dialogRef.afterClosed().subscribe(cliente => {
      if (cliente) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Cliente actualizado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(cliente: Cliente): void {
    this.dataSource.data = this.dataSource.data.filter(c => c.idCliente !== cliente.idCliente);
  }
}
