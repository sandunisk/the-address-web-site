export function Footer() {
    return(
        <>
            <div className="pt-10 px-4 md_px-20 lg:px-32 bg-[#41edc5] w-full overflow-hidden" id="Footer"> 
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <img src="hero_logo.png" alt="logo" className="w-20 h-15"/>
                        <p className="text-gray-400 mt-4 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='w-full md:w-1/5 mb-8 md:mb-o'>
                        <h3 className="text-gray-200 text-lg font-bold mb-4">Company</h3>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <a href="#Header" className="hover:text-white">Home</a>
                            <a href="#About" className="hover:text-white">About</a>
                            <a href="#Contact" className="hover:text-white">Contact Us</a>
                            <a href="#Header" className="hover:text-white">Privacy Policy</a>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                    <h3 className="text-gray-200 text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-80">The latest news, articles, and resources sent to your indow weekly.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Enter your Email" className="p-2 rounded bg-gray-100 text-gray-600 border border-gray-700 focus:outline-none w-full md:w-auto" />
                        <button className="py-2 px-4  bg-[#32BA9A] text-white">Subscribe</button>
                    </div>
                    </div>
                </div>
                <div className="border-t border-gray-400 py-4 mt-10 text-center text-gray-400">
                Copyright 2025 @ TheAddress. All Rights Reserved.
            </div>
            </div>
            
        </>
    )
}