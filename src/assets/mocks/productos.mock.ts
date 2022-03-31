import { Producto } from "src/app/shared/layout/models/producto";

export const productos: Producto[] = [
    {
        idProducto: 1,
        descripcion: 'Producto 1',
        precio: 50000,
        existencias: 10,
        idProveedor: 1,
        idCategoria: 1,
        categoria: 'Categoria 1',
        codigo: 'COD-001',
        proveedor: {
            idProveedor: 1,
            nombre: 'Proveedor 1',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    },
    {
        idProducto: 2,
        descripcion: 'Producto 2',
        precio: 40000,
        existencias: 30,
        idProveedor: 1,
        idCategoria: 2,
        categoria: 'Categoria 2',
        codigo: 'COD-002',
        proveedor: {
            idProveedor: 1,
            nombre: 'Proveedor 1',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    },
    {
        idProducto: 4,
        descripcion: 'Producto 4',
        precio: 14000,
        existencias: 400,
        idProveedor: 2,
        idCategoria: 2,
        categoria: 'Categoria 2',
        codigo: 'COD-004',
        proveedor: {
            idProveedor: 2,
            nombre: 'Proveedor 2',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 2'
        }
    },
    {
        idProducto: 3,
        descripcion: 'Producto 3',
        precio: 100000,
        existencias: 5,
        idProveedor: 1,
        idCategoria: 3,
        categoria: 'Categoria 3',
        codigo: 'COD-003',
        proveedor: {
            idProveedor: 1,
            nombre: 'Proveedor 1',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 1'
        }
    },
    {
        idProducto: 5,
        descripcion: 'Producto 5',
        precio: 145000,
        existencias: 34,
        idProveedor: 2,
        idCategoria: 3,
        categoria: 'Categoria 3',
        codigo: 'COD-005',
        proveedor: {
            idProveedor: 2,
            nombre: 'Proveedor 2',
            cedula: 123456789,
            telefono: '123456789',
            ciudad: 'Bogota',
            direccion: 'Calle 2'
        }
    }
];