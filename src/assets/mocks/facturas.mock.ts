import { Factura } from "src/app/shared/layout/models/factura";

export const facturas: Factura[] = [
    {
        idFactura: 1,
        numerofactura: 'F001',
        fechaEmision: '2020-01-01',
        idCliente: 1,
        cliente: {
            idCliente: 1,
            nombre: 'Juan',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    },
    {
        idFactura: 2,
        numerofactura: 'F002',
        fechaEmision: '2020-01-02',
        idCliente: 1,
        cliente: {
            idCliente: 1,
            nombre: 'Juan',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    },
    {
        idFactura: 3,
        numerofactura: 'F003',
        fechaEmision: '2020-01-03',
        idCliente: 1,
        cliente: {
            idCliente: 1,
            nombre: 'Juan',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    }
];