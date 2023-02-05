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
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                         {...register("email", {
                            required:"Email Address is required"
                        })} 
                         className="input input-bordered w-full max-w-xs" />
                           {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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

                          className="input input-bordered w-full max-w-xs" />
                          
                        <label className="label">
                           <button onClick={handleResetPassword}> <span className="label-text">Forget Password?</span></button>
                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}


                    </div>
                    <input className='btn w-full bg-[#84b840] hover:bg-[#6a9333]' value="Login" type="submit" />
                    <div>
                        {
                           loginError && <p className='text-red-600'>{loginError} </p>  
                        }
                    </div>
                </form>
                <p>New in FastGrocer? <Link className='text-secondary' to="/signup">Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;