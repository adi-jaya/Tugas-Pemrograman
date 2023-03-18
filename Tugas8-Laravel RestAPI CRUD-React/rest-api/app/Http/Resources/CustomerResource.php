<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
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
            'idCustomer' => $this->idCustomer, 
            'name' => $this->name, 
            'address' => $this->address,
            'email' => $this->email,
            'phoneNumber' => $this->phoneNumber
        ];
    }
}
