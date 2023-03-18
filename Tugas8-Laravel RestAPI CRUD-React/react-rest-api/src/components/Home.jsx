import React from 'react';

export const Home = () => {
	return (
		<main className="grid min-h-full place-items-center py-24 px-6">
			<div className="text-center">
				<p className="text-base font-semibold text-indigo-600">Djay</p>
				<h1 className="mt-4 text-8xl font-bold tracking-tight text-gray-900">Home Page</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">
					Lorem ipsum dolor, sit amet consectetur, adipisicing elit.<br/>
					Rerum quidem nam laborum unde eaque,<br/>amet a consequatur,<br/>atque neque optio,<br/>
					velit ratione inventore non et aperiam iure ducimus quibusdam voluptas.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<a href="https://github.com/Djay47" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
						Go Github
					</a>
				</div>
			</div>
		</main>
	)
}