import { useContext } from "react";
import { AuthContex } from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContex)
    // const cars = useLoaderData()
    // const { _id, price, title, img } = cars;

    const handlecheckout = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const photo = form.photo.value;
        const userName = user?.displayName;
        const price = form.price.value;
        const catagory = form.catagory.value;
        const quantity = form.quantity.value;
        const discription = form.discription.value;
        const toys = {
            name,date,email,photo,userName,price,catagory,quantity,discription
        }
        
        console.log(toys)
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your toy has been added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      form.reset()
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h3 className='text-black text-center'>ADD YOUR TOYS</h3>
            <form onSubmit={handlecheckout}>
                {/* name and quentity */}
                <div className='flex gap-5 m-5 '>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" placeholder="name" name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text"  placeholder="photo url" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" defaultValue={user?.displayName} placeholder="first name" name='UserName' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" defaultValue="" placeholder="price" name='price' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="email" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="date" placeholder="date" name='date' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 m-5'>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" defaultValue=""placeholder="catagory" name='catagory' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">

                        <label className="input-group">
                            <input type="text" placeholder="quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control ml-10 ">

                        <label className="input-group">
                            <input type="text" placeholder="description" name='discription' className="input input-bordered w-full" />
                        </label>
                    </div>

                {/* name and quentity */}

                <div>
                    <input className="btn btn-block m-5 gap-5 ms-5" type="submit" value="ADD TOY" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;