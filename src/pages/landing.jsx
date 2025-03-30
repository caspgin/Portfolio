
function Landing() {

	
	return (
		<div className="landing">	
			<div className='star-container'>
				{
					Array.from({length:200},(_,index)=>(
						<div key={index} className="star" 
							style={{
								left:(Math.random()*100).toString()+'%', 
								top: (Math.random()*100).toString()+'%',
								animation: 'twinkle '+((Math.random()*5) + 5).toString()+'s linear '+((Math.random()*5) + 1).toString()+'s infinite',
								width: ((Math.random()*3.5)+0.2),
							}}>
						</div>
					))
				}
			</div>
			<div className="sky">
			</div>
			<div className="outer">
				<div className="front">	
					<h1>
						<span className="word">Hey! I'm</span> 
						<span className="name">Abidali</span> 
						<span className="name">Sarangwala </span>
					</h1>
					<hr/>
					<p className="dev">
						<span className="type"> Web </span>
						Developer
					</p>
					
				</div>
			</div>
			<div className="tri">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<clipPath id="reverseClip">
						<g>
							<rect x="100" y="112" width="120" height="80" fill="white"/>
							<polygon points="100 112, 47 192, 160 192" fill="black"/>
						</g>
						</clipPath>
					</defs>
					<g clip-path="url(#reverseClip)">
						<path/>
					</g>

					
							<rect x="50" y="112" width="120" height="80" fill="white"/>
							<polygon points="95 112, 47 192, 160 192" fill="white"/>
				</svg>
			</div>
		</div>
	);

}


export default Landing
