import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rol } from '../../../shared/layout/models/rol';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  rol: Rol = new Rol();

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Rol
  ) { 
    this.rol.funciones = [];
  }

  get canCreate(): boolean {
    return !!this.rol.descripcion && !!this.rol.funciones && this.rol.funciones.length > 0;
  }

  ngOnInit(): void {
    if (this.data) {
      this.rol = this.data;
      this.isEditable = true;
    }
  }

  save(): void {
    this.dialogRef.close(this.rol);
  }

}
