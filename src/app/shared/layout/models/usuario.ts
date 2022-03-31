import { Rol } from './rol';
export class Usuario {
    idUsuario!: number;
    nombre!: string;
    apellido!: string;
    correo!: string;
    usuario1!: string;
    clave!: string;
    cedula!: number;
    idRol!: number;
    rol!: Rol;
    permisoDeAscesos!: any[];
}