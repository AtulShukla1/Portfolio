import C from '../assets/icons8-c-programming-96.png';
import Cpp from '../assets/icons8-c++-96.png';
import Python from '../assets/icons8-python-96.png';
import Django from '../assets/django.png';
import HTML from '../assets/icons8-html-5-96.png';
import CSS from '../assets/icons8-css3-96.png';
import PSQL from '../assets/icons8-postgresql-96.png';
import React from '../assets/icons8-react-96.png';






function Skills() {
    return (
        <section id='skills' className="text-gray-600 body-font">
            <div className="container px-5  mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Skills</h1>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </div>
            </div>
            <div className="container px-5 py-15 mx-auto">
                <div className="flex flex-col text-center w-full mb-20"></div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto " src={C} alt="c img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">C</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-5 w-50'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">90%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto " src={Cpp} alt="c++ img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">C++</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-5 w-60'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">95%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto w-15 " src={Python} alt="python img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">Python</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-8'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">80%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className='mx-auto' src={Django} alt="html.img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">Django</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-20 w-48'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">60%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5 py-25 mx-auto">
                <div className="flex flex-col text-center w-full mb-20"></div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto " src={HTML} alt="HTML img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">HTML</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-20 w-13'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">70%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto " src={CSS} alt="css img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">CSS</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-20 w-13'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">70%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className="mx-auto w-15 " src={React} alt="react img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">ReactJS</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-20 w-48'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">60%</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img className='mx-auto' src={PSQL} alt="psql img"></img>
                            <h2 className="title-font py-4 font-medium text-3xl text-gray-900">Postgresql</h2>
                            <div className="h-2 w-90 bg-gray-600 rounded ">
                                <div className=' py-1 bg-blue-500 h-1 rounded mr-20 w-13'></div>
                            </div>
                            <br></br>
                            <p className="leading-relaxed">70%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Skills;