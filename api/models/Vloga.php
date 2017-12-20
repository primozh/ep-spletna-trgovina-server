<?php

namespace Api;

use Illuminate\Database\Eloquent\Model;

class Vloga extends Model
{
    protected $table = "vloga";

    protected $primaryKey = "id_vloga";

    public function userRoles()
    {
        $this->hasMany("Api\UporabnikVloga", "id_vloga", "id_vloga");
    }
}
