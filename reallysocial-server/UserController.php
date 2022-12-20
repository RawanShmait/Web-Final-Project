<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller {

    function signUp(Request $request){
        $user=new User;
        $user->first_name=$request->first_name;
        $user->last_name=$request->last_name;
        $user->email=$request->email;
        $user->phone_number=$request->phone_number;
        $user->dob=$request->dob;
        $user->password=bcrypt($request->password);
        if($user->save()){
            return response()->json([
                "result"=>true
            ]);
        }
    }


}