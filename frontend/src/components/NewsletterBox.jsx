import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler =(e)=>{
        event.preventDefault();//it will not reload the page

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now& get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum molestiae neque tenetur quo quos praesentium amet voluptatem consequatur eius sed animi laudantium ad nesciunt, laboriosam impedit aperiam dolores provident?
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type ="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
                <button className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
            </form>
        </p>
      
    </div>
  )
}

export default NewsletterBox
