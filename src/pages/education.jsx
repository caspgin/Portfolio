import { useRef } from 'react';
import Diploma from '../assets/diploma.svg?react';
import EducationSVG from '../assets/Education.svg?react';
export const Education = () => {
	const expSize = 13;
	const expLead = expSize - 1;
	return (
		<section className="education-section max-w-[1440px] w-screen h-[100vh] relative border-1 border-white ">
			<div className="absolute inset-0 max-w-full w-fit h-fit top-0 left-0 border-1 border-red-500">
				<span
					className={`block font-[moonscape] text-[${expSize}rem] tracking-wide leading-[${expLead}rem] text-white `}
				>
					Experience
				</span>
			</div>
		</section>
	);
};
