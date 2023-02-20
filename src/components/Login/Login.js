import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../../contexts/AuthProvider';
import logo from '../../assets/logo/logo.png'
import UseToken from '../../hooks/UseToken';
import UseTitle from '../../hooks/UseTitle';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-hot-toast';

const Login = () => {
    UseTitle('Login')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn, resetPassword, } = useContext(StateContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState(null);
    const [signInLoading, setSignInLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [token] = UseToken(loginUserEmail);
    useEffect(() => {
        if (token) {
            setSignInLoading(false);
            navigate(from, { replace: true });
        }
    }, [token])

    const handleLogin = data => {
        setSignInLoading(true);
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                toast.error(error.message);
                setSignInLoading(false);
            })
    };

    const handleGoogleSignIn = (data) => {
        setSignInLoading(true);
        googleSignIn()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    role: "buyer"
                }
                saveUser(user.displayName, user.email, userInfo.role);
            })
            .catch(error => {
                setSignInLoading(false);
                toast.error(error.message);
            });
    }

    const handleResetPassword = (data) => {
        resetPassword()
            .then(result => {
                const user = result.user;
            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };

        fetch('https://fg-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSignInLoading(false);
                    setLoginUserEmail(email);
                }
            })
            .catch(err => {
                toast.error(err.message);
                setSignInLoading(false);
            })
    }

    return (
        <div className='flex justify-center items-center bg-[#E5E7EB] pb-14'>
            <div className='w-[80%] md:w-[40%] lg:w-[30%] p-7 border bg-white text-black rounded-md my-10'>
                <Link to='/'>
                    <img src={logo} className='w-[100px] mx-auto mb-2' alt="" />
                </Link>

                <h2 className='text-2xl font-semibold text-center mb-3'>Login To Your Account</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.email && <p className='text-red-600 text-sm'>*{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })}

                            className="input input-bordered w-full focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.password && <p className='text-red-600 text-sm'>*{errors.password?.message}</p>}

                        <label className="label">
                            <button onClick={handleResetPassword}> <span className="label-text">Forget Password?</span></button>
                        </label>


                    </div>
                   <button className={signInLoading ? 'btn loading disabled w-full bg-[#84b840] hover:bg-[#6a9333] border-none': 'btn w-full bg-[#84b840] hover:bg-[#6a9333] border-none'}>Login</button>
                </form>
                <p className='my-3 text-sm text-center'>New to Fast Grocer? <Link className='text-[#84b840] hover:underline' to="/signup">Create an Account</Link></p>
                <div className="divider">OR</div>

                <button onClick={handleGoogleSignIn} className='bg-slate-700 hover:bg-slate-800 duration-300 w-full h-10 rounded-md'>
                    <span className='text-white'>Continue with</span>
                    <FcGoogle  className='h-6 w-6 ml-5 cursor-pointer inline-block  ' />
                </button>
            </div>
        </div>
    );
};

export default Login;