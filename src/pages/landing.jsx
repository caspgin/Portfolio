function Landing() {
    return (
        <div id="landing">
            <div className="tri">
                <svg
                    viewBox="-100 -100 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id="custom-shape">
                            <path
                                d="m 64,98 -2,356
									a 46,46 30 0 0 69,40
									L 442,319
									a 49,49 89 0 0 -1,-85
									L 122,63
									A 40,40 149 0 0 64,98
									Z"
                                transform="scale(1)"
                            />
                        </clipPath>
                        <linearGradient id="myGradient">
                            <stop offset="-10%" stopColor="#ff8000" />
                            <stop offset="22.2394%" stopColor="#f0c" />
                            <stop offset="100%" stopColor="#04f" />
                            <animate
                                attributeName="stopColor"
                                values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </linearGradient>
                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        clipPath="url(#custom-shape)"
                        transform="translate(-65,-85)"
                        fill="url(#myGradient)"
                    />
                    <image
                        href="/bitmap-modified.png"
                        width="100%"
                        height="100%"
                        clipPath="url(#custom-shape)"
                    />
                </svg>
            </div>
            <div className="star-container">
                {Array.from({ length: 200 }, (_, index) => (
                    <div
                        key={index}
                        className="star"
                        style={{
                            left: (Math.random() * 100).toString() + '%',
                            top: (Math.random() * 100).toString() + '%',
                            animation:
                                'twinkle ' +
                                (Math.random() * 5 + 5).toString() +
                                's linear ' +
                                (Math.random() * 5 + 1).toString() +
                                's infinite',
                            width: Math.random() * 3.5 + 0.2,
                        }}
                    ></div>
                ))}
            </div>
            <div className="sky"></div>
            <div className="outer">
                <div className="front">
                    <h1>
                        <span className="word">Hey! I'm</span>
                        <span className="name">Abidali</span>
                        <span className="name">Sarangwala </span>
                    </h1>
                    <hr />
                    <p className="dev">
                        <span className="type"> Web </span>
                        Developer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
