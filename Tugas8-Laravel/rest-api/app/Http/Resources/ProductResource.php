<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'idProduct' => $this->idProduct,
            'title' => $this->title,
            'category' => $this->category, 
            'brand' => $this->brand, 
            'price' => $this->price, 
            'rating' => $this->rating, 
            'stock' => $this->stock
        ];
    }
}