import { useSelector } from "react-redux";

import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const userName = useSelector((state) => state.auth.email);

  return (
    <main className={classes.profile}>
      <h2>Hello, {userName}</h2>
    </main>
  );
};

export default UserProfile;
