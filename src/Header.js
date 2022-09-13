import React from 'react';
import Button from './Button';

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button
        onClick={props.onToggleTheme}
      >
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

export default Header; 