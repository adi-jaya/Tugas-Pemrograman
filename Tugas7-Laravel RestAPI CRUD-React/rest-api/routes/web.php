<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\SkillController;

Route::get('/token', function () {
	return csrf_token();
});

Route::group(['prefix' => 'api/v1'], function() {
	Route::apiResource('skills', SkillController::class);
});