<?php

namespace App\Http\Controllers\Api;

use App\Models\Cart;
use App\Http\Controllers\Controller;
Use App\Http\Requests\StoreCartRequest;
Use App\Http\Resources\CartResource;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
    	return CartResource::collection(Cart::all());
    }

	// Store a newly created resource in storage.   
    public function store(StoreCartRequest $request)
    {
    	Cart::create($request->validated());
    	return response()->json('Checkout Success');
    }

    public function destroy($id)
    {
        Cart::where('idCart', $id)->delete();
        return response()->json('Order history deleted');
    }
}
