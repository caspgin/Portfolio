export const Exp = () => {
	return (
		<div className="w-full ml-10 p-2 py-4 relative border-l-1 border-white">
			<div className="absolute w-10 h-10 bg-red-100 left-[-20px] top-[20px] rounded-full "> </div>
			<div className=" ml-10  rounded-lg flex flex-col gap-1 connector">
				<time className="text-xs text-gray-400">
					April 2021 - August 2022
				</time>
				<h2 className="font-semibold text-lg leading-none">PopReach</h2>
				<p className="text-[0.9rem] text-gray-400">
					Pipeline And Graphics Developer
				</p>
				<div className=" pl-3 text-sm text-gray-400">
					<ul className="list-disc flex flex-col gap-1">
						<li>
							Part of PayDay Crime War mobile FPS game dev team.
						</li>
						<li>
							Build PBS shaders in HLSL/Cg for weapons and
							characters in the Built-in render pipeline of
							unity{' '}
						</li>
						<li>
							Build pipeline to get 3d models and textural assets
							from S3 -{'>'} Maya/Photshop -{'>'} Unity and into
							the game.
						</li>
						<li>
							Develop tools in maya, photoshop and unity to speed
							up rigourous asset clean up process and to help lead
							artist.{' '}
						</li>
					</ul>
				</div>
				<div
					className="flex gap-1 flex-wrap mt-2 text-neutral-200 text-sm
					*:border-1
					*:border-white
					*:rounded-full
					*:p-1
					*:px-2
					*:font-semibold"
				>
					<span>Unity</span>
					<span>Maya</span>
					<span>Photoshop</span>
					<span>Javascript</span>
					<span>Python</span>
					<span>C#</span>
					<span>HLSL/Cg</span>
				</div>
			</div>
		</div>
	);
};

export const Edu = () => {
	return (
		<div className="w-full ml-10 p-2 py-4 relative border-l-1 border-white">
			<div className="absolute w-10 h-10 bg-red-100 left-[-20px] top-[20px] rounded-full "> </div>
			<div className=" ml-10  rounded-lg flex flex-col gap-1 connector ">
				<time className="text-xs text-gray-400">
					September 2021 - December 2023
				</time>
				<h2 className="font-semibold text-lg leading-none">
					Douglas College
				</h2>
				<p className="text-[0.9rem] text-gray-400">
					Computer Science Diploma
				</p>
			</div>
		</div>
	);
};
