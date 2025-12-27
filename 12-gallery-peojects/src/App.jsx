import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [userdata, setUserdata] = useState([])
  const getdata = async () => {
  const res = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
  // const data = res.json()
  setUserdata(res.data)
  console.log(res.data);
}
let printUserdata='no user Avilable'
if(userdata.length>0){
printUserdata = userdata.map(function(elem,idx){
return <div key={idx}>

 <div className='h-40 text-white w-44 rounded-xl   bg-white'>
  <img className="h-full  w-full object-cover rounded-xl  bg-cover" src={elem.download_url} alt="" />
  <h2 className="font-bold">{elem.author}</h2>
</div>
</div>
})
}
 

  
  return (
    <div className ="bg-black h-screen p-4 text-white">
    
     <button onClick={() => {
      getdata()
     }}
     className="bg-green-600 active:scale-98 px-5 mb-3 py-2 rounded text-white">
      Get Data
      </button>
      <div className='flex flex-wrap gap-8'>
        {printUserdata}
      </div>
    </div>
  )
}

export default App