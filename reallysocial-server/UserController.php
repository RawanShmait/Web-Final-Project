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

    function logIn(Request $request){
        $user=User::where("email", $request->email)
                    ->where("password", bcrypt($request->password))
                    ->get();
        if($user){
            return response()->json([
                "id"=>$user->id 
            ]);
        }
        else{
            return response()->json([
                "id"=>-1
            ]);
        }
    }

    function blockUser($id){
        $user=User::find($id);
        $user->is_blocked=1;
        $user->save();
        return response()->json([
            "result"=>true
        ]);
    }

}