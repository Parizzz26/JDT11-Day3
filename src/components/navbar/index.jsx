import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Navbar = () => {
  

  return (
    <div className="shadow shadow-kedua shadow-lg w-full fixed top-0 ring-kedua ring-black z-50">
      <div className="text-2xl font-bold text-kedua justify-between bg-white py-4 md:px-10 px-7">
        <div class="grid grid-flow-cols grid-rows-1 place-items-center">
          <span><AiFillCaretLeft
          type="rounded"
          />List Of Transaction</span>
        </div>
     
      </div>
    </div>
  );
  };

export default Navbar;
