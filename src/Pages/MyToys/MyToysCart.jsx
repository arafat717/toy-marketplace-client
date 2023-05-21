/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import useSettitle from "../../Hooks/useSettitle";


const MyToysCart = ({ toy, handledelete }) => {
    useSettitle('my toys')
    const { _id, name, date, photo, userName, price, catagory, quantity, discription } = toy;
    return (
        <div className="overflow-x-auto mt-2 w-full">
           
            <table className="table w-full">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <button onClick={() => handledelete(_id)} className="btn btn-outline  btn-error">DELETE</button>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-14 h-14">
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    <div className="text-sm opacity-50">{userName}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {discription}
                            <br />
                            <span className="badge badge-ghost badge-sm">{date}</span>
                        </td>
                        <td>
                            {catagory}
                            <br />
                            <span className="badge badge-ghost badge-sm">{quantity}</span>
                        </td>
                        <td>Price: ${price}</td>
                        <th>
                            <Link to={`/updatetoy/${_id}`}><button className="btn btn-outline btn-success">UPDATE</button></Link>
                        </th>
                    </tr>
                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default MyToysCart;