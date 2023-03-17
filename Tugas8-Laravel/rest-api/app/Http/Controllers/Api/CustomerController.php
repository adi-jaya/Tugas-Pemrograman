<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use App\Http\Controllers\Controller;
Use App\Http\Requests\StoreCustomerRequest;
Use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
	// Display a listing of the resource.
	public function index()
	{
		return CustomerResource::collection(Customer::all());
	}

	// Display the specified resource.
	public function show($id)
	{
		$customer = Customer::where('idCustomer', $id)->get();
		return CustomerResource::collection($customer);
	}

	// Store a newly created resource in storage.
	public function store(StoreCustomerRequest $request)
	{
		Customer::create($request->validated());
		return response()->json('Customer Created');
	}

	// Update the specified resource in storage.
	public function update(Request $request, $id)
	{
		Customer::where('idCustomer', $id)->update($request->all());
		return response()->json('Customer Updated');
	}

	// Remove the specified resource from storage.
	public function destroy($id)
	{
		Customer::where('idCustomer', $id)->delete();
		return response()->json('Customer Deleted');
	}	
}
