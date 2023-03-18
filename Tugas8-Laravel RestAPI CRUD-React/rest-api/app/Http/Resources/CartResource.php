<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'idCart' => $this->idCart,
            'idProduct' => $this->idProduct, 
            'product' => $this->product, 
            'quantity' => $this->quantity, 
            'cost' => $this->cost, 
            'idCustomer' => $this->idCustomer, 
            'customer' => $this->customer
        ];
    }
}
