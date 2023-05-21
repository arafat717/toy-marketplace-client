/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import useSettitle from "../Hooks/useSettitle";


const AllToysDetails = () => {
    useSettitle('toy details')
    const data = useLoaderData()
    const {_id, name, email,date, photo, userName, price, catagory, quantity, discription}=data;
    console.log(data)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo}alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {name}</h2>
                <h2 className="card-title">Sallar Name: {userName}</h2>
                <h2 className="card-title">Available quantity: {quantity}</h2>
                <p>{email}</p>
                <p>{discription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Like</button>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;