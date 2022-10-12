import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/reducer/auth";

import UserProfile from "./UserProfile";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length === 0) {
      return;
    }
    dispatch(authAction.login(emailRef.current.value));
  };

  const logOut = () => {
    dispatch(authAction.logOut());
  };

  return (
    <main className={classes.auth}>
      <section>
        {isAuth ? (
          <>
            <UserProfile />
            <button onClick={logOut}>LogOut</button>
          </>
        ) : (
          <form onSubmit={login}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input ref={emailRef} type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input ref={passwordRef} type="password" id="password" />
            </div>
            <button onClick={login}>Login</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Auth;
