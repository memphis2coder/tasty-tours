import React, {useState, useEffect} from 'react';
import {withRouter, Link} from "react-router-dom";

import Menu from '../menu/Menu';

import './Header.scss';

function Header({history}) {
  // state for menu
  const [state, setState] = useState({
    initial: false, // menu is not opened
    clicked: null, // menu is not clicked yet
    icon: "Menu" // this will switch between menu and close for the icon
  });

  // handle click event for menu 
  const handleMenu = () => {
    disableMenu(); // run the timeout function everytime menu is clicked
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        icon: 'Close'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        icon: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        icon: "Menu"
      });
    }
  };

  // state for disable button
  const [disable, setDisable] = useState(false);

  // function to let us know if button should be disabled
  const disableMenu = () => {
    setDisable(!disable);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  // useEffect for pages changes using withRouter and history
  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({clicked: false, icon: 'Menu'})
    })
  })


  return (  
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">tasty tours.</Link>
          </div>
          <nav className="icon">
            <button disabled={disable} onClick={handleMenu}>MENU</button>
          </nav>
        </div>
      </div>
      <Menu state={state}/>
    </header>
  )
};

export default withRouter(Header);

