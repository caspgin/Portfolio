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
        <section id="contact">
            <div className="top">
                <h1>Get in touch!</h1>
            </div>
            <div className="bottom">
                <div className="btn">
                    <button onClick={copyToClipboard}>{email}</button>
                </div>
                <div className="btn">
                    <button onClick={linkedInButton}>linkedIn</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
