import './forms.scss';
import { useState } from 'react';
import { validateEmail } from '../utils/Utils';


const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

function Forms(){

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        
        return (name && 
                 password.value.length >=8 && 
                validateEmail(email) && 
                role !== 'role'            
        )
      };
    
      const clearForm = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false
        });
        setRole("Role");
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm(); 

      };

    return (        
        <form>
            <div className="form">
				<div className="form-field">
                    <label>
                        First name <sup>*</sup>
                    </label>
					<input id='name' value={name} onChange={e=>setName(e.target.value)} placeholder="Name" type="text"/>
				</div>
                <div className="form-field">
                    <label>
                        Last name
                    </label>
					<input id='lastname' value={lastName} onChange={e=>setLastName(e.target.value)} placeholder="Last Name" type="text"/>
				</div>
				<div className="form-field">
                    <label>
                        Email address <sup>*</sup>
                    </label>
					<input id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email"/>
				</div>
                <div className="form-field">
                    <label>
                        Password <sup>*</sup>
                    </label>
					<input id='password' value={password.value} 
                    onChange={(e)=>{
                        setPassword({...password, value: e.target.value})
                    }} 

                    onBlur={(e)=>{
                        setPassword({...password, isTouched: true})
                    }}
                    placeholder="Password" type='password'/>
                    {(password.isTouched && password.value.length < 8) ? <PasswordErrorMessage/> : null}
                    
				</div>
				<div className="form-field">
                    <select value={role} onChange={e=> setRole(e.target.value)}>
                        <option value="role">Role</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
				</div>

                <div className="form-field">
					<button disabled={!getIsFormValid()} className='button button-gray' onClick={handleSubmit} type='submit'>Creat account</button>
				</div>

			</div>
        </form>
    )
}

export default Forms;