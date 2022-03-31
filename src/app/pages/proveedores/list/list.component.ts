import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { proveedores } from 'src/assets/mocks/proveedores.mock';
import Swal from 'sweetalert2';
import { Proveedor } from '../../../shared/layout/models/proveedor';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'cedula', 'telefono', 'ciudad', 'direccion', 'acciones'];
  dataSource = new MatTableDataSource<Proveedor>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.dataSource.data = proveedores;
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(proveedor => {
      if (proveedor) {
        this.dataSource.data = [...this.dataSource.data, proveedor];
        Swal.fire({
          title: 'Correcto!',
          text: 'Proveedor creado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  edit(proveedor: Proveedor): void {
    const dialogRef = this.dialog.open(FormComponent, { 
      disableClose: true,
      data: proveedor
    });

    dialogRef.afterClosed().subscribe(proveedor => {
      if (proveedor) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Proveedor actualizado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(proveedor: Proveedor): void {
    this.dataSource.data = this.dataSource.data.filter(p => p.idProveedor !== proveedor.idProveedor);
  }

}
