// eslint-disable-next-line react/prop-types
export const Link = ({ href, linkSymbol, linkTitle, svg }) => {
	const m = { fontSize: '1.5rem', fontWeight: 200 };
	return (
		<a
			href={href}
			className={`link flex z-20 relative text-[#a80800]  whitespace-nowrap items-center justify-center max-h-[40px]  p-2 texting font-bold  ${linkTitle ? 'px-4' : ''}`}>
			<div className="w-6 aspect-square grid place-content-center">
				{linkSymbol && (
					<span className="material-symbols-outlined" style={m}>
						{linkSymbol}
					</span>
				)}
				{svg}
			</div>
			{linkTitle && <span className="ml-2 ">{linkTitle}</span>}
		</a>
	);
};
