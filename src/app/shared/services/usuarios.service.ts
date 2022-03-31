import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credencial } from '../layout/models/credencial';
import { Usuario } from '../layout/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = `${environment.apiUr}/usuarios`;

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  postUsuario(usuario: Usuario): Observable<boolean> {
    return this.http.post<boolean>(this.url, usuario);
  }

  putUsuario(usuario: Usuario): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/${usuario.idUsuario}`, usuario);
  }

  deleteUsuario(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  login(usuario: Credencial): Observable<Usuario | null> {
    return this.http.post<Usuario>(`${this.url}/login`, usuario);
  }
}
