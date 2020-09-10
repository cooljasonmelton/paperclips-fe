import React, {useState} from 'react';

// styling
import './LoginContainer.css';

// components

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [goal, setGoal] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="SignUp cfb">   
      <form className="signup-form">
        <label>
          <h5>Name:</h5>
          <input type="text" 
            onChange={e=> setName(e.target.value)}
            value={name} />
        </label>
        <label>
          <h5>Email:</h5>
          <input type="text"
            onChange={e=>{setEmail(e.target.value)}}
            value={email} />
        </label>
        <label>
          <h5>Word Count Goal:</h5>
          <input type="number" 
            onChange={e=>setGoal(e.target.value)}
            value={goal} 
            placeholder="500" />
        </label>
        <br/>
        <label>
          <h5>Password:</h5>
          <input type="password" 
            onChange={e=>setPassword(e.target.value)}
            value={password} />
        </label>
        <br/>
        <input className="submit-button" type="submit" value="sign up" />
      </form>

    </div>
  );
}

export default SignUp;
