import { useState } from "react";
import { GithubSVG, Link, LinkedInSVG, ResumeSVG, EmailSVG } from "../components";


export const Contact = () => {
	const linkedInLink =
		'https://www.linkedin.com/in/abidali-sarangwala-2b717b127/';
	const email = 'mailto:abi.sarangwala@gmail.com';
	const githubLink = 'https://github.com/caspgin';
	const resume = './resume.pdf';
	const letters = ['A', 'B', 'i', 'D', 'a', 'L', 'I', 'S', 'A', 'r', 'A', 'N', 'G', 'w', 'A', 'L', 'A'];

	const bgLetters = ['a', 'i', 'r', 'w'];

	const [rotations] = useState(() =>
		letters.map(() => Math.floor(Math.random() * 21) - 10)
	);

	return (
		<div id="contact" className="relative w-full p-2 mt-5">
			<div className="text-2xl text-white relative text-center contact-title z-10">
				<div className="title z-20 relative">
					Let's talk!
				</div>
				<div className="contact-title-back h-full w-full absolute inset-0 bg-[#a80800]"></div>
			</div>
			<div className="card-container w-full h-[40vh] bg-[#747474]">
				<div className="grey-container bg-[#a80800] w-full h-full">
					<div className="wrapper w-full h-full">
						<div className="card relative bg-white w-full h-full flex items-center justify-center">
							<div className="text-wrapper absolute top-14 left-14 text-xl  ">
								<div className="l-link-container absolute w-full h-full bg-black z-10" ></div>
								<div className="link-hover absolute w-full h-full bg-[#a80800]" ></div>
								<Link href={linkedInLink} svg={<LinkedInSVG />} linkTitle={'LinkedIn'} />
							</div>
							<div className="text-wrapper absolute top-19 left-55 text-sm ">
								<div className="e-link-container absolute w-full h-full bg-black z-10" ></div>
								<div className="link-hover absolute w-full h-full bg-[#a80800]" ></div>
								<Link href={email} svg={<EmailSVG />} linkTitle={'Email'} />
							</div>
							<div className="text-wrapper absolute top-40 left-20 text-xl">
								<div className="g-link-container absolute w-full h-full bg-black z-10" ></div>
								<div className="link-hover absolute w-full h-full bg-[#a80800]" ></div>
								<Link href={githubLink} svg={<GithubSVG />} linkTitle={'Github'} />
							</div>
							<div className="text-wrapper absolute top-28 left-40 text-sm px-1 py-1">
								<div className="r-link-container absolute w-full h-full bg-black z-10" ></div>
								<div className="link-hover absolute w-full h-full bg-[#a80800]" ></div>
								<Link href={resume} svg={
									<ResumeSVG />} linkTitle={'Resume'} />
							</div>

						</div>
					</div>
				</div>
			</div>

			<div className="name-container flex flex-nowrap justify-center text-[#fefc75] font-bold 

				">
				{
					letters.map((letter, index) =>
						<div key={index} className="letters" style={{ transform: `rotate(${rotations[index]}deg)`, backgroundColor: `${bgLetters.includes(letter) ? '#a80800' : ''}`, marginLeft: `${letter === 'S' ? '1rem' : ''}`, height: `${bgLetters.includes(letter) ? ((Math.random() * 8) + 20).toString() + 'px' : 'auto'} ` }} >{letter}</div>
					)
				}

			</div>

		</div >
	);
}

