import React from 'react';


function LoginForm(props) {

    const [loginForm, setLoginForm] = React.useState({ email: '', password: ''});
    const [error, setError] = React.useState('');

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        const body = `email=${loginForm.email}&password=${loginForm.password}`;
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        };
        fetch('/login', options)
            .then(response => {
                if(response.status === 401){
                    setError("Login failed");
                } else {
                    props.logSet(true, loginForm.email); //
                }
            })
        // tu bi sada trebao ic fetch dio // 

        //pravimo se da je svaki login ispravan:


    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {email: loginForm.email, password:loginForm.password};
        newForm[name] = value;
        setLoginForm(newForm);
    }   

    return (
        <div className="Login">
            <form onSubmit={onSubmit}>
                <div className="FormRow">
                    <label>email</label>
                    <input name='email' onChange={onChange} value={loginForm.email} type='email' required/>
                </div>
                <div className="FormRow">
                    <label>Password</label>
                    <input name='password' type="password" onChange={onChange} value={loginForm.password} type='password' required/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default LoginForm

