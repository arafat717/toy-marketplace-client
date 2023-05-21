import { useEffect, useState } from "react";
import ShopCart from "./ShopCart";


const ShopCatagory = () => {
    const [activeTab, setActiveTab] = useState('bus toy')
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/toydata/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
            })
    }, [activeTab])

    const handleClick = (tabname) => {
        setActiveTab(tabname)
    }
    return (
        <div>
            <div className="bg-slate-500 text-center text-3xl p-11 gap-4 text-black">
                <h1>available toy catagory</h1>
                <div className="mt-6">
                    <button onClick={() => handleClick('car toy')} className={`btn  mr-5  ${activeTab === 'car toy' ? "btn-success" : ""}`}>car toy</button>
                    <button onClick={() => handleClick('bus toy')} className={`btn  mr-5  ${activeTab === 'bus toy' ? "btn-success" : ""}`}>Bus toy</button>
                    <button onClick={() => handleClick('semi bus toy')} className={`btn  mr-5  ${activeTab === 'semi bus toy' ? "btn-success" : ""}`}>semi bus toy</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 gap-5 ml-8">
                {
                    datas.map(data => <ShopCart key={data._id} data={data}></ShopCart>)
                }
            </div>
        </div>
    );
};

export default ShopCatagory;