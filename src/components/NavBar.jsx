import { useEffect, useState } from "react"

export function NavBar() { 
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        if(showNav) {
            document.body.style.overflow = 'hidden' 
        }else{
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    },[showNav])


    return (
        <>
            <div className="absolute top-4 left-0 w-full z-10">
                <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
                    <img src="hero_logo.png" alt='logo' style={{height: '60px', width: '80px'}} />
                    <ul className="hidden md:flex gap-6 text-white">
                        <a href="#Header" className="cursor-pointer hover:text-[#32BA9A]">Home</a>
                        <a href="#Projects" className="cursor-pointer hover:text-[#32BA9A]">Projects</a>
                        <a href="#About" className="cursor-pointer hover:text-[#32BA9A]">About</a>
                        <a href="#Testimonials" className="cursor-pointer hover:text-[#32BA9A]">Testimonials</a>
                    </ul>
                    <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
                    <img onClick={()=> setShowNav(true) } src="menu.png" className="md:hidden w-10" />
                </div>
                {/* Mobile menu */}
                <div className={`md:hidden ${showNav ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white`}>
                    <div className="flex justify-end p-6 cursor-pointer">
                        <img onClick={()=> setShowNav(false)} src='cross.png' className="w-14" />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium overflow-hidden transtition-all">
                    <a onClick={()=> setShowNav(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
                    <a onClick={()=> setShowNav(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
                    <a onClick={()=> setShowNav(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
                    <a onClick={()=> setShowNav(false)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
                    </ul>
                </div>
            </div>
        </>
    )
}