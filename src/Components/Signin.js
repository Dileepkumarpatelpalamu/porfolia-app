import { useState } from "react";
const Signin = () => {
    const [getemail,setemail] = useState('');
    const [getpassword,setpassword] = useState('');
    const onchangeemailhandler = (e)=>{
       setemail(e.target.value); 
    }
    const onchangepasswordhandler = (e)=>{
        setpassword(e.target.value);
    }
    const submithandler = (e)=>{
        e.preventDefault();
        validate(getemail,getpassword);
        setemail('');
        setpassword('');
    }
    function validate(email,password){
        let emailPatern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwordPatern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (email.length === 0 && password.length === 0){
            alert("Email & password can't be blank...!");
            return false;
        }
        else if(emailPatern.test(email) && passwordPatern.test(password)){
            alert("Email and password valid");
            return true;
        }
        else{
            alert('Email and password invalid');
            return false;
        }
    }
    return (<>
        <div className="container w-50 mx-auto">
            <h2 className="my-3">SignIn Here..!</h2>
            <form onSubmit={(e)=>submithandler(e)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" value={getemail} onChange={(e)=>onchangeemailhandler(e)} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={getpassword} onChange={(e)=>onchangepasswordhandler(e)} className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" />
                    <label className="form-check-label" htmlFor="exampleCheck">Save password</label>
                </div>
                <button type="submit" id="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>);
}

export default Signin;