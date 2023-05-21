/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ShopCart = ({ data }) => {
    const { _id, name, date, email, photo, userName, price, catagory, quantity, discription } = data;
    return (
        <div className="card w-96 glass">
            <figure><img src={photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Rating: 4.5</h2>
                <p>Price: <small className="text-yellow-400 text-xl">${price}</small></p>
                <div className="card-actions justify-end">
                    <Link to={`/view/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;