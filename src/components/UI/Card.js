import React from 'react';
import classes from "./Card.Module.css"

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className} || ''`} {...props}>
      {props.children}
    </div>
  )
}

export default Card
