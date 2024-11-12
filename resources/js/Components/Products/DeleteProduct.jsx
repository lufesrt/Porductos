// DeleteProduct.jsx
import React from 'react';
import axios from 'axios';

export default function DeleteProduct({ product, onDelete }) {
    const handleDelete = async () => {
        if (confirm(`¿Estás seguro de que deseas eliminar el producto "${product.descripcion}"?`)) {
            try {
                await axios.delete(`/products/${product.id}`);
                onDelete(product.id); // Llamar a la función para actualizar la lista
                alert('Producto eliminado exitosamente');
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
                alert('Hubo un problema al eliminar el producto. Inténtalo de nuevo.');
            }
        }
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 rounded">
            Eliminar
        </button>
    );
}
