import React from "react";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
const History = () => {
  const [products, setProducts] = useState([]);
  //  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <span key={item?.id}>
            <div className="grid grid-cols-1 justify-items-center gap-y-10 place-items-center h-32 bg-utama">
              <div class="group block mx-auto shadow-lg space-y-5 flex flex-col space-y-4 bg-white ring-2 ring-kedua rounded text-center w-2/5 hover:bg-utama hover:ring-white p-2">
                <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-x-4 my-3 items-center text-slate-900 group-hover:text-white text-sm font-medium font-mono">
                  <div className="justify-items-start md:justify-items-center row-span-2 md:pl-5 ">
                    <AiFillCaretLeft />
                  </div>
                  <div className="col-span-1">{item?.username}</div>
                  <div className="col-span-1">Rp.{item?.id}</div>
                  <div className="text-center md:text-right row-span-2 md:pr-1">
                    {item?.name || "ga ada"}
                  </div>
                </div>
              </div>
            </div>
          </span>
        );
      })}

      {/* <div className="pt-20 pb-10">

      <div className="grid grid-cols-1 gap-y-10 place-items-center h-56">
      {products.map((item) => {
          return (
            <div class="group block  mx-auto shadow-lg space-y-5 flex flex-col space-y-4 bg-white ring-2 ring-kedua rounded text-center w-1/2 hover:bg-utama hover:ring-kedua p-2">
            <span key={item?.id}>
            <div className="md:flex grid gap-x-8 gap-y-4 grid-cols-3  my-2 items-center justify-between md:px-10 px-7 text-slate-900 group-hover:text-white text-sm font-semibold" >
            <div class="grid grid-rows-2 grid-flow-col gap-6">
              <div class="row-span-2 my-8">
                <AiFillCaretLeft
                type="rounded"
                />
              </div>
              <div class="col-span-1 ...">{item?.username}</div>
              <div class="col-span-1 ...">Rp.{item?.id}</div>
              <div class="row-span-2 my-8 object-right">{item?.name || "ga ada"}</div>
            </div>
              <div>
                <div>
                Rp.{item?.id}
                </div>
                <div>
                {item?.username}
                </div>
                {item?.name || "ga ada"}
              </div>
              <div className="border-2 border-black">
                <tr className="border-2 border-black">
                  <td className="border-2 border-black">
                  Rp.{item?.id}
                  </td>
                  <td className="border-2 border-black text-end" rowSpan={2}>
                  {item?.name || "ga ada"}
                  </td>
                </tr> 
                <tr className="border-2 border-black">
                  <td >
                  {item?.username}
                  </td>
                </tr>
              </div>
            </div>
            </span>
            </div>
          );
        })} 
        <div class="group block mx-auto shadow-lg space-y-3 flex flex-col space-y-4 bg-white ring-2 ring-kedua rounded text-center w-5/6 hover:bg-utama hover:ring-kedua p-2">
          <div className="text-slate-900 group-hover:text-white text-sm font-semibold">02</div>
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default History;
