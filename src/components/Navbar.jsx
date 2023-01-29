import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <div className="navbarMainDiv"
                style={{
                    display: 'flex',
                    justifyContent:'flex-end',
                    backgroundColor:'blue'
                    
                }}
            >
                <Link to="/" 
                style={{
                   color:'white',
                    textDecoration: 'none',
                   paddingRight:'30px'
                    
                }}
                >
                    Home
                </Link>
                <Link to="lazyload" 
                style={{
                    color:'white',
                     textDecoration: 'none',
                   paddingRight:'30px'

                     
                 }}
                >
                    Lazy Scroll
                </Link>
            </div>
        </>
    );
}

export default Navbar;