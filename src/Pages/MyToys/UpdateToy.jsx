import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useSettitle from "../../Hooks/useSettitle";

const UpdateToy = () => {
    const toys = useLoaderData();
    useSettitle('update toy')
    // eslint-disable-next-line no-unused-vars
    const { _id, price, quantity, discription, date } = toys;


    const handleupdate = event => {
        event.preventDefault()
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const discription = form.discription.value;
        const date = form.date.value;
        const toys = {
            price, quantity, discription,date
        }

        console.log(toys)
        fetch(`https://car-toy-server-beryl.vercel.app/adds/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your toy has been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h3 className='text-black text-center'>UPDATE YOUR TOYS</h3>
            <form onSubmit={handleupdate}>
                {/* name and quentity */}


                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">
                        <label className="input-group">
                            <input type="text" defaultValue={price} placeholder="price" name='price' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="date" defaultValue={date} placeholder="date" name='date' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" defaultValue={discription} placeholder="discription" name='discription' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" defaultValue={quantity} placeholder="quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                

                {/* name and quentity */}

                <div>
                    <input className="btn btn-block m-5 gap-5 ms-5" type="submit" value="UPDATE" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;