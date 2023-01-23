function Navbar() {
    return (
        <>
            <header id="navbar" className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="favicon.ico" alt="title img"></img>
                        <span className="ml-3 text-xl italic">MyZone</span>
                    </a>
                    <nav className="md:ml-auto ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href={"#navbar"} className="mr-5 hover:text-gray-900">Home</a>
                        <a href={"#content"} className="mr-5 hover:text-gray-900">Projects</a>
                        <a href={"#aboutme"} className="mr-5 hover:text-gray-900">About Me</a>

                        <a href={"#skills"}>
                            <button className="inline-flex ml-auto items-center bg-gray-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-1 md:mt-0">Skills
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-4 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>

                            </button>
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
