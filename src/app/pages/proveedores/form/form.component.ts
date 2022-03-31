import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proveedor } from '../../../shared/layout/models/proveedor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  proveedor: Proveedor = new Proveedor();

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proveedor
  ) { }

  get canCreate(): boolean {
    return !!this.proveedor.nombre && !!this.proveedor.cedula && !!this.proveedor.telefono && !!this.proveedor.ciudad && !!this.proveedor.direccion;
  }

  ngOnInit(): void {
    if (this.data) {
      this.proveedor = this.data;
      this.isEditable = true;
    }
  }

  save(): void {
    this.dialogRef.close(this.proveedor);
  }

}
