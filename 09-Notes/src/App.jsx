import React from 'react'

const App = () => {
  const submitHandler = (e) => {
  e.preventDefault()
  }
  return (
    <div className=' h-screen lg:flex bg-black text-white '>
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }} className ="flex lg:w-1/2  items-start flex-col   gap-5  p-10">

        <h1 className=' text-3xl font-bold'>
        Add Notes
      </h1>
        <input type="text" placeholder='Enter Notes Title' className='px-5 w-full font-medium py-2 border-2 rounded '/>
        <textarea type='text' placeholder='Enter Notes ' className='px-5 h-32 py-2 font-medium w-full border-2 rounded '>

        </textarea>

      <button className="bg-white text-black font-medium w-full px-5 py-2 rounded">Add Notes</button>

 
      </form>
      <div className=' lg:w-1/2  lg:border-l  flex-wrap p-10  '>
      <h1 className=' text-3xl font-bold'>
        Your Notes
      </h1>
      <div id="scrol" className='flex flex-wrap gap-5 h-full mt-5 overflow-auto '>

        <div className ='h-52 w-40 rounded-2xl bg-white'></div>
        <div className ='h-52 w-40 rounded-2xl bg-white'></div>
      
        

      </div>

      </div>
    </div>
  )
}

export default App