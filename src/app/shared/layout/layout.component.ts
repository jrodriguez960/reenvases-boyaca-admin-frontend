import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(
    private router: Router
  ) { 
    const usuario = localStorage.getItem('usuario') || '{}';
    this.usuario = usuario ? JSON.parse(usuario) : new Usuario();
  }

  ngOnInit(): void {
  }

  logOut(): void {
    localStorage.removeItem('usuario');
    this.usuario = new Usuario();
    this.router.navigate(['/login']);
  }

}
