import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signIn, googleSignIn, resetPassword, updateUser} = useContext(StateContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            setLoginUserEmail(data.email);
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            // console(error.message);
            setLoginError(error.message)
        })
    }

    const handleGoogleSignIn = (data) =>{
       googleSignIn()
       .then(result => {
        const user = result.user;
        const userInfo = {
            role: "buyer"
        }

        updateUser(userInfo)
            .then(()=> {
                saveUser(user.displayName, user.email, userInfo.role);
                navigate(from, {replace: true});
            })
            .catch(err => {
                toast.error(err.message)
            });
        
       })
       .catch(error => {
        setLoginError(error.message)
       });
    }

   

    const handleResetPassword = (data) => {
        console.log(data.email);
        resetPassword()
        .then(result => {
            const user = result.user;
            // console.log(user);
        })
        .catch(err => console.error(err))
    }

    const saveUser = (name, email, role)=> {
        const user = {name, email, role};
        fetch('https://fg-server.vercel.app/users',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }

    

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-semibold text-center mb-3'>Please Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                         {...register("email", {
                            required:"Email Address is required"
                        })} 
                         className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                           {errors.email && <p className='text-red-600 text-sm'>*{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                         {...register("password", {
                            required:"Password is required",
                            minLength: {
                                value:6,
                                message: 'Password must be 6 characters or longer'
                            }
                        })}                       

                          className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.password && <p className='text-red-600 text-sm'>*{errors.password?.message}</p>}
                          
                        <label className="label">
                           <button onClick={handleResetPassword}> <span className="label-text">Forget Password?</span></button>
                        </label>


                    </div>
                    <input className='btn w-full bg-[#84b840] hover:bg-[#6a9333] border-none' value="Login" type="submit" />
                    <div>
                        {
                           loginError && <p className='text-red-600'>{loginError} </p>  
                        }
                    </div>
                </form>
                <p className='my-3 text-sm text-center'>New to Fast Grocer? <Link className='text-[#84b840] hover:underline' to="/signup">Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;