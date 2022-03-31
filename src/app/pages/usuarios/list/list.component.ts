import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/layout/models/usuario';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { FormComponent } from '../form/form.component';
import { empleados } from 'src/assets/mocks/empelados.mock';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuario: Usuario = new Usuario();
  displayedColumns: string[] = ['nombres', 'cedula', 'usuario1', 'email', 'acciones'];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.dataSource.data = empleados;
    // this.usuariosService.getUsuarios()
    //   .subscribe(usuarios => this.dataSource = usuarios);
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(usuario => {
      if (usuario) {
        this.dataSource.data = [...this.dataSource.data, usuario];
        Swal.fire({
          title: 'Correcto!',
          text: 'Empleado creado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
        // this.usuariosService.postUsuario(this.usuario).subscribe(response => {
        //   if (response) {
        //     this.dataSource.push(usuario);
        //   }
        // });
      }
    });
  }

  edit(usuario: Usuario): void {
    const dialogRef = this.dialog.open(FormComponent, {
      disableClose: true,
      data: usuario
    });

    dialogRef.afterClosed().subscribe(usuario => {
      if (usuario) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Empleado actualizado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(usuario: Usuario): void {
    this.dataSource.data = this.dataSource.data.filter(u => u.idUsuario !== usuario.idUsuario);
    // this.usuariosService.deleteUsuario(usuario.idUsuario)
    //   .subscribe(response => {
    //     if (response) {
    //       this.dataSource.data = this.dataSource.data.filter(u => u.idUsuario !== usuario.idUsuario);
    //     }
    //   });
  }
}
