<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtén todos los productos
        $products = Product::all();
//        dd(auth()->user());
        // Devuelve los productos y los datos de usuario autenticado
        return Inertia::render('Dashboard', [
            'auth' => auth()->user(),
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Valida los datos del producto
        $validatedData = $request->validate([
            'descripcion' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
        ]);

        // Crea el nuevo producto en la base de datos
        $product = Product::create($validatedData);

        // Retorna el producto creado como respuesta JSON
        return response()->json($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        // Validar los datos
        $validatedData = $request->validate([
            'descripcion' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
        ]);

        // Actualizar el producto con los datos validados
        $product->update($validatedData);

        // Retornar el producto actualizado
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($product)
    {
        $product = Product::findOrFail($product);
        $product->delete();

        return response()->json(['message' => 'Producto eliminado exitosamente']);
    }
}
