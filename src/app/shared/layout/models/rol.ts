export class Funcion {
    descripcion!: string;
}

export class Rol {
    idRol!: number;
    descripcion!: string;
    funciones!: Funcion[];
}