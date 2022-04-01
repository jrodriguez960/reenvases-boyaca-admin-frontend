import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { productos } from 'src/assets/mocks/productos.mock';
import Swal from 'sweetalert2';
import { Producto } from '../../../shared/layout/models/producto';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descripcion', 'categoria', 'proveedor', 'existencias', 'precio', 'acciones'];
  dataSource = new MatTableDataSource<Producto>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.dataSource.data = productos;
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(producto => {
      if (producto) {
        this.dataSource.data = [...this.dataSource.data, producto];
        Swal.fire({
          title: 'Correcto!',
          text: 'Cliente creado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  edit(producto: Producto): void {
    const dialogRef = this.dialog.open(FormComponent, { 
      disableClose: true,
      data: producto
    });

    dialogRef.afterClosed().subscribe(producto => {
      if (producto) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Producto actualizado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(producto: Producto): void {
    this.dataSource.data = this.dataSource.data.filter(p => p.idProducto !== producto.idProducto);
  }
}
