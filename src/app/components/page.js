"use client";

import React from "react";

export const Calculator = () => {
  return (
    <div className="bg-teal-800 h-3/4 w-56 rounded-lg flex flex-col items-center">
      <div className="bg-teal-300 my-3 w-52 h-14 rounded-t-lg flex dlex-col items-end">
        <p>Display</p>
      </div>
      <div className=" h-2/4 w-52 mt-8 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="bg-amber-500 w-10 rounded-lg text-center flex justify-center">
            <button>C</button>
          </div>
          <div className="rounded-full bg-green-500 h-8 w-8 text-center flex justify-center">
            <button>=</button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              return 1;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            1
          </button>
          <button
            onClick={() => {
              return 2;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            2
          </button>
          <button
            onClick={() => {
              return 3;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            3
          </button>
          <button className="w-10 rounded-lg bg-lime-500">+</button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              return 4;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            4
          </button>
          <button
            onClick={() => {
              return 5;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            5
          </button>
          <button
            onClick={() => {
              return 6;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            6
          </button>
          <button className="w-10 rounded-lg bg-lime-500">-</button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              return 7;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            7
          </button>
          <button
            onClick={() => {
              return 8;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            8
          </button>
          <button
            onClick={() => {
              return 9;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            9
          </button>
          <button className="w-10 rounded-lg bg-lime-500">*</button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              return 0;
            }}
            className="w-10 rounded-lg bg-teal-600"
          >
            0
          </button>
          <button className="w-10 rounded-lg bg-lime-500">.</button>
          <button className="w-10 rounded-lg bg-lime-500">+</button>
          <button className="w-10 rounded-lg bg-lime-500">/</button>
        </div>
      </div>
    </div>
  );
};
