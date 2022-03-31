import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../../shared/layout/models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  cliente: Cliente = new Cliente();

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) { }

  get canCreate(): boolean {
    return !!this.cliente.nombre && !!this.cliente.cedula && !!this.cliente.telefono && !!this.cliente.ciudad && !!this.cliente.direccion;
  }

  ngOnInit(): void {
    if (this.data) {
      this.cliente = this.data;
      this.isEditable = true;
    }
  }

  save(): void {
    this.dialogRef.close(this.cliente);
  }

}
