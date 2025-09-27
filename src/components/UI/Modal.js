import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

    const BackDrop = () =>{
        return <div className={classes.backdrop}></div>
    }
    const ModalOverlay = (props) =>{
        return <div className={classes.modal}>
            {props.children}
        </div>
    }

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop/>, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlay-root"))}
    </Fragment>
  )
}

export default Modal
