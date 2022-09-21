import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Importent to note 
// Note that onClick want Funciton not funciton Call  So we need to make fucntion call as a function
function Navbar(props) {
    const customTheme = (cls) =>{
        // Now suppose we have clicked on red button then the bg-danger will be added in body class. but then we click on warning button , so there is a problem that it will not be changed because the body has already danger class added FileSystemDirectoryEntry. We need to reload the page to change the color. To solve this problem we need to remove the existing class from the body before adding new class on click of another panal. 
        document.body.removeAttribute("class")
        document.body.classList.add("bg-"+cls);
    }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    {/* Setting color blue by the following thing, here double curly braces means boject of object.  */}
                {/* <a className="nav-link" href="/" style = {{color:'blue'}}>About</a> */}
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about2">About2</Link>
                </li>
            </ul>
            {/* This is Panal, This is just to create Cutom Theme, By code with harry.  */}
            <div className="d-flex">
                {/* This will not work, it will go in infinit loop of a functon, Because if you want to pass the parameter to any function on click then you need to make it arrow fuction First.  */}
                {/* OnClick attribute takes funciton as a parameter only. */}
                {/* <div type="button" className="bg-primary border rounded mx-2" onClick={props.toogleMod} style={{height: '30px', width:'30px'}}></div>  Here on click is Funciton Call */}
                {/* Below we will make the funciton call as a function for onclick  */}
                <div type="button" className="bg-primary border rounded mx-2" onClick={() => customTheme('primary')} style={{height: '30px', width:'30px'}}></div>  {/*Here on click is Funciton Call*/}
                <div type="button" className="bg-success border rounded mx-2" onClick={() => customTheme('success')} style={{height: '30px', width:'30px'}}></div>
                <div type="button" className="bg-light border rounded mx-2" onClick={() => customTheme('light')} style={{height: '30px', width:'30px'}} ></div>
                <div type="button" className="bg-danger border rounded mx-2" onClick={() => customTheme('danger')} style={{height: '30px', width:'30px'}} ></div>
                <div type="button" className="bg-warning border rounded mx-2" onClick={() => customTheme('warning')} style={{height: '30px', width:'30px'}} ></div>
            </div>
            {/* Custom Theme Ended.  */}

            <div className={`form-check form-switch mx-3 text-${props.mode === 'dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchMode}</label>
            </div>
            </div>
        </div>
    </nav>
   </>
  );
}

Navbar.prototype = {
    title: PropTypes.string.isRequired
}
// Setting default props, which means if there is no props set then this default value will be passes
Navbar.defaultProps = {
    title: "I am Good Title"
}
export default Navbar;
