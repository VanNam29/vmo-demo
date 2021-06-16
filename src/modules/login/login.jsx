import firebase from "firebase";
import { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginSuccess } from "../../services/login.services";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: "/admin",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const initialInput = {
  userName: "",
  passWord: "",
};

export function Login() {
  const [invalid, setInvalid] = useState(true);
  const [inputs, setInputs] = useState(initialInput);
  const dispatch = useDispatch();
  const listUser = useSelector(state => state.login);
  const history = useHistory();
  console.log(listUser.isAuthenticated);

  // useEffect(() => {
  //   if (listUser.isAuthenticated) {
  //     history.push("/admin");
  //   }
  // }, []);

  if (listUser.isAuthenticated) {
    history.push("/admin");
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputs.userName || !inputs.passWord) {
      setInvalid(false);
    }
    else {
      setInvalid(true);
      const userLogin = {
        user: inputs.userName,
        pass: inputs.passWord,
      };
      const action = loginSuccess(userLogin);
      dispatch(action);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 p-12">
      <div className="w-1/4 h-2/3 bg-white m-auto text-center">
        <p className="text-2xl pt-4">login</p>
        <form onSubmit={handleSubmit}>
          <p className={`${invalid ? "hidden" : " text-xs text-red-400"}`}>Field is not null</p>
          <div className="p-3">
            <input
              type="text"
              placeholder="user name"
              name="userName"
              value={inputs.userName}
              onChange={handleInputChange}
              className="w-3/4 h-8 border-solid border-2 border-gray-400"
            ></input>
          </div>
          <div className="p-3">
            <input
              type="password"
              placeholder="pass word"
              name="passWord"
              value={inputs.passWord}
              onChange={handleInputChange}
              className="w-3/4 h-8 border-solid border-2 border-gray-400"
            ></input>
          </div>
          <button type="submit" className="w-28 h-10 bg-blue-400 ">
            <span className="text-white">Login</span>
          </button>
        </form>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  );
}
