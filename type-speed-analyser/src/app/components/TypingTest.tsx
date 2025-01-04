export default function TypingTest() {
    return (
      <div className="container h-screen mx-auto p-4 flex justify-center items-center">
        <div className="bg-blue-900 w-full p-4 text-white rounded">
          <h1 className="text-2xl font-bold text-center">Type Speed Analyser</h1>
          <p>Test your typing speed</p>
          <p>Start typing to begin the test</p>
  
          <div className="bg-white mt-4 p-4 rounded">
            <textarea
              className="w-full h-full focus:outline-none text-black"
              placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloribus, voluptas nostrum laborum vero numquam totam a animi tempora illum, voluptatibus corporis deleniti quia consequatur nihil debitis voluptates ex."
            />
          </div>
        </div>
      </div>
    );
  }
  