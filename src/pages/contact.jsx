export const Contact = () => {
	const linkedInLink =
		'https://www.linkedin.com/in/abidali-sarangwala-2b717b127/';
	const email = 'abi.sarangwala@gmail.com';
	const githubLink = 'https://github.com/caspgin';
	function linkButtons(linkTo) {
		let openLink = '';
		if (linkTo == 'linkedin') {
			openLink = linkedInLink;
		} else {
			openLink = githubLink;
		}

		window.open(openLink, '_blank');
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(email);
	}

	return (
		<div id="contact">
			<div className="top">
				<span>Get in touch!</span>
			</div>
			<div className="bottom">
				<button onClick={copyToClipboard}>{email}</button>
				<button onClick={() => linkButtons('linkedin')}>
					linkedIn
				</button>
				<button onClick={() => linkButtons('github')}>github</button>
			</div>
		</div>
	);
}

