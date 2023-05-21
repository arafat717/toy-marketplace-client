import { useContext, useEffect, useState } from "react";
import MyToysCart from "./MyToysCart";
import Swal from "sweetalert2";
import { AuthContex } from "../../AuthProviders/AuthProviders";
import useSettitle from "../../Hooks/useSettitle";
// import MyToysCart from "./MyToysCart";



const MyToys = () => {
    const {user}=useContext(AuthContex)
    const [toys, setToys] = useState([])
    useSettitle('my toys')
    console.log(toys)
    useEffect(() => {
        fetch(`https://car-toy-server-beryl.vercel.app/add/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])

    const handledelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-toy-server-beryl.vercel.app/add/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy has been deleted.',
                                'success'
                            )
                            const reamining = toys.filter(toy => toy._id !== _id)
                            setToys(reamining)
                        }

                    })
            }

        }
        )
    }
    return (
        <div className="mt-5 mb-5 ">
            <div className="flex flex-col w-full mt-4">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><h1 className="text-center text-xl  text-white">MY TOY</h1></div>
                <div className="divider"></div>

            </div>
            {
                toys.map(toy => <MyToysCart key={toy._id} handledelete={handledelete} toy={toy}></MyToysCart>)
            }
        </div>
    );
};

export default MyToys;