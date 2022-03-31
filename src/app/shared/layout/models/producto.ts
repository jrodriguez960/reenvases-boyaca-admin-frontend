import { Proveedor } from "./proveedor";

export class Producto {
    idProducto!: number;
    descripcion!: string;
    idCategoria!: number;
    idProveedor!: number;
    proveedor!: Proveedor;
    categoria!: string;
    codigo!: string;
    existencias!: number;
    precio!: number;
}