import React, { useState, useRef, useEffect } from 'react'

function Home({ mode }) {
     const [content, setContent] = useState("");
     const inputRef = useRef(null);

     const properText = () => {
          setContent(content.replace(/\s+/g, ' ').trim().toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/gi, match => match.toUpperCase()));
     }

     const copyToClipboard = () => {
          inputRef.current.select();
          document.execCommand('copy');
          alert("Text copy to clipboard");
     }

     const handleCount = (event) => {
          setContent(event.target.value);
     }

     return (
          <div className={`${mode ? "bg-stone-900" : "bg-white"}`}>
               <div className={`flex flex-col m-8 md:m-12 ${mode ? "bg-stone-900" : "bg-white"}`}>
                    <h1 className={`text-3xl ${mode ? "text-gray-300 " : " text-black"}`}>Enter the text to analyze bellow</h1>
                    <div className=' mt-3 '>
                         <textarea className={`w-full h-80 outline-none ${mode ? "bg-zinc-700  text-gray-300 " : "bg-gray-300 text-black"} rounded-lg form-control resize-none p-2 text-2xl`} value={content} onChange={handleCount} ref={inputRef} placeholder='Writes your notes'></textarea>
                    </div>
               </div>
               <div className='flex flex-wrap m-8 gap-3 md:m-12'>
                    <button className={`border px-2 py-1 rounded-md  md:text-lg text-xl font-semibold ${mode ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-200 text-black"}`} onClick={() => setContent(content.toUpperCase())}>UPPER CASE</button>
                    <button className={`border px-2 py-1 rounded-md  md:text-lg text-xl font-semibold ${mode ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-200 text-black"}`} onClick={() => setContent(content.toLowerCase())}>lower case</button>
                    <button className={`border px-2 py-1 rounded-md  md:text-lg text-xl font-semibold ${mode ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-200 text-black"}`} onClick={properText}>Proper Text</button>
                    <button className={`border px-2 py-1 rounded-md  md:text-lg text-xl font-semibold ${mode ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-200 text-black"}`} onClick={copyToClipboard}>Copy</button>
                    <button className={`border px-2 py-1 rounded-md  md:text-lg text-xl font-semibold ${mode ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-200 text-black"}`} onClick={() => setContent("")}>Clear</button>
               </div>
               <div className='flex flex-col gap-3 m-8 md:m-12'>
                    <h1 className={`text-3xl ${mode ? "text-gray-300" : "text-black"}`}>Your text summery</h1>
                    <span className={`mt-3 text-xl ${mode ? "text-gray-300" : "text-black"}`}>You've written <span className='text-blue-500 font-medium'>{content.split(" ").filter((element) => { return element.length !== 0 }).length}</span> words and <span className='text-blue-500 font-medium'>{content.length}</span> characters</span>
               </div>
          </div>
     )
}

export default Home
