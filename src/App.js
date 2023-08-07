import './App.css';
import img1 from "./images/signup_left.png"
import Signup from './component/Signup.js';

function App() {
  return (
    <div className='md:h-[100vh] md:w-[100vw] md:flex justify-center items-center pt-3 mx-auto'>
    <div className="md:flex md:h-[100%] lg:h-[95%] bg-white lg:w-[60vw] mx-auto  rounded">
      <div className='h-[100%] md:w-[50%] '>
        <img src={img1} alt="SignUp" className='h-[100%] w-[100%] ' />
      </div>
      <Signup />
    </div>
    </div>
  );
}

export default App;
