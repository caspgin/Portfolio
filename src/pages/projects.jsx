import { ProjectTitle } from '../components/index.jsx';
import Payday from './../components/Payday_entry.jsx';
import Terminal from './../components/Terminal_entry.jsx';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Projects = () => {
    const pinContainerRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useGSAP(
        () => {
            const childAnims = gsap.utils.toArray('.childAnim');
            childAnims.forEach((_, index) => {
                if (index == 0) {
                    gsap.set(childAnims[index], {
                        y: '0',
                        rotationX: 0,
                        scale: 1,
                    });
                } else {
                    gsap.set(childAnims[index], {
                        y: '120%',
                        rotationX: 40,
                        scale: 1.1,
                    });
                }
            });

            const stackTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: pinContainerRef.current,
                    start: 'top 0',
                    end: 'bottom top+=950vh',
                    endTrigger: pinContainerRef.current,
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.6,
                },
            });

            for (let i = 1; i < childAnims.length; i++) {
                const currentCard = childAnims[i];
                const previousCards = i;

                const stackLabel = `stack${i}`;
                stackTimeline.addLabel(stackLabel, '+=1');
                //First One
                //
                stackTimeline.to(
                    currentCard,
                    {
                        y: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 1.5,
                        ease: 'power2.out',
                    },
                    stackLabel,
                );

                for (let j = 0; j < previousCards; j++) {
                    stackTimeline.to(
                        childAnims[j],
                        {
                            y: `${j - i}%`,
                            rotationX: `${-5 * (i - j)}deg`,
                            scale: `${1 - 0.02 * (i - j)}`,
                            duration: 1.5,
                            ease: 'power2.out',
                        },
                        stackLabel,
                    );
                }
            }
            const stackLabel = `stack${childAnims.length}`;
            stackTimeline.addLabel(stackLabel, '+=1');
            const i = childAnims.length;
            for (let j = 0; j < i; j++) {
                stackTimeline.to(
                    childAnims[j],
                    {
                        y: `${j - i}%`,
                        rotationX: `${-15 * (i - j)}deg`,
                        scale: `${1 - 0.02 * (i - j)}`,
                        duration: 1.5,
                        ease: 'power2.out',
                    },
                    stackLabel,
                );
            }
        },
        { scope: pinContainerRef },
    );

    return (
        <section
            id="project"
            className=" mainSection h-[1000vh] overflow-hidden w-screen "
            ref={pinContainerRef}
        >
            <div className="h-[100vh] overflow-hidden flex flex-col">
                <ProjectTitle />
                <div
                    className="mainAnim grow-1 relative flex justify-center items-center"
                    ref={scrollContainerRef}
                >
                    <div
                        className="justAGrid transform-3d  relative  perspective-[800px] w-[90%] h-[90%] 
					*:absolute
					*:inset-0
					*:origin-top 
					*:transform-3d 
				"
                    >
                        <div className="childAnim first z-0  bg-gray-500"></div>
                        <div className="childAnim middle z-20  bg-red-500"></div>
                        <div className="childAnim middle z-30 bg-blue-500"></div>
                        <div className="childAnim end z-40  bg-green-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
