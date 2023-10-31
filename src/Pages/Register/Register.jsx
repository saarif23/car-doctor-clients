import { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
    const { signUp } = useContext(AuthContext);
    const handleSignup = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
    
        signUp(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (

        <div className="flex items-center justify-center my-8 ">
            <div className="flex-1">
                <img className="w-2/3 mx-auto" src={loginImg} alt="" />
            </div>
            <form onSubmit={handleSignup} className="flex-1 border p-10 rounded-lg" >
                <h3 className="text-3xl text-center py-5 font-bold">Sign Up</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input className="bg-[#FF3811] py-2 rounded-lg text-white" type="submit" value="Sign Up" />
                </div>
                <div className="text-center py-5">
                    <span>Or sign up  with </span>
                    <div className="flex gap-5 justify-center  py-5">
                        <span className="bg-gray-100 p-2 rounded-full"><FaFacebookF></FaFacebookF></span>
                        <span className="bg-gray-100 p-2 rounded-full"><FaLinkedinIn></FaLinkedinIn></span>
                        <span className="bg-gray-100 p-2 rounded-full"> <FcGoogle></FcGoogle></span>
                    </div>
                    <Link to="/login">  <span>Already have an account? <span className="text-[#FF3811]">Login</span></span></Link>
                </div>
            </form>
        </div>
    );
};

export default Register;