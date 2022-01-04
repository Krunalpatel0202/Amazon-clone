import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        auth.
        signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        //firebase login credentials
    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>
        {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        //firebase register credentials
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login__logo" src='https://seeklogo.com/images/E/E__Online-logo-29779231D8-seeklogo.com.png'
            />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button 
                    type='submit'
                    onClick={signIn}
                    className='login__signInButton'>Sign in</button>

                </form>
                <p>By signing-in you agree to our conditions
                    of use. Please see our policy notice and cookies.
                    We serve you ads based on we collect data from you.
                </p>
                <button
                type='submit'
                onClick={register}
                className='login__registerButton'>Create your amazon account</button>

            </div>
        </div>
    )
}

export default Login;
