import { useState, useEffect } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Notification.css";

const Notification = ({ notification }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);

    let timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  let specialClasses = "";

  if (notification.status === "fail") {
    specialClasses = "error";
  }
  if (notification.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `notification ${specialClasses}`;

  return (
    <>
      <section className={cssClasses}>
        <h2>{notification.title}</h2>
        <div>{notification.message}</div>
      </section>
    </>
  );
};

export default Notification;
