// Dashboard.jsx
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AddProduct from '@/Components/Products/AddProduct';
import EditProduct from '@/Components/Products/EditProduct';
import DeleteProduct from '@/Components/Products/DeleteProduct';

export default function Dashboard({ auth, products }) {
    const [productList, setProductList] = useState(products);

    const handleAddProduct = (newProduct) => {
        setProductList([...productList, newProduct]);
    };

    const handleProductUpdate = (updatedProduct) => {
        setProductList((prevProducts) =>
            prevProducts.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    const handleProductDelete = (productId) => {
        setProductList((prevProducts) => prevProducts.filter(product => product.id !== productId));
    };

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Listado de productos</h3>

                        <div className="mb-4">
                            <AddProduct onSave={handleAddProduct} />
                        </div>

                        {productList.length === 0 ? (
                            <p className="text-center text-gray-500">No hay productos registrados</p>
                        ) : (
                            <table className="min-w-full bg-white border">
                                <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Descripción</th>
                                    <th className="py-2 px-4 border-b">Precio</th>
                                    <th className="py-2 px-4 border-b">Acción</th>
                                </tr>
                                </thead>
                                <tbody>
                                {productList.map((product, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b text-center">{product.descripcion}</td>
                                        <td className="py-2 px-4 border-b text-center">{product.precio}</td>
                                        <td className="py-2 px-4 border-b text-center">
                                            <EditProduct product={product} onSave={handleProductUpdate} />
                                            <DeleteProduct product={product} onDelete={handleProductDelete} />
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
