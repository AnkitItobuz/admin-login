import React from 'react'

function Signup() {
  return (
    <div className='signup-form ms-2 lg:ms-8 h-[100%] md:w-[50%]'>
        <div className='flex items-center md:gap-4  border-black py-5'>
            <p className='text-grey text-xl font-publicSan font-semibold'><span className='text-green font-bold'>Queen </span>quizzie</p>
            <span className='text-lightGrey text-xl font-semibold'>|</span>
            <p className='text-grey font-publicSans pt-2 font-bold'>ONLINE QUIZ</p>
        </div>

        <div className=' me-5 flex flex-col gap-4'>
            <h2 className='text-grey font-publicSans  font-bold text-xl'>Sign Up</h2>
            <p className='me-5 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>

        <div className='lg:mt-4 md:w-[80%]'>
            <form method="POST">
            <div>
            <label htmlFor="name" className='text-gray-500'>Name</label>
            <input type="text" name="name" id="name" className="h-8 w-full mt-1 rounded px-4 bg-smokeWhite "  placeholder="Enter your name" />
            </div>

            <div className='lg:mt-4 mt-2'>
            <label htmlFor="email" className='text-gray-500 '>Email Address</label>
            <input type="email" name="email" id="email" className="h-8  mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Enter your email address" />
            </div>

            <div className='lg:mt-4 mt-2'>
            <label htmlFor="password" className='text-gray-500 '>Password</label>
            <input type="password" name="password" id="passwrod" className="h-8  mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Enter your email address" />
            </div>

            <div className='lg:mt-4 mt-2'>
            <label htmlFor="confirm password" className='text-gray-500 '>Confirm Password</label>
            <input type="password" name="confirm password" id="confirm password" className="h-8  mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Enter your email address" />
            </div>
            <div className='lg:mt-3 flex justify-end'>
                <button type='submit' className='bg-green px-3 py-2 text-white rounded'>Sign Up</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup