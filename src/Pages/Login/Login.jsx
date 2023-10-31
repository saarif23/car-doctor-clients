import loginImg from "../../assets/images/login/login.svg"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    // const { signIn } = useContext(AuthContext);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const handleSignIn = (event) => {
        event.preventDefault();
        const from = event.target;

        const email = from.email.value;
        const password = from.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email }
                axios.post('https://car-magician-server-site.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location.state : "/")
                        }
                    })
                // axios.post('https://car-magician-server-site.vercel.app/jwt', user)
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {
                //             navigate(location?.state ? location.state : "/")
                //         }
                //     })


                alert("login successfully")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <div className="flex items-center text-black dark:text-white justify-center my-8 ">
                <div className="flex-1">
                    <img className="w-2/3 mx-auto" src={loginImg} alt="" />
                </div>
                <form onSubmit={handleSignIn} className="flex-1 border p-10 rounded-lg" >
                    <h3 className="text-3xl text-center py-5 font-bold">Sign In</h3>

                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text dark:text-white" >Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered dark:text-slate-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered dark:text-slate-800" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="bg-[#FF3811] py-2 text-white rounded-lg" type="submit" value="Sign In" />
                    </div>
                    <div className="text-center py-5">
                        <span>Or sign in  with </span>
                        <div className="flex gap-5 justify-center  py-5">
                            <span className="bg-gray-100 p-2 rounded-full"><FaFacebookF></FaFacebookF></span>
                            <span className="bg-gray-100 p-2 rounded-full"><FaLinkedinIn></FaLinkedinIn></span>
                            <span className="bg-gray-100 p-2 rounded-full"> <FcGoogle></FcGoogle></span>
                        </div>
                        <Link to='/register'><span>new here ? <span className="text-[#FF3811]">Sign Up</span></span></Link>
                    </div>
                </form>
            </div></>
    );
};

export default Login;