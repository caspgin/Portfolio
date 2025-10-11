import { useState } from 'react';
import {
    GithubSVG,
    Link,
    LinkedInSVG,
    ResumeSVG,
    EmailSVG,
} from '../components';

export const Contact = () => {
    const linkedInLink =
        'https://www.linkedin.com/in/abidali-sarangwala-2b717b127/';
    const email = 'mailto:abi.sarangwala@gmail.com';
    const githubLink = 'https://github.com/caspgin';
    const resume = './resume.pdf';

    return (
        <section
            id="contact"
            className="max-w-[1440px] w-screen h-[calc(100vh-8px)] px-[8px] py-[4px] mt-5 border-1 border-white "
        >
            <div className="w-full h-full relative ">
                <div className="absolute inset-0 w-[50%] top-0 left-0 h-full ">
                    <div className="talk-panel absolute inset-0  grid items-center px-4 ">
                        <div
                            className="w-full font-[moonscape] text-white 
							*:block
							"
                        >
                            <span className="w-[40%] text-[8rem] leading-[7rem]">
                                Let's
                            </span>
                            <span className="w-[50%] text-[14rem] leading-[13rem]">
                                talk,
                            </span>
                            <span className="w-[60%] text-[14rem] leading-[13rem]">
                                meet
                            </span>
                            <span className="text-[8rem] leading-[7rem]">
                                and
                            </span>
                            <span className="w-[80%] text-[16rem] leading-[15rem] ">
                                build!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="top-panel absolute inset-0 top-[15%] left-[20%] right-0 h-[30%] grid grid-cols-9 gap-x-2 text-white">
                    <div className="bg-[#a80800] col-span-3">
                        <Link linkTitle={'LinkedIn'} href={linkedInLink} />
                    </div>
                    <div className="bg-red-500 col-span-2">
                        <div className="w-full h-full contact-panel github-panel"></div>
                    </div>
                    <div className="bg-orange-500 col-span-2">
                        <div className="w-full h-full contact-panel resume-panel"></div>
                    </div>
                    <div className="bg-yellow-500 col-span-2">
                        <div className="w-full h-full contact-panel resume-panel"></div>
                    </div>
                </div>
                <div className="middle-top-panel absolute inset-0 top-[46%] left-[33.8%] right-0 h-[28%] "></div>
                <div className="bottom-panel absolute inset-0 top-[65%] left-[42.5%] right-0 bottom-[10%] grid grid-cols-5 gap-x-4">
                    <div className=" bg-green-500 col-span-3"></div>
                    <div className="bg-yellow-500 col-span-2"></div>
                </div>
            </div>
        </section>
    );
};
