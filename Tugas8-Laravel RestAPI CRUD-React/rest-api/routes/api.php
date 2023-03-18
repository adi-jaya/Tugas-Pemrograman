<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\CartController;

Route::group(['prefix' => '/'], function() {
	Route::apiResource('skills', SkillController::class);
	Route::apiResource('products', ProductController::class);
	Route::apiResource('customers', CustomerController::class);
	Route::apiResource('carts', CartController::class);
});
