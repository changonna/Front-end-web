import React, { useState, useEffect } from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // addEventListener
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  
    return () => {
      // removeEventListener
      window.removeEventListener("scroll", () => {});
    }
  }, []);
  

  return (
    // show가 true이면 class에 nav__black 추가
    <nav className={`nav ${show && "nav__black"}`}>
     <img
      alt="Netflix logo"
      src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      className="nav__logo"
      onClick={() => window.location.reload()}
    />
    <img
      alt="User logged"
      src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
      className="nav__avatar"
    />
    </nav>
  )
}
