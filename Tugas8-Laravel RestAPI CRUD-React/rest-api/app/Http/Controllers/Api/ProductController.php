<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Http\Controllers\Controller;
Use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class ProductController extends Controller
{
 	// Display a listing of the resource.
	public function index()
	{
		return ProductResource::collection(Product::all());
	}

	// Display the specified resource.
	public function show($id)
	{
		$product = Product::where('idProduct', $id)->get();
		return ProductResource::collection($product);
	}

	// Store a newly created resource in storage.
	public function store(StoreProductRequest $request)
	{
		Product::create($request->validated());
		return response()->json('Product Created');
	}

	// Update the specified resource in storage.
	public function update(Request $request, $id)
	{
		Product::where('idProduct', $id)->update($request->all());
		return response()->json('Product Updated');
	}

	// Remove the specified resource from storage.
	public function destroy($id)
	{
		Product::where('idProduct', $id)->delete();
		return response()->json('Product Deleted');
	}
}
