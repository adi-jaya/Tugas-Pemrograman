<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Skill;
use App\Http\Controllers\Controller;
Use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\V1\SkillResource;
use App\Http\Resources\V1\SkillCollection;
use Illuminate\Http\Request;

class SkillController extends Controller
{
	public function index()
	{
		// return SkillResource::collection(Skill::all());
		// return SkillResource::collection(Skill::paginate(1));

		return new SkillCollection(Skill::all());
		// return new SkillCollection(Skill::paginate(1));
	}

	public function store(StoreSkillRequest $request)
	{
		Skill::create($request->validated());
		return response()->json('Skill Created');
	}

	public function show(Skill $skill)
	{
		return new SkillResource($skill);
	}

	public function update(StoreSkillRequest $request, Skill $skill)
	{
		$skill->update($request->validated());
		return response()->json('Skill Updated');
	}

	public function destroy(Skill $skill)
	{
		$skill->delete();
		return response()->json('Skill Deleted');
	}
}
