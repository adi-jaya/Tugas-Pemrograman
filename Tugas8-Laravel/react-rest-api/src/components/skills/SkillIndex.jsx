import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ComponentContext from '../../Context/ComponentContext';

export const SkillIndex = () => {
	const { skills, getSkills, deleteSkill } = useContext(ComponentContext);
	
	useEffect(() => {
		getSkills();
	}, [])

	return (
		<div className="mt-2">
			<div className="flex justify-end m-2 p-2">
				<Link to="/skills/create" className="rounded-md bg-green-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500">New Skill</Link>
			</div>
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-black">
					<thead className="text-xs text-white uppercase bg-gray-900">
						<tr>
							<th scope="col" className="px-6 py-3">Name</th>
							<th scope="col" className="px-6 py-3">Slug</th>
							<th scope="col" className="px-6 py-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{ skills.map((skill) => {
							return (
								<tr key={skill.idSkill} className="bg-white border-b py-1">
									<td className="px-6 py-4">{skill.name}</td>
									<td className="px-6 py-4">{skill.slug}</td>
									<td className="px-6 py-4 space-x-2">
										<Link to={`/skills/${skill.idSkill}/edit`} className="rounded-md bg-indigo-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Edit</Link>
										<button onClick={ () => deleteSkill(skill.idSkill) } className="rounded-md bg-red-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500">Delete</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}