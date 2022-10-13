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
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  let status = "";

  if (notification.status === "fail") {
    status = "error";
  }
  if (notification.status === "success") {
    status = "success";
  }

  return (
    <>
      <TransitionGroup>
        {show && (
          <CSSTransition timeout={500} classNames="fade">
            <section className={`notification ${status}`}>
              <h2>{notification.title}</h2>
              <div>{notification.message}</div>
            </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Notification;
