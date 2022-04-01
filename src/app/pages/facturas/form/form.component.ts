import { Component, Inject, OnInit } from '@angular/core';
import { Factura } from '../../../shared/layout/models/factura';
import { Cliente } from '../../../shared/layout/models/cliente';
import { clientes } from 'src/assets/mocks/clientes.mock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '../../../shared/layout/models/producto';
import { productos } from '../../../../assets/mocks/productos.mock';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  factura: Factura = new Factura();
  clientes: Cliente[] = clientes;
  productos: Producto[] = productos;
  procutosAgregados: Producto[] = [];

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Factura
  ) { }

  get canCreate(): boolean {
    return !!this.factura.numeroFactura && !!this.factura.fechaEmision && !!this.factura.idCliente;
  }

  ngOnInit(): void {
    if (this.data) {
      this.factura = this.data;
      this.isEditable = true;
    }
  }

  agregarProducto(producto: Producto): void {
    this.procutosAgregados.push(producto);
  }

  eliminarProducto(producto: Producto): void {
    this.procutosAgregados = this.procutosAgregados.filter(p => p.idProducto !== producto.idProducto);
  }

  save(): void {
    this.factura.cliente = this.clientes.find(c => c.idCliente == this.factura.idCliente) || new Cliente();
    this.dialogRef.close(this.factura);
  }

}
