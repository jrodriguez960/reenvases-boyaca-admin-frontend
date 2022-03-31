import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { roles } from 'src/assets/mocks/roles.mock';
import Swal from 'sweetalert2';
import { Rol } from '../../../shared/layout/models/rol';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['descripcion', 'funciones', 'acciones'];
  dataSource = new MatTableDataSource<Rol>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.dataSource.data = roles;
  }

  add(): void {
    const dialogRef = this.dialog.open(FormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(rol => {
      if (rol) {
        this.dataSource.data = [...this.dataSource.data, rol];
        Swal.fire({
          title: 'Correcto!',
          text: 'Rol creado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  edit(rol: Rol): void {
    const dialogRef = this.dialog.open(FormComponent, { 
      disableClose: true,
      data: rol
    });

    dialogRef.afterClosed().subscribe(rol => {
      if (rol) {
        Swal.fire({
          title: 'Correcto!',
          text: 'Rol actualizado con exito',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });
      }
    });
  }

  delete(rol: Rol): void {
    this.dataSource.data = this.dataSource.data.filter(r => r.idRol !== rol.idRol);
  }

}
