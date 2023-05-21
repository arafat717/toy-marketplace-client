/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AlltoysCart = ({ alltoy }) => {
    const { _id, name, date, photo, userName, price, catagory, quantity, discription } = alltoy;
    return (
        <div className="overflow-x-auto mt-2 w-full">
            <table className="table w-full">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                           
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-14 h-14">
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold"> Toy Name: {name}</div>
                                    <div className="text-sm opacity-50">Seller Name: {userName}</div>
                                </div>
                            </div>
                        </td>
                        {/* <td>
                            {discription}
                            <br />
                            <span className="badge badge-ghost badge-sm">{date}</span>
                        </td> */}
                        <td>
                           Catagory: <small className="text-lime-500">{catagory}</small>
                            <br />
                            <span className="badge badge-ghost badge-sm">{quantity}</span>
                        </td>
                        <td>Price: ${price}</td>
                        <th>
                            <Link to={`/alltoydetails/${_id}`}><button className="btn btn-outline btn-success">Show Details</button></Link>
                        </th>
                    </tr>
                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default AlltoysCart;