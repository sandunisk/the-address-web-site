import { NavBar } from "./NavBar"
import { motion } from "motion/react"

export function Header() {
    return (
        <>
            <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-[url(/hero.png)]" id="Header">
                <div class="absolute inset-0 bg-[#0f172a]/80 px-40 py-10">
                <NavBar/>
                <motion.div 
                initial={{opacity:0, y:100}} 
                transition={{duration: 1.5,}}
                whileInView={{opacity:1, y: 0}}
                viewport={{once: true}}
                className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                    <h2 className="text-lg sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-50 pb-10">Explore your dream home with us</h2>
                    <div className="space-x-8">
                        <a href="#Projects" className="border bg-transparent px-6 py-2">Projects</a>
                        <a href="#Contact" className="bg-[#32BA9A] px-6 py-2">Contact Us</a>
                    </div>
                </motion.div>
            </div>
            </div>
        </>
    )
}