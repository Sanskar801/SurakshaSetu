import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className='hero h-[90vh] flex flex-col items-center overflow-hidden'>
      <h1 className='scroll-m-20 text-center text-2xl font-bold tracking-tight text-balance'>Suraksha Kavatch Insurance</h1>
      <div className="h-full w-2xl flex flex-col text-center flex-wrap justify-center items-center gap-32">
        <div>
          <img className="absolute top-0 left-0 z-[-1] w-[25rem] opacity-55" src="src\assets\House Christmas decorations-rafiki.svg" alt="Happy protected Family" />
          <img className="absolute top-0 left-280 z-[-1] w-[25rem] opacity-55" src="src\assets\Children-pana.svg" alt="Happy protected Family" />
          <p className="scroll-m-20 text-5xl font-semibold tracking-tight">Protect Today, Smile Tomorrow — Insurance That Cares for You and Your Family.</p>
          <span className="text-muted-foreground text-sm">Protect your's and your family's finacial future.</span>
          <img className="absolute top-80 left-0 z-[-1] w-[27rem] opacity-75" src="src\assets\By my car-rafiki.svg" alt="Happy protected Family" />
          <img className="absolute top-90 left-280 z-[-1] w-[22rem] opacity-75" src="src/assets/Family-bro.svg" alt="Happy protected Family" />
          <img className="absolute top-80 left-140 z-[-1] w-[25rem] opacity-25" src="src\assets\Insurance-bro.svg" alt="Happy protected Family" />
        </div>
        <Button size={"lg"} className="w-fit bg-blue-700 shadow-2xl">CHECK OUT PLANS</Button>
      </div>
    </section>
  )
}
