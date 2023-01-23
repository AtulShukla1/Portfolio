function Content()
{
    return(
    <>
    <section id="content" className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About My All Projects</h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This are the all projects which are made by me during the learning which is very imortant because only learning can't make you smart with projects we can able to think how our all concepts are going to use in real life or solve real world problems</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.shutterstock.com/image-vector/puzzle-3d-font-jigsaw-alphabet-600w-1122542975.jpg" alt="content"></img>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Number Shifting | Game</h2>
          <p className="leading-relaxed text-base">In this game we arrange the number in ascending number with given no of moves the code is implemented in C language and Two Dimensonal array and some logic.</p>
          <a href={"https://github.com/Atul8766/Assignments/tree/main/Projects"} rel="noopener noreferrer" target="_blank" className="mt-3 inline-flex items-center text-white bg-gray-500 border-0 py-2 px-12 ml-5 focus:outline-none hover:bg-pink-600 rounded text-lg">Open Project</a>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.alpharithms.com/wp-content/uploads/327/django-postgresql-pscycopg2-python-banner.jpg" alt="content"></img>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Memer Gate</h2>
          <p className="leading-relaxed text-base">In this project we get some meme pictures with the help of api and make secure login and registration system and edit meme the meme all the data we store in database using hasing.</p>
          <a href={"https://github.com/Atul8766/Python-Assignments/tree/main/Projects/Meme%20Maker%20Django%20Project"} rel="noopener noreferrer" target="_blank" button className="mt-3 mx-auto inline-flex text-white bg-gray-500 border-0 py-2 px-12 ml-5  focus:outline-none hover:bg-pink-600 rounded text-lg">Open Project</a>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://thumbs.dreamstime.com/z/library-text-written-programming-code-abstract-technology-background-software-developer-computer-script-concept-monitor-153539409.jpg" alt="content"></img>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Create C Library on Analyatic Geometry</h2>
          <p className="leading-relaxed text-base">In this project we make a library which help us to perform all the basic operations on our logical data and given final output so we can directly use them.</p>
          <a href={"https://github.com/Atul8766/Assignments/tree/main/Projects/Library"} rel="noopener noreferrer" target="_blank" button className="mt-3 mx-auto inline-flex text-white bg-gray-500 border-0 py-2 px-12 ml-5  focus:outline-none hover:bg-pink-600 rounded text-lg">Open Project</a>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://cdn.dribbble.com/users/892648/screenshots/6795161/phonebook.jpg?compress=1&resize=400x300" alt="content"></img>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Project Title</h2>
          <p className="leading-relaxed text-base">In this project we use to perform some CRUD operations using the idea of digital phone book so we can learn all the CRUD operations and make some projects easily and able to make best logic.</p>
          <a href={"https://github.com/Atul8766/Python-Assignments/tree/main/Projects/Project%202%20Python%20With%20Database"} rel="noopener noreferrer" target="_blank" button className="mt-3 mx-auto inline-flex text-white bg-gray-500 border-0 py-2 px-12 ml-5  focus:outline-none hover:bg-pink-600 rounded text-lg">Open Project</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    );
}

export default Content;