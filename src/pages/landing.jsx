import { GithubSVG, Link, LinkedInSVG, ResumeSVG } from '../components';
import profile from '/Profile_3_2698.png';


export const Landing = () => {
	const imageSizes = [300, 800, 1200];

	const generateSrcset = () => {
		return imageSizes
			.map((size) => `${profile.replace(/\_2698.png$/, `_${size}.png`)} ${size}w`)
			.join(', ');
	};

	const srcSet = generateSrcset();

	return (
		<section id="landing" className="py-48 px-3">
			<main className="max-w-l ">
				<div className="pt-2 flex text-center items-center justify-center gap-4">
					<div className="relative inline-block w-16 h-16  rounded-full border-1 border-white overflow-clip">
						<img src={profile} className="absolute h-full w-full inset-0 " sizes='100vw' srcSet={srcSet} alt="Abidali Sarangwala" loading="lazy" decoding="async" />

					</div>
					<h1 className="text-gray-50 text-xl text-left leading-5">

						<span>Abidali</span>
						<br />
						<span>Sarangwala</span>
					</h1>
				</div>
				<div className="flex items-center justify-center gap-4">
					<h1 className="text-5xl text-gray-50 font-semibold text-accenty ">FULLSTACK
					</h1>
				</div>
				<div className="flex justify-between items-center text-center text-[10px] ">
					<h1 className="text-4xl text-gray-50 font-semibold text-accentl  md:text-6xl lg:text-8xl ">
						DEVELOPER
					</h1>
					<div className="relative">
						<div className="relative ml-1 ">
							<Link href="mailto:abi.sarangwala@gmail.com" linkSymbol={"forward_to_inbox"} linkTitle={"Contact me"} />
						</div>
					</div>
				</div>
				<div className='pt-2 text-center'>
					<div className='flex justify-evenly'>
						<Link href="" svg={<LinkedInSVG />} />
						<Link href="" svg={<GithubSVG />} />
						<Link href="" svg={<ResumeSVG />} linkTitle={"Resume"} />
					</div>

				</div>
			</main >
		</section >
	);
}

