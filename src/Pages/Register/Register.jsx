import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleFormSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(res => {
            // console.log(res.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleFormSubmit}>
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-warning">Register</button>
                        </div>
                        <p className="text-black my-2">Have an account? <Link className="text-blue-600" to='/login'>Login Now</Link></p>

                        <div className=" flex text-2xl gap-3 justify-center border-t-2 pt-4 text-gray-800">
                            <FaGoogle />
                            <FaGithub />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;