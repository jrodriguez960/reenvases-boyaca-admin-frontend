import { Cliente } from "./cliente";

export class Factura {
    idFactura!: number;
    numeroFactura!: string;
    fechaEmision!: string;
    idCliente!: number;
    cliente!: Cliente;
}