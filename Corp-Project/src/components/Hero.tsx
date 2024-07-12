import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
        <div className="absolute -z-10 inset-0">
            <Image
                fill
                style={{ objectFit: 'cover' }}
                src={props.imgData}
                alt={props.imgAlt} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
        <div className="pt-48 flex justify-center items-center">
              <h1 className="text-white text-6xl">{props.title}</h1>
        </div>
    </div>
  )
}

export default Hero