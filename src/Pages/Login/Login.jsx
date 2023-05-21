
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../AuthProviders/AuthProviders';
import SocialLogin from '../../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const { loggedUser } = useContext(AuthContex)
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loggedUser(email, password)
            .then(res => {
                const newuser = res.user;
                console.log(newuser)
                // console.log(loggedemail)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
                Navigate(from, { replace: true })


            })
            .catch(error => {
                console.log(error)
               
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row">
                <div className="text-center mr-6 lg:text-left">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p>Already have an account? <Link className='font-bold text-orange-500' to='/register'>sign up</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;