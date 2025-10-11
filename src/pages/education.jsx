import { useRef } from 'react';
import Diploma from '../assets/diploma.svg?react';
import EducationSVG from '../assets/Education.svg?react';
export const Education = () => {
    return (
        <section className="education-section max-w-[1024px] my-[5rem] mx-auto w-screen text-neutral-300  h-[100vh] relative flex justify-center items-center border-1 border-white ">
            <div className="w-full">
                <div className="education-title w-fit relative">
                    <div className="w-fit p-3 relative z-10 education-title-container">
                        <EducationSVG />
                    </div>
                    <div className="absolute inset-0 bg-[#a80800] education-title-panel "></div>
                </div>

                <div className="grid grid-cols-2 gap-1 h-[32vh] mt-10 relative p-5">
                    <div className="absolute inset-0 w-[20%] border-div"></div>
                    <div className="college-wrap relative ">
                        <div className="college-panel absolute inset-0  w-[88%] bg-[#292929]">
                            <div className="college-panel-body-container w-[73%] relative top-[20%] left-[15%]">
                                <div className="college-title-panel-wrap w-full">
                                    <div className="college-title-panel bg-[#fefefe] w-full h-15 grid place-content-center ">
                                        <p className="college-title text-black text-xl tracking-wide ">
                                            Douglas College
                                        </p>
                                    </div>
                                </div>
                                <div className="font-[nimbus] mt-2 w-full h-10 flex gap-2 items-center tracking-normal">
                                    <Diploma
                                        width={'10%'}
                                        height={'auto'}
                                        color={'white'}
                                    />
                                    <p className="text-lg">
                                        Computer Science Diploma
                                    </p>
                                </div>
                                <div className="w-full h-10 font-[nimbus]">
                                    <p className="text-sm">
                                        Graduate Class 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[30%] h-[30%] bottom-0 right-[0] ">
                            <div className="deco-wrap w-full h-full">
                                <div className="deco w-full h-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="college-wrap relative ">
                        <div className="college-panel absolute inset-0 w-[88%] bg-[#292929]">
                            <div className="college-panel-body-container w-[73%] relative top-[20%] left-[15%]">
                                <div className="college-title-panel-wrap w-full ">
                                    <div className="vcad-title-panel bg-[#fefefe] w-full h-18 flex place-content-center ">
                                        <p className="vcad-title text-black text-xl tracking-wide text-wrap w-[80%] pt-2 text-center ">
                                            Visual College of Art and Desgin
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 w-full h-10 flex items-center gap-2 font-[nimbus] tracking-normal ">
                                    <Diploma
                                        width={'10%'}
                                        height={'auto'}
                                        color={'white'}
                                    />
                                    <p className="text-lg">3d Art Diploma</p>
                                </div>
                                <div className=" w-full h-10 flex font-[nimbus]">
                                    <p className="text-sm">
                                        Graduate Class 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[30%] h-[30%] bottom-0 right-0 ">
                            <div className="deco-wrap w-full h-full">
                                <div className="deco w-full h-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ComicBookLayout = () => {
    // We can use a ref here if we decide to animate the rotation of the surrounding elements
    const containerRef = useRef(null);
    const panelStyles = {
        // Large Bottom Left Panel (The most complex shape)
        panelA: {
            clipPath: 'polygon(0 0, 80% 0, 75% 50%, 100% 70%, 20% 100%, 0 80%)',
        },
        // Top Left Narrow Panel
        panelB: {
            clipPath: 'polygon(0 0, 35% 0, 30% 30%, 0 40%)',
        },
        // Top Right Narrow Panel
        panelC: {
            clipPath: 'polygon(80% 0, 100% 0, 100% 30%, 75% 50%)',
        },
        // The Large Right Panel
        panelD: {
            clipPath: 'polygon(75% 50%, 100% 30%, 100% 85%, 50% 100%, 60% 70%)',
        },
        // ... you would continue this for all 5+ fragments
    };

    return (
        <section
            className="w-screen min-h-screen flex justify-center items-center bg-black overflow-hidden"
            style={{ maxHeight: '100vh', maxWidth: '1440px', margin: '0 auto' }}
        >
            {/* The Parent Container: This defines the 100% boundary for the clip-paths */}
            <div className="relative w-full h-full max-w-[1440px] aspect-video">
                {/* 1. Large Bottom Left Panel (e.g., Education/Projects) */}
                <div
                    className="absolute inset-0 bg-red-800 text-white flex justify-center items-center"
                    style={panelStyles.panelA}
                >
                    <h2 className="text-3xl font-bold p-8">
                        MAIN CONTENT AREA
                    </h2>
                </div>

                {/* 2. Top Left Panel (e.g., Bio/Headshot) */}
                <div
                    className="absolute inset-0 bg-gray-600 text-white flex justify-center items-center"
                    style={panelStyles.panelB}
                >
                    <p className="p-4">Bio</p>
                </div>

                {/* 3. Top Right Panel (e.g., Skills summary) */}
                <div
                    className="absolute inset-0 bg-blue-600 text-white flex justify-center items-center"
                    style={panelStyles.panelC}
                >
                    <p className="p-4">Skills</p>
                </div>

                {/* 4. Large Right Panel (e.g., Contact/CTA) */}
                <div
                    className="absolute inset-0 bg-yellow-600 text-black flex justify-center items-center"
                    style={panelStyles.panelD}
                >
                    <p className="p-4">Contact</p>
                </div>

                {/* You would continue adding divs for every fragment in your image */}
            </div>
        </section>
    );
};
