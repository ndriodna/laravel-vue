<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BeritaCollection extends ResourceCollection
{
    /**
     * Transform the resource collectino into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return[
            'data' => $this->collection,
            'status' => 'success'
        ];
    }
}
