import { useContext, useEffect } from 'react';
import ComponentContext from '../../Context/ComponentContext';

export const SkillCreate = () => {
	const { skillFormValues, onChangeSkill, storeSkill, errors, setErrors } = useContext(ComponentContext);

	useEffect( () => {
		setErrors({});
	}, [])

	return (
		<div className="mt-5">
			<form onSubmit={storeSkill} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
				<div className="space-y-6">
					<div className="mb-4">
						<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
						<input
							name="name" value={skillFormValues['name']} onChange={onChangeSkill}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.name && (<span className="text-sm text-red-400">{ errors.name[0] }</span>)}
					</div>
					<div className="mb-4">
						<label htmlFor="slug" className="block mb-2 text-sm font-medium">Slug</label>
						<input 
							name="slug" value={skillFormValues['slug']} onChange={onChangeSkill}
							className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
						/>
						{errors.slug && (<span className="text-sm text-red-400">{ errors.slug[0] }</span>)}
					</div>
				</div>
				<div className="my-4">
					<button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Store</button>
				</div>
			</form>
		</div>
	)
}