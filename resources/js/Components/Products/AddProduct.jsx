import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct({ onSave }) {
    const [isOpen, setIsOpen] = useState(false);
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Envía los datos del producto al servidor
        try {
            const response = await axios.post('/products', {
                descripcion,
                precio: parseFloat(precio),
            });

            // Añade el producto a la lista en el frontend
            onSave(response.data);

            // Limpia el formulario y cierra el modal
            setDescripcion('');
            setPrecio('');
            setIsOpen(false);
        } catch (error) {
            console.error("Error al guardar el producto:", error);
            alert("Hubo un problema al guardar el producto. Inténtalo de nuevo.");
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded">
                Agregar producto
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Agregar Producto</h2>
                        <form onSubmit={handleSubmit}>
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
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
