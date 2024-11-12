import React, { useState } from 'react';
import axios from 'axios';

export default function EditProduct({ product, onSave }) {
    const [isOpen, setIsOpen] = useState(false);
    const [descripcion, setDescripcion] = useState(product.descripcion);
    const [precio, setPrecio] = useState(product.precio);

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            // Llama al backend para actualizar el producto
            const response = await axios.put(`/products/${product.id}`, {
                descripcion,
                precio: parseFloat(precio),
            });

            // Actualiza la lista de productos en el frontend
            onSave(response.data);

            // Cierra el modal
            setIsOpen(false);
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            alert("Hubo un problema al actualizar el producto. Inténtalo de nuevo.");
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-yellow-500 text-white px-4 py-1 mr-2 rounded">
                Editar
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Editar Producto</h2>
                        <form onSubmit={handleEdit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Descripción</label>
                                <input
                                    type="text"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Precio</label>
                                <input
                                    type="number"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 mr-2 rounded">
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
