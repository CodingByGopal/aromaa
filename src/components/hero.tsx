import { buttonVariants } from "./ui/button";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const Hero = () => {
    return (
        <section className=" sm:py-14 py-6 relative ">
            <Image priority fill placeholder="blur" src={hero} alt="hero" className=" object-cover   object-center -z-10" />
            <div className="container">

                <div className=" border  border-border bg-background sm:rounded-[3.5rem] rounded-[2rem]  sm:px-10 sm:py-20 p-6 ">
                    <div className=" sm:text-center text-balance  sm:max-w-[700px] mx-auto">
                        <h1 className=" font-bold text-foreground sm:text-5xl text-3xl   mb-3  ">Discover Delicious <span className="text-primary">Recipes</span> to Savor Every Bite</h1>
                        <p className=" text-base text-foreground/70 md:mb-7 mb-6  ">Find inspiration for every meal with recipes that bring flavors to life.

                        </p>
                        <div className=" flex sm:flex-row flex-col  sm:items-center sm:gap-4 gap-3 sm:justify-center ">
                            <Link prefetch={false} href="/recipes" className={buttonVariants({ variant: 'default', })}>
                                Get Cooking
                                <ArrowRight />
                            </Link>

                            <Link prefetch={false} href="/#trending" className={buttonVariants({ variant: 'secondary' })}>
                                View More
                            </Link>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero