import React from 'react'

const Icon = (props) => {
  // let link = props.link
  // let target = props.target 
  // let a_className = props.a_className 
  // let i_className = props.i_className 
  // let altText = props.alt 

  return (
        <a
        href={props.href}
        target= {props.target}
        className={"an " + props.a_classname}
        onClick={props.onClick}
      >
        <img src={props.src} alt={props.alt} className={"socials " + props.i_className} />
      </a>
  )
}

export default Icon