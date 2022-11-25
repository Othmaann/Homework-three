import { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../modal/Modal"
const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [showmodal, setModal] = useState(false);
  let email = "";
  let password = "";

  const submitForm = (e) => {
    e.preventDefault();
    if(localStorage.getItem("users")) {

    }else {setModal(true)
  return}
    const users = JSON.parse(localStorage.getItem("users"));

    let checkUsers = false;
    const userData = { email: email, password: password };

    for (const user of users) {
      if (userData.email === user.email && userData.password === user.password)  {
        checkUsers = true;
      }
    }

    if (!checkUsers) {
      setModal(true)
    } else {
      localStorage.setItem("isLoggedIn" ,true)
      navigate("/addMovie");
    }
  };

  const hideModal = () => {
    setModal(false)
  }

  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <h2 className="text"> Login</h2>
        <div className="input-container"> 
          <div className="wrapper">
            <input
              className="email-input"
              required
              type="email"
              placeholder="email"
              onChange={(e) => (email = e.target.value)}
            />
            <input
              className="password-input"
              type="password"
              required
              placeholder="password"
              onChange={(e) => (password = e.target.value)}
            />
            <input type="submit" className="submit-button" />
            {showmodal && (
            <Modal titleTxt="Incorrect Username or Password" btnText="Dismiss" hideModal= {hideModal}/>
            )}
        
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
