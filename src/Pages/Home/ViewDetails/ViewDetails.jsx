import { useLoaderData } from "react-router-dom";
import useSettitle from "../../../Hooks/useSettitle";


const ViewDetails = () => {
    const details = useLoaderData();
    useSettitle('toy details')
    console.log(details)
    // eslint-disable-next-line no-unused-vars
    const { name, date, email, photo, userName, price, catagory, quantity, discription } = details;
    return (
        <div className="card w-full h-[680px] glass">
            <figure><img src={photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;