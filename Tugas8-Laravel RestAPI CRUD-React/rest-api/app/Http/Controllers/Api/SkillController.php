<?php

namespace App\Http\Controllers\Api;

use App\Models\Skill;
use App\Http\Controllers\Controller;
Use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\SkillResource;
use Illuminate\Http\Request;

class SkillController extends Controller
{
	// Display a listing of the resource.
	public function index()
	{
		return SkillResource::collection(Skill::all());
	}

	// Display the specified resource.
	public function show($id)
	{
		$skill = Skill::where('idSkill', $id)->get();
		return SkillResource::collection($skill);
	}

	// Store a newly created resource in storage.
	public function store(StoreSkillRequest $request)
	{
		Skill::create($request->validated());
		return response()->json('Skill Created');
	}

	// Update the specified resource in storage.
	public function update(Request $request, $id)
	{
		Skill::where('idSkill', $id)->update($request->all());
		return response()->json('Skill Updated');
	}

	// Remove the specified resource from storage.
	public function destroy($id)
	{
		Skill::where('idSkill', $id)->delete();
		return response()->json('Skill Deleted');
	}
}

