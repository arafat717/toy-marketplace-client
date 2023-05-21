/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AlltoysCart from "./AlltoysCart";

import useSettitle from "../Hooks/useSettitle";



const AllTouys = () => {
    const [alltoys, setAlltoys] = useState([])
    const [searchtext, setSearchtext] = useState(" ")
    useSettitle('all toys')
   
    useEffect(() => {
        fetch('https://car-toy-server-beryl.vercel.app/add')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data)
            })
    }, [])
    const handlesearch = () =>{
        fetch(`https://car-toy-server-beryl.vercel.app/searchname/${searchtext}`)
        .then(res=>res.json())
        .then(data=>{
            setAlltoys(data)
        })
    }
    return (
        <div>
            <div className="flex flex-col w-full mt-4">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><h1 className="text-center text-xl  text-white">ALL TOY WE ARE ADDED</h1></div>
                <div className="divider">
                    <div>
                        <input className="p-3" onChange={(e) => setSearchtext(e.target.value)} type="search" name="search" placeholder="search" id="" />
                        <button onClick={handlesearch} className="btn btn-active ml-2">search</button>
                    </div>
                </div>

            </div>
            {
                alltoys.map(alltoy => <AlltoysCart key={alltoy._id} alltoy={alltoy}></AlltoysCart>)
            }
        </div>
    );
};

export default AllTouys;