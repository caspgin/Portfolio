
import { LandingSVG } from '../components/LandingSVG';
import profile from '/Profile_3_2698.png';

export const Landing = () => {
	const imageSizes = [300, 800, 1200];

	const generateSrcset = () => {
		return imageSizes
			.map(
				(size) =>
					`${profile.replace(/_2698.png$/, `_${size}.png`)} ${size}w`,
			)
			.join(', ');
	};

	const srcSet = generateSrcset();

	return (
		<section id="landing" className="py-44 px-3 w-screen">
			<main className="w-full relative ">
				<div className="relative pt-2 flex text-center items-center justify-center gap-4">
				<div>
					<div className="relative inline-block w-16 h-16  rounded-full border-1 border-white overflow-clip">
						<img
							src={profile}
							className="absolute h-full w-full inset-0 "
							sizes="100vw"
							srcSet={srcSet}
							alt="Abidali Sarangwala"
							loading="lazy"
							decoding="async"
						/>
					</div>
					</div>
				</div>
			</main>
		</section>
	);
};
