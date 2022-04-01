import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { categorias } from 'src/assets/mocks/categorias.mock';
import { Producto } from '../../../shared/layout/models/producto';
import { Categoria } from '../../../shared/layout/models/categoria';
import { Proveedor } from '../../../shared/layout/models/proveedor';
import { proveedores } from 'src/assets/mocks/proveedores.mock';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  producto: Producto = new Producto();
  categorias: Categoria[] = categorias;
  proveedores: Proveedor[] = proveedores;

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto
  ) { }

  get canCreate(): boolean {
    return !!this.producto.descripcion && !!this.producto.idCategoria && !!this.producto.idProveedor && !!this.producto.codigo && !!this.producto.existencias && !!this.producto.existencias;
  }

  ngOnInit(): void {
    if (this.data) {
      this.producto = this.data;
      this.isEditable = true;
    }
  }

  save(): void {
    this.producto.categoria = this.categorias.find(c => c.idCategoria == this.producto.idCategoria)?.nombre || '';
    this.producto.proveedor = this.proveedores.find(p => p.idProveedor == this.producto.idProveedor) || new Proveedor();
    this.dialogRef.close(this.producto);
  }

}
