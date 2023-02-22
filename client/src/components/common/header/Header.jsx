import React from 'react';
import './Header.css';
function Header () {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">      
        <img src="./mylogo.svg" alt="ai" style={{height: '70px',
        width: '100%',
        height: '100px',
        padding: '0',
        margin: '0',
        }}/>
          <a href="/" className="header-logo" style={{color: 'white'
         }}>Info Nav</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
        </section>
        <section className="header-bottom__email">
        </section>
      </section>
    </section>
  )
}

export default Header;