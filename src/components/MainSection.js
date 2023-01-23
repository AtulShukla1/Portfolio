function MainSection() {
    return (
        <>
            <section id="aboutme" className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                         <img className="object-cover object-center rounded" alt="hero" src="https://drive.google.com/uc?export=view?&id=1FsE8AemYyEWkEMDr23BJdhwtsgap7JG8"></img>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me</h1>
                        
                        <p className="mb-8 leading-relaxed">Hello as a student I would like to learn new technologies and as a beginner, it is very important to make projects and learn every day and grow every day</p>
                        <div className="flex justify-center">
                           <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqrzHxslqRtfPhjlxbxgDGGHPNScQCJNxTnNVzFVFRjVmwNxbzmMdPFKcszvDHgsSPzLB" target="_blank" rel="noreferrer"> <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Hire Me</button></a>
                            <a href="https://drive.google.com/file/d/1CvaFrOF-31fZ9-KiyQzxk4m1u1iV63Ma/view?usp=share_link" rel="noopener noreferrer"  target="_blank"> <button  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</button></a>
                        </div>

                    </div>
                </div> 
            </section>
        </>
    );
}
export default MainSection;