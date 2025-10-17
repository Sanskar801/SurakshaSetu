import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap'

export default function Laoder() {

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.from(".tagline", {
            duration: 2,
            y: 150,
            opacity: 0,
            ease: "power1.in"
        })

        // let split;
        SplitText.create(".tagline", {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                tl.from(self.lines, {
                    duration: 2,
                    yPercent: 100,
                    stagger: 0.4,
                    ease: "expo.out",
                }, );
            }
        });
    });

    return (
        <section className='hero h-[90vh] flex flex-col items-center overflow-hidden'>
            <div className="h-full w-2xl flex flex-col text-center flex-wrap justify-center items-center gap-32">
                <div>
                    <img className="absolute top-0 left-0 z-[-1] w-[25rem] opacity-55" src="src\assets\House Christmas decorations-rafiki.svg" alt="Happy protected Family" />
                    <img className="absolute top-0 left-280 z-[-1] w-[25rem] opacity-55" src="src\assets\Children-pana.svg" alt="Happy protected Family" />
                    <p className="tagline scroll-m-20 text-5xl font-semibold tracking-tight">Protect Today, Smile Tomorrow — Insurance That Cares for You and Your Family.</p>
                    <span className="text-muted-foreground text-sm">Protect your's and your family's finacial future.</span>
                    <img className="absolute top-80 left-0 z-[-1] w-[27rem] opacity-75" src="src\assets\By my car-rafiki.svg" alt="Happy protected Family" />
                    <img className="absolute top-90 left-280 z-[-1] w-[22rem] opacity-75" src="src/assets/Family-bro.svg" alt="Happy protected Family" />
                    <img className="absolute top-80 left-140 z-[-1] w-[25rem] opacity-25" src="src\assets\Insurance-bro.svg" alt="Happy protected Family" />
                </div>
            </div>
        </section>
    )
}
