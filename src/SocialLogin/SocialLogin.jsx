import { useContext } from "react";
import { AuthContex } from "../AuthProviders/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { SocialLogin } = useContext(AuthContex)
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSocialLogin = () => {
        SocialLogin()
            .then(result => {
                console.log(result)
                Navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleSocialLogin} className="btn btn-square btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;