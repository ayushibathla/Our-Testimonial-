import './App.css';
import Testimonial from './components/Testimonial';
import reviews from "./data";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center bg-gray-200">
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our testimonials</h1>
        <div className='bg-violet-400 h-1 w-1/5 mt-1 mx-auto'></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
