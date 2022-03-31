import { Usuario } from '../../app/shared/layout/models/usuario';

export const empleados: Usuario[] = [
    {
        idUsuario: 1,
        nombre: 'Juan',
        apellido: 'Rodriguez',
        correo: 'juan.rodriguez@reenvasesboyaca.com',
        usuario1: 'juan.rodriguez',
        clave: '123456',
        cedula: 123456789,
        idRol: 2,
        rol: {
            idRol: 1,
            descripcion: 'Administrador',
            funciones: [
                {
                    descripcion: 'Administrar Sistema'
                }
            ]
        },
        permisoDeAscesos: []
    },
    {
        idUsuario: 2,
        nombre: 'David',
        apellido: 'Soler',
        correo: 'david.soler@reenvasesboyaca.com',
        usuario1: 'david.soler',
        clave: '123456',
        cedula: 123456789,
        idRol: 2,
        rol: {
            idRol: 1,
            descripcion: 'Administrador',
            funciones: [
                {
                    descripcion: 'Administrar Sistema'
                }
            ]
        },
        permisoDeAscesos: []
    },
    {
        idUsuario: 3,
        nombre: 'Laura',
        apellido: 'Hernandez',
        correo: 'laura.hernandez@reenvasesboyaca.com',
        usuario1: 'laura.hernandez',
        clave: '123456',
        cedula: 123456789,
        idRol: 2,
        rol: {
            idRol: 1,
            descripcion: 'Administrador',
            funciones: [
                {
                    descripcion: 'Administrar Sistema'
                }
            ]
        },
        permisoDeAscesos: []
    },
    {
        idUsuario: 4,
        nombre: 'Camilo',
        apellido: 'Torres',
        correo: 'camilo.torres@reenvasesboyaca.com',
        usuario1: 'camilo.torres',
        clave: '123456',
        cedula: 123456789,
        idRol: 2,
        rol: {
            idRol: 1,
            descripcion: 'Administrador',
            funciones: [
                {
                    descripcion: 'Administrar Sistema'
                }
            ]
        },
        permisoDeAscesos: []
    },
    {
        idUsuario: 5,
        nombre: 'Alejandra',
        apellido: 'Rodriguez',
        correo: 'alejandra.rodriguez@reenvasesboyaca.com',
        usuario1: 'alejandra.rodriguez',
        clave: '123456',
        cedula: 123456789,
        idRol: 2,
        rol: {
            idRol: 1,
            descripcion: 'Administrador',
            funciones: [
                {
                    descripcion: 'Administrar Sistema'
                }
            ]
        },
        permisoDeAscesos: []
    }
];