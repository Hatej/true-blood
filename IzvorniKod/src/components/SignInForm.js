import React from 'react';


function SignInForm(props) {

    const [signinForm, setSignInForm] = React.useState({givenName:'', familyName:'', birthYear:'', residencePlace:'', email:'' , password: ''});
    const [error, setError] = React.useState('');

    function onSubmit(e) {
        e.preventDefault();
        setError("");


        
    

    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {givenName: signinForm.givenName, familyName: signinForm.familyName, birthYear: signinForm.birthYear, residencePlace: signinForm.residencePlace, email: signinForm.email, password: signinForm.password};
        newForm[name] = value;
        setSignInForm(newForm);
    }   

    return (
        <div className="Login">
            <form onSubmit={onSubmit}>
                <div className="FormRow">
                    <label>Given name</label>
                    <input name='givenName' onChange={onChange} value={signinForm.givenName}/>
                </div>
                <div className="FormRow">
                    <label>Family name</label>
                    <input name='familyName' onChange={onChange} value={signinForm.familyName}/>
                </div>
                <div className="FormRow">
                    <label>Birth year</label>
                    <input name='birthYear' onChange={onChange} value={signinForm.birthYear}/>
                </div>
                <div className="FormRow">
                    <label>Residence place</label>
                    <input name='residencePlace' onChange={onChange} value={signinForm.residencePlace}/>
                </div>
                <div className="FormRow">
                    <label>email</label>
                    <input name='email' onChange={onChange} value={signinForm.email}/>
                </div>
                <div className="FormRow">
                    <label>Password</label>
                    <input name='password' type="password" onChange={onChange} value={signinForm.password}/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">Sign in</button>
            </form>
        </div>

    )
}

export default SignInForm

