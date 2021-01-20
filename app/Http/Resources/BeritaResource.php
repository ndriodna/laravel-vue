<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BeritaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'body' => $this->body,
            'subject' => $this->subject->name,
            'user' => $this->user->name,
            'publish' => $this->created_at->format('d F Y')
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
