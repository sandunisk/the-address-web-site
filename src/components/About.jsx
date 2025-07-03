import { motion } from "motion/react"

export function About() {
    return(
        <>
            <motion.div 
            initial={{opacity:0, x:200}} 
            transition={{duration: 1}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once: true}}
            
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
                <h1 className="text-xl sm:text-4xl font-bold mb-2">About<span className=" text-lg sm:text-2xl underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
                <p className="text-gray-500 max-w-80 text-center mb-20">
                    Passionate about properties, dedicated to your dreams
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 m-auto">
                    <img src="about_image.png" className="w-full sm:w-1/2 max-w-lg" />
                    <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 mt-20">
                            <div>
                                <p className="text-4xl font-medium text-gray-800">10+</p>
                                <p>Years of Excellence</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">15+</p>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">25+</p>
                                <p>Mn. Sq. Ft. Delivered</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">10+</p>
                                <p>On-going Projects</p>
                            </div>
                        </div>
                         <p className="my-10 max-w-lg">we believe that a home is more than just a place to live — it’s where life happens. With a strong focus on quality, design, and trust, we build thoughtfully planned communities that combine comfort, style, and lasting value. Whether you're a first-time buyer or looking for your forever home, we’re committed to making your homeownership journey smooth, transparent, and rewarding.</p>
                            <button className="bg-[#32BA9A] text-white px-8 py-2 rounded cursor-pointer">Learn More</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}