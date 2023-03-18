import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';
import { useParams } from 'react-router-dom';

export const SkillEdit = () => {
	const { skillFormValues, onChangeSkill, getSkill, updateSkill } = useContext(ComponentContext);

	let { id } = useParams();

	useEffect( () => {
		getSkill(id);
	}, []);

	return (
		<div className="mt-5">
			<form onSubmit={updateSkill} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					<div className="mb-4">
						<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
						<input required
							name="name" value={skillFormValues['name']} onChange={onChangeSkill}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="slug" className="block mb-2 text-sm font-medium">Slug</label>
						<input required 
							name="slug" value={skillFormValues['slug']} onChange={onChangeSkill}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
					</div>
				</div>
				<div className="my-4">
					<button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Update</button>
				</div>
			</form>
		</div>
	)
}