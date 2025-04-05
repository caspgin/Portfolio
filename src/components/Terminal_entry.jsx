import { useRef, useEffect } from 'react';

const Terminal_entry = () => {
    const myRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        myRef.current.addEventListener('mouseenter', () => {
            cursorRef.current.style.transform = 'scale(1)';
            myRef.current.addEventListener('mousemove', (e) => {
                const fx = cursorRef.current.offsetWidth / 2;
                const fy = cursorRef.current.offsetHeight / 2;
                cursorRef.current.style.left = `${e.offsetX - fx}px`;
                cursorRef.current.style.top = `${e.offsetY - fy}px`;
            });
        });

        myRef.current.addEventListener('mouseleave', () => {
            cursorRef.current.style.transform = 'scale(0)';
            myRef.current.removeEventListener('mousemove', () => {});
        });

        return () => {
            myRef.current.removeEventListener('mouseenter', () => {});
            myRef.current.removeEventListener('mouseleave', () => {});
            myRef.current.removeEventListener('mousemove', () => {});
        };
    }, []);

    const handleClick = () => {
        window.open('https://github.com/caspgin/TerminalTextEditor', '_blank');
    };

    return (
        <div className="entry">
            <div
                className="card-container"
                id="terminal"
                ref={myRef}
                onClick={handleClick}
            >
                <div className="highlight"></div>
                <div id="custom-cursor" ref={cursorRef}>
                    <p>see project</p>
                </div>
                <div className="card">
                    <span>A text editor in terminal.</span>
                    <div className="img">
                        <img
                            src="/Portfolio/textEditor.png"
                            alt="text editor start screen"
                        />
                    </div>
                </div>
            </div>
            <div className="meta-container">
                <div>
                    <div></div>
                </div>
                <div className="data">
                    <span>Terminal Text Editor</span>
                    <p>
                        A simple text editor that runs in terminal using the
                        termios library for Linux. Followingfeatures are added
                        as of now:{' '}
                    </p>
                    <ul>
                        <li>
                            <div>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                                </svg>
                            </div>
                            <span>
                                Basic Text Editing: Create, view, and edit text
                                files directly in the terminal.
                            </span>
                        </li>
                        <li>
                            <div>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                                </svg>
                            </div>
                            <span>
                                File Management: Open existing files Create new
                                files Save files with overwrite confirmation
                            </span>
                        </li>
                        <li>
                            <div>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                                </svg>
                            </div>
                            <span>
                                Search Functionality: Incremental word search
                                within documents.
                            </span>
                        </li>
                    </ul>
                    <div className="stack">
                        <span>C</span>
                        <span>GCC</span>
                        <span>Neovim</span>
                        <span>Window's Subsystem Linux</span>
                        <span>Git</span>
                    </div>
                    <div className="links">
                        <button onClick={handleClick}>
                            source code
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Terminal_entry;
