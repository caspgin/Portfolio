import { useState } from 'react';
import {
	GithubSVG,
	LinkedInSVG,
	ResumeSVG,
	EmailSVG,
	LinkBorder,
} from '../components';

import { Link } from 'react-router-dom';

export const Contact = () => {
	const linkedInLink =
		'https://www.linkedin.com/in/abidali-sarangwala-2b717b127/';
	const email = 'mailto:abi.sarangwala@gmail.com';
	const githubLink = 'https://github.com/caspgin';
	const resume = './resume.pdf';

	return (
		<section
			id="contact"
			className="max-w-[1440px] w-screen h-[calc(100vh-8px)] px-[8px] py-[4px] mt-5 "
		>
			<div className="w-full h-full relative ">
				<div className="absolute inset-0 w-[50%] top-0 left-0 h-full ">
					<div className="talk-panel absolute inset-0  grid items-center px-4 bg-[#a80800]">
						<div
							className="w-full font-[moonscape] text-white 
							*:block
							"
						>
							<span className="w-[40%] text-[8rem] leading-[7rem]">
								Let's
							</span>
							<span className="w-[50%] text-[14rem] leading-[13rem]">
								talk,
							</span>
							<span className="w-[60%] text-[14rem] leading-[13rem]">
								meet
							</span>
							<span className="text-[8rem] leading-[7rem]">
								and
							</span>
							<span className="w-[80%] text-[16rem] leading-[15rem] ">
								build!
							</span>
						</div>
					</div>
				</div>
				<div className="hblack relative w-[60%] left-[35%] top-[10%] skew-x-10 flex gap-[10%] flex-nowrap justify-center text-white tracking-widest">
					<a
						href={email}
						className="block w-[27%] aspect-[9/13] flex flex-col relative z-10 group
						"
					>
						<div className=" w-full grow-1 flex justify-center ">
							<div className="w-[60%] ">
								<EmailSVG width={'100%'} height={'auto'} />
							</div>
						</div>
						<div className="w-full h-[20%]  grid place-content-center">
							<span className="block text-2xl"> EMAIL</span>
						</div>
						<LinkBorder />
					</a>
					<a
						href={linkedInLink}
						className="block w-[27%]   flex flex-col z-10 group relative"
					>
						<div className=" w-full grow-1 flex justify-center  ">
							<div className="w-[60%] ">
								<LinkedInSVG width={'100%'} height={'auto'} />
							</div>
						</div>
						<div className="w-full h-[20%]  grid place-content-center">
							<span className="block text-2xl"> LINKEDIN</span>
						</div>
						<LinkBorder />
					</a>
					<a
						href={githubLink}
						className="block w-[27%]   flex flex-col group z-10 relative"
					>
						<div className=" w-full grow-1 flex justify-center  ">
							<div className="w-[60%] ">
								<GithubSVG width={'100%'} height={'auto'} />
							</div>
						</div>
						<div className="w-full h-[20%]  grid place-content-center">
							<span className="block text-2xl"> GITHUB</span>
						</div>
						<LinkBorder />
					</a>
				</div>
				<a
					href={resume}
					className="hblack text-white block relative w-[35%] left-[55%] top-[20%] h-[20%] skew-x-10 flex flex-nowrap justify-center tracking-widest"
				>
					<div className="w-[30%] h-full flex justify-center items-center">
						<div className="h-[50%]">
							<ResumeSVG height={'100%'} />
						</div>
					</div>
					<div className="grow-1 h-full grid justify-start items-center">
						<span className="block text-2xl">RESUME</span>
					</div>
				</a>
				<div className="hblack text-white relative w-[30%] left-[70%] top-[28%] h-[10%] grid grid-cols-2 gap-4">
					<div className="relative flex justify-center items-center">
						<div className="button-panel absolute inset-0 bg-[#dec952]"></div>
						<span className="block text-2xl">HOME</span>
					</div>
					<div className="relative flex justify-center items-center">
						<div className="button-panel absolute inset-0 bg-[#dec952]"></div>
						<span className="block text-2xl">WORKS</span>
					</div>
				</div>
			</div>
		</section>
	);
};
