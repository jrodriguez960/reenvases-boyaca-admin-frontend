import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('src/app/pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('src/app/pages/roles/roles.module').then(m => m.RolesModule),
      },
      {
        path: 'clientes',
        loadChildren: () => import('src/app/pages/clientes/clientes.module').then(m => m.ClientesModule),
      },
      {
        path: 'proveedores',
        loadChildren: () => import('src/app/pages/proveedores/proveedores.module').then(m => m.ProveedoresModule),
      },
      {
        path: 'productos',
        loadChildren: () => import('src/app/pages/productos/productos.module').then(m => m.ProductosModule),
      },
      {
        path: 'categorias',
        loadChildren: () => import('src/app/pages/categorias/categorias.module').then(m => m.CategoriasModule),
      },
      {
        path: 'facturas',
        loadChildren: () => import('src/app/pages/facturas/facturas.module').then(m => m.FacturasModule),
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
