import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../../shared/layout/models/usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEditable: boolean = false;
  usuario: Usuario = new Usuario();

  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  get canCreate(): boolean {
    return !!this.usuario.nombre && !!this.usuario.apellido && !!this.usuario.correo && !!this.usuario.usuario1 && !!this.usuario.clave && !!this.usuario.cedula;
  }

  ngOnInit(): void {
    if (this.data) {
      this.usuario = this.data;
      this.isEditable = true;
    }
  }

  save(): void {
    this.dialogRef.close(this.usuario);
  }

}
