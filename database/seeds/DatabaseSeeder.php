<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
    		User::create([
    			'name' => 'admin',
    			'email' => 'admin@mail.com',
    			'password' => Hash::make('admin1'),
    			'role'=> 2
    		]);
    		User::create([
    			'name' => 'user',
    			'email' => 'user@mail.com',
    			'password' => Hash::make('user1'),
    			'role'=> 1
    		]);
    }
}
