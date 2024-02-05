"use client";

import React, { useContext, createContext, useState } from "react";


export const Calculator = () => {
  const [result, setResult] = useState("")

  //const activeTheme = () => {
  //  setTheme(theme === 'dark:bg-teal-800' ? 'bg-teal-300 ' : 'dark:bg-teal-800')
  //  console.log(theme)
  //}

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const clear = () => {
    setResult("");
  };
  const clearOnly = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    setResult(eval(result));
  };



  //className="bg-teal-300 my-3 w-52 h-14 rounded-t-lg flex dlex-col items-end" bg-teal-950
  return (
    
    <div className='bg-teal-300 dark:bg-teal-800 light:bg-teal-300 h-3/4 w-72 rounded-lg flex flex-col items-center' 
    >
      <div className=" bg-teal-50 my-3 dark:bg-teal-300 w-64  h-14 rounded-t-lg flex flex-col items-center">
        <input
          className="bg-transparent w-52 h-14 text-teal-950  flex items-end text-end active:none focus:outline-none"
          type="text"
          value={result}
        />
      </div>
      <div className=" h-3/5 w-64 mt-8 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="bg-amber-500 w-20 h-8 rounded-lg text-center flex justify-center">
            <button onClick={clear}>Clear</button>
          </div>
          <div className="rounded-full bg-green-500 h-10 w-10 text-center flex justify-center">
            <button onClick={calculate}>=</button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            name="1"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            1
          </button>
          <button
            name="2"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            2
          </button>
          <button
            name="3"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            3
          </button>
          <button
            onClick={clearOnly}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            c
          </button>
        </div>
        <div className="flex justify-between">
          <button
            name="4"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            4
          </button>
          <button
            name="5"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            5
          </button>
          <button
            name="6"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            -
          </button>
        </div>
        <div className="flex justify-between">
          <button
            name="7"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            7
          </button>
          <button
            name="8"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            8
          </button>
          <button
            name="9"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            *
          </button>
        </div>
        <div className="flex justify-between">
          <button
            name="0"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-teal-600"
          >
            0
          </button>
          <button
            name="."
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            .
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            +
          </button>
          <button
            name="/"
            onClick={handleClick}
            className="w-14 h-8 mx-1 rounded-lg bg-lime-500"
          >
            /
          </button>
        </div>
      </div>
    </div>

  );
};
