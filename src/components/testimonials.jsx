import { testimonials } from "../assests";
import { motion } from "motion/react"


export function Testimonials() {
    return (
        <>
            <motion.div 
            initial={{opacity:0, x:100}} 
                transition={{duration: 1}}
                whileInView={{opacity:1, x: 0}}
                viewport={{once: true}}

            className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
                <h1 className="text-xl sm:text-4xl font-bold mb-2 text-center">Customer<span className="underline underline-offset-4 decoration-1 under font-light text-lg sm:text-2xl">Testimonials</span></h1>
                <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Real stories from our happy customers</p>
            <div className="flex flex-wrap justify-center gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-[320px] shadow-lg rounded-lg px-8 py-12 text-center">
                        <img src={testimonial.image} alt={testimonial.alt} className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
                        <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
                        <div className="flex justify-center gap-1 text-red-500 mb-4">
                            {Array.from({length: testimonial.rating}, (item, length)=>(
                                <img key={index} src="star.png" className="w-4 h-4"/>
                            ))}
                        </div>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
            
            </motion.div>
        </>
    )
}