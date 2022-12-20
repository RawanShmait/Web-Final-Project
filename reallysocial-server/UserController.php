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

    function searchAccount(Request $request){
        $users=User::where("username", $request->username)
                    ->get();
        return response()->json([
            "results"=>$users
        ]);
    }

    function likePost($pid){
        $like=new Like;
        $like->post_id=$pid;
        $like->user_id=Auth::id();
        $post=Post::where("id", $pid)
                    ->$post->num_of_likes=$post->num_of_likes+1;
        if($like->save()){
            return response()->json([
                "result"=>true
            ]);
        }
    }


}