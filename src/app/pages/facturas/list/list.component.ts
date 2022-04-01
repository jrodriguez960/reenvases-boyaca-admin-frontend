import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { clientes } from 'src/assets/mocks/clientes.mock';
import { facturas } from 'src/assets/mocks/facturas.mock';
import Swal from 'sweetalert2';
import { Factura } from '../../../shared/layout/models/factura';
import { FormComponent } from '../form/form.component';
import { Cliente } from '../../../shared/layout/models/cliente';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['numeroFactura', 'fechaEmision', 'cliente', 'acciones'];
  dataSource = new MatTableDataSource<Factura>();
  clientes: Cliente[] = clientes;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this.dataSource.data = facturas;
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(factura => {
      if (factura) {
        this.dataSource.data = [...this.dataSource.data, factura];
        Swal.fire({
          title: 'Correcto!',
          text: 'Factura creada con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  edit(factura: Factura): void {
    const dialogRef = this.dialog.open(FormComponent, { 
      disableClose: true,
      data: factura
    });

    dialogRef.afterClosed().subscribe(factura => {
      if (factura) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Factura actualizada con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(factura: Factura): void {
    factura.cliente = this.clientes.find(cliente => cliente.idCliente == factura.idCliente) || new Cliente();
    this.dataSource.data = this.dataSource.data.filter(f => f.idFactura !== factura.idFactura);
  }

}
