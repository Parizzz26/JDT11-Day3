import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Navbar = () => {
  

  return (
    <div className="w-full shadow shadow-xl shadow-kedua ring-2 ring-kedua z-50 fixed top-0">
      <div className=" bg-gray-50 py-4 md:justify-between md:px-10 px-7">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-1 pr-48">
          <div className="grid justify-items-end col-span-1 pt-0.5 pr-1.5">
            <AiFillCaretLeft className="w-14 h-7 text-kedua hover:text-white  hover:bg-utama rounded-full"
            />
          </div>
          <div className="col-span-1 font-serif text-2xl text-left font-semibold text-kedua">
            List Of Transaction
          </div>
        </div>
      </div>
    </div>
    // <div className="shadow shadow-kedua shadow-xl w-full fixed top-0 ring-kedua ring-black z-50">
    //   <div className="text-2xl font-bold text-kedua justify-between bg-white py-4 md:px-10 px-7">
    //     <div class="grid grid-flow-cols grid-rows-1 place-items-center">
    //       <span><AiFillCaretLeft
    //       type="rounded"
    //       />List Of Transaction</span>
    //     </div>
     
    //   </div>
    // </div>
  );
  };

export default Navbar;
