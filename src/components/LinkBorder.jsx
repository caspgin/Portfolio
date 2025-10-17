export const LinkBorder = () => {
	return (
		<>
			<div className="backDisplay hidden absolute inset-0 bg-black -z-10 group-hover:block"></div>
			<div className="borderDisplay hidden absolute inset-0 -m-1 bg-white -z-30 group-hover:block">
				<div className="absolute inset-0 w-[20%] h-[20%] -z-20 bg-[#e7d362]"></div>
				<div className="absolute inset-0 left-[60%] right-0 h-[80%] -z-20 bg-[#e7d362]"></div>
				<div className="absolute inset-0 top-[70%] w-[60%] bottom-0 -z-20 bg-[#e7d362]"></div>
			</div>
		</>
	);
};
