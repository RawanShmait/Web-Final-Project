<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::group(["prefix"=>"v0.1"], function(){
    Route::group(["prefix"=>"user"], function(){
        Route::post("signup", [UserController::class, "signUp"]);
        Route::post("login", [UserController::class, "logIn"]);

        Route::get("view_likes/{$pid}", [UserController::class, "getLikes"]);
        Route::get("view_comments/{$pid}", [UserController::class, "getComments"]);

        Route::post("like", [UserController::class, "likePost"]);
        Route::post("comment", [UserController::class, "commentPost"]);
        // Route::post("follow", [UserController::class, "followUser"]);

        Route::post("all_posts", [UserController::class, "feed"]);
        Route::post("my_posts", [UserController::class, "getMyPosts"]);
        
        Route::post("search", [UserController::class, "searchAccount"]);
        Route::get("block", [UserController::class, "blockUser"]);
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    return $request->user();
});
