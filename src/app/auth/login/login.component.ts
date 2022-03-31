import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credencial } from 'src/app/shared/layout/models/credencial';
import { UsuariosService } from '../../shared/services/usuarios.service';
import { Usuario } from '../../shared/layout/models/usuario';
import Swal from 'sweetalert2';
import { empleados } from 'src/assets/mocks/empelados.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credencial: Credencial = new Credencial();

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login(): void {
    const usuario = empleados.find(empleado => empleado.usuario1 === this.credencial.Usuario && empleado.clave === this.credencial.Clave);

    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigateByUrl('/home');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Confirmar'
      });
      localStorage.removeItem('usuario');
    }

    // this.usuariosService.login(this.credencial)
    //   .subscribe(usuario => {
    //     if (usuario) {
    //       localStorage.setItem('usuario', JSON.stringify(usuario));
    //       this.router.navigateByUrl('/home');
    //     } else {
    //       Swal.fire({
    //         title: 'Error!',
    //         text: 'Usuario o contraseña incorrectos',
    //         icon: 'error',
    //         confirmButtonText: 'Confirmar'
    //       });
    //       localStorage.removeItem('usuario');
    //     }
    //   });
  }
}
