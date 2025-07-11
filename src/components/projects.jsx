import { useEffect, useState } from "react";
import { projectDetails } from "../assests";
import { motion } from "motion/react"

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);    

    useEffect(() => {
        const updateCardsToShow =()=> {
            if(window.innerWidth >= 1024) {
                setCardsToShow(projectDetails.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();
            window.addEventListener('resize', updateCardsToShow);
            return () => window.removeEventListener('resize', updateCardsToShow)
        
    },[])


    function handleNextProject() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectDetails.length)
    }

    function handlepPreviousProject() {
        setCurrentIndex((prevIndex) => prevIndex  === 0 ? projectDetails.length -1 : prevIndex -1);
    }



    return(
        <>
            <motion.div 
            initial={{opacity:0, x:-200}} 
                transition={{duration: 1}}
                whileInView={{opacity:1, x: 0}}
                viewport={{once: true}}
            
            className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
                <h1 className="text-xl sm:text-4xl font-bold mb-2 text-center">Projects<span className="underline underline-offset-4 decoration-1 under font-light text-lg sm:text-2xl">Completed</span></h1>
                <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Crafting Spaces, Building Legacies - Explore our portfolio</p>
            
            <div className="flex justify-end items-center mb-8">
                <button onClick={handlepPreviousProject} className="p-1 rounded mr-1 cursor-pointer" aria-label='Previous Project'>
                    <img src="left_arrow.png" alt="Previous" style={{height: '30px', width: '30px'}} />
                </button>
                <button onClick={handleNextProject} className="p-1 rounded mr-1 cursor-pointer" aria-label='Next Project'>
                    <img src="right_arrow.png" alt="Next" style={{height: '30px', width: '30px'}}/>
                </button>
            </div>

            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                    {projectDetails.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img src={project.image} alt={project.title} className="w-full h-96 object-cover mb-14" />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        {project.price} <span className="px-1">|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        </>
    )
}