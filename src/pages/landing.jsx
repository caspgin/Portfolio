import profile from '/Profile_3_2698.png';
import esvg from '/affect.svg';
import ContactSVG from '../assets/Contact.svg?react';
import IntroSVG from '../assets/Intro.svg?react';

export const Landing = () => {
    const imageSizes = [300, 800, 1200];

    const generateSrcset = () => {
        return imageSizes
            .map(
                (size) =>
                    `${profile.replace(/_2698.png$/, `_${size}.png`)} ${size}w`,
            )
            .join(', ');
    };

    const srcSet = generateSrcset();

    return (
        <section
            id="landing"
            className="mt-4 p-4 w-screen h-[98vh] relative landing-section"
        >
            <main className="w-full h-full relative overflow-hidden">
                <div className="landing-me z-10 h-[clamp(20%,25vw,30%)] w-full  relative">
                    <div className="absolute left-0 w-[2rem] h-full top-0 bg-[#a80800] "></div>
                    <div className="img-panel absolute bg-[#a80800] inset-0 left-[3rem]">
                        <div className="relative h-full img-background">
                            <img
                                src={profile}
                                className="relative w-auto left-[2rem] z-10 opacity-[0.8] h-full"
                                srcSet={srcSet}
                                alt="Abidali Sarangwala"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src={esvg}
                                className="absolute h-full z-20 left-[2rem] top-0"
                                height={'100%'}
                            />
                        </div>
                    </div>
                    <div className="absolute h-[75%] w-fit z-30 top-[clamp(4rem,7vw,7rem)] left-[clamp(13rem,15vw,17rem)] ">
                        <IntroSVG width={'auto'} height={'100%'} />
                    </div>
                </div>

                <div className="landing-title w-full h-[70%] absolute left-0 top-[8rem] ">
                    <div className="title-panel absolute inset-0 grid place-content-center">
                        <div className="title-container relative z-10 text-white  flex flex-nowrap gap-[clamp(10px,2%,70px)] justify-center text-[clamp(3rem,13vw,40rem)] tracking-widest scale-y-[1.3] ">
                            <div className="inline m-0 p-1 ">FULLSTACK</div>

                            <div className="inline m-0 p-1">DEVELOPER</div>
                        </div>
                    </div>
                </div>
                <div className="landing-contact w-full h-[35%] absolute bottom-0 flex flex-nowrap justify-end">
                    <div className="contact-panel-container relative w-[50%]">
                        <a className="contact-panel absolute cursor-pointer bg-[#a80800] inset-0">
                            <div className="contact-container w-[60%] h-[60%] relative left-[30%] top-[30%] flex justify-center items-center ">
                                <ContactSVG width={'90%'} />
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </section>
    );
};
