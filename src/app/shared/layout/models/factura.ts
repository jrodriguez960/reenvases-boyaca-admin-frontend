import { Cliente } from "./cliente";

export class Factura {
    idFactura!: number;
    numerofactura!: string;
    fechaEmision!: string;
    idCliente!: number;
    cliente!: Cliente;
}