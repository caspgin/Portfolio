function Contact() {
    const linkedInLink =
        'https://www.linkedin.com/in/abidali-sarangwala-2b717b127/';
    const email = 'abi.sarangwala@gmail.com';

    function linkedInButton() {
        window.open(linkedInLink, '_blank');
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
                <button onClick={linkedInButton}>linkedIn</button>
                <button onClick={linkedInButton}>github</button>
            </div>
        </div>
    );
}

export default Contact;
