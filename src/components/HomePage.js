import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import "../style/HomePage.css";
const HomePage = () => {

    const isSignendIn = useSelector(selectSignedIn);

    const dispatch=useDispatch();
    const login=(response)=>{
        console.log(response);
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj));
    };

    
    return (
        <div className="home__page" style={{display: isSignendIn?"none":""}}>
            {!isSignendIn && (
                <div className="login__message">
                <h1>
                    Welcome to Creative Blogging Site
                </h1>
                <p>
                    Sign up to Read and Create Creative Blogs
                </p>
                <GoogleLogin
                    clientId="608578126383-sf3ha3rss5haucan2von5bnhsml2k0hp.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                        >
                            Login with Google
                        </button>

                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}

                />

            </div>
            
            )}
        </div>
    )
}

export default HomePage
