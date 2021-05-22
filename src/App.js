import "./App.css";
import { Form, Button} from 'react-bootstrap';
import SignUpForm from './components/SignUpForm'
import { useState } from "react";
function App() {

  const [signup,setSignup] = useState('fan');
  const handler=(signup)=>
  {
    console.log(signup);
    setSignup(signup);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={()=>handler('talent')}>TalentSignUp</Button>
          <Button onClick={()=>handler('fan')}>FanSignup</Button>
          {signup === 'fan' ? <h4>Create your Fan Account</h4>:<h4>Create your Talent Account</h4>}
          <SignUpForm signup={signup}/>
        </div>
      </header> 
    </div>
  );
}

export default App;
