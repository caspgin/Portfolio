import { useState } from 'react';
import { Edu, Exp } from '../components/expNedu';

export const Experience = () => {
	const [tab, setTab] = useState(0);
	const activeClass =
		'border-none flex-1 font-bold bg-neutral-300 text-black ';

	return (
		<section className=" pt-10 mx-auto w-screen text-neutral-300  max-w-3xl px-4 md:px-0 md:pt-20 border-t-1 border-neutral-800 rounded-t-2xl ">
			<div
				className={`flex w-[60%] mb-2 gap-2 font-semibold relative
							*:p-2
							*:w-15
							*:h-15
							*:text-ellipsis
							*:text-xl
							*:border-1
							*:border-white
							*:rounded-full
							*:min-w-0
							*:relative
			`}
			>
				<button
					className={`t ${tab == 0 ? activeClass : 'overflow-hidden'}`}
					onClick={() => setTab(0)}
				>
					<span>Experience</span>
				</button>
				<button
					className={`t ${tab == 1 ? activeClass : 'overflow-hidden'}`}
					onClick={() => setTab(1)}
				>
					<span>Education</span>
				</button>
			</div>
			<div className="flex flex-nowrap overflow-hidden w-full border-1 border-white rounded-xl bg-neutral">
				{tab === 0 && <Exp />}
				{tab === 1 && <Edu />}
			</div>
		</section>
	);
};
