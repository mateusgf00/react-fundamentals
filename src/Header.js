import React, { useContext } from 'react';
import Button from './Button';
import styles from './Header.css';

import { ThemeContext } from './ThemeContext';

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

export default Header; 