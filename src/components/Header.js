import React from 'react'

const Header = () => {
    return (
        <div>
            <header id="intro">
                      <article classname="fullheight">
                        <div classname="hgroup">
                          <h1>Landon Hotel Test</h1>
                          <h2>West London</h2>
                          <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
                        </div>
                      </article>
                       <nav id="nav">
                        <div classname="navbar">
                          <div classname="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                          <ul>
                            <li><a classname="icon info" href="#hotelinfo"><span>info</span></a></li>
                            <li><a classname="icon rooms" href="#rooms"><span>rooms</span></a></li>
                            <li><a classname="icon dining" href="#dining"><span>dining</span></a></li>
                            <li><a classname="icon events" href="#events"><span>events</span></a></li>
                            <li><a classname="icon attractions" href="#attractions"><span>attractions</span></a></li>
                          </ul>
                        </div> 
                      </nav>
                    </header>
        </div>
    )
}

export default Header;