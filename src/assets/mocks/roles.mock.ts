import { Rol } from "src/app/shared/layout/models/rol";

export const roles: Rol[] = [
    {
        idRol: 1,
        descripcion: 'Administrador',
        funciones: [
            {
                descripcion: 'Administrar Sistema'
            }
        ]
    },
    {
        idRol: 2,
        descripcion: 'Empleado',
        funciones: [
            {
                descripcion: 'Administrar Clientes'
            }
        ]
    },
    {
        idRol: 3,
        descripcion: 'Cliente',
        funciones: [
            {
                descripcion: 'Administrar Facturas'
            }
        ]
    },
];