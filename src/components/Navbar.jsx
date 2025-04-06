import React from 'react'

function Navbar({ mode, toggleBtn }) {

     return (
          <div >
               <div className={`flex justify-between items-center p-4 md:px-12 ${mode ? "bg-zinc-400 text-black" : "bg-zinc-800 text-gray-300"}`}>
                    <div className='flex'>
                         <h1 className='text-3xl'>TextUtils</h1>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle" onClick={toggleBtn} />
               </div>
          </div>
     )
}

export default Navbar
