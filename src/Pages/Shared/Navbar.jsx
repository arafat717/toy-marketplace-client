import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../AuthProviders/AuthProviders";


const Navbar = () => {
    const { user, loggedOut } = useContext(AuthContex)

    const handleLoggedOut = () => {
        loggedOut()
            .then(() => {

            })
            .catch(error => { console.log(error) })
    }

    const navProduct = <>
        <Link className="m-4">Home</Link>
        <Link to='/alltoys' className="m-4">All Toys</Link>
        <Link to='/mytoys' className="m-4">MY Toys</Link>
        <Link to='/add' className="m-4">Add Toys</Link>
        {/* {
            user ? <>
                <Link to='/mytoys' className="m-4">MY Toys</Link>
                <Link to='/add' className="m-4">Add Toys</Link>
            </> : ''
        } */}
        <Link className="m-4">Blog</Link>
    </>
    return (
        <div className="navbar bg-gray-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="m-4">Home</Link>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <Link className="m-4">All Toys</Link>
                                <Link className="m-4">MY Toys</Link>
                                <Link className="m-4">Add Toys</Link>
                            </ul>
                        </li>
                        <Link className="m-4">Blog</Link>
                    </ul>
                </div>
                <img className="w-14 rounded-full" src="https://media.istockphoto.com/id/1254555114/vector/auto-car-logo-icon-vector-illustration-template-modern-sport-car-vector-logo-icon-silhouette.jpg?s=612x612&w=is&k=20&c=FiwAzR9-jaMCKHHPiQBYJyJV1r54WQhwgDz6VWJMbVo=" alt="" />
                <a className="flex ml-4 normal-case text-xl">CAR TOYS</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                {navProduct}
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img className={`w-14 rounded-full mr-2 hover:${user?.displayName}`} src={user.photoURL} alt="" />
                        <Link onClick={handleLoggedOut} className="btn">LogOut</Link>
                    </> : <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;