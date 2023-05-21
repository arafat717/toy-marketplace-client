
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../AuthProviders/AuthProviders";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useSettitle from "../../Hooks/useSettitle";



const Register = () => {
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState()
    useSettitle('register')
    const { createuser } = useContext(AuthContex)
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createuser(email, password)
            .then(res => {
                const newuser = res.user;
                console.log(newuser)

                setSuccess('Created user Succesfully')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'sign up succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
                Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setErrors('Password should be at least 6 characters')
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  mr-6 lg:text-left">
                    <img src="" alt="" />
                </div>
                <div className="card w-full flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesignup} className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p className='text-red-950'><small>{errors}</small></p>
                            <p className='text-success-500'><small>{success}</small></p>
                        </div>
                        <p>Already have an account? <Link className='font-bold text-orange-500' to='/login'>login</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;