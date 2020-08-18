import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="border-b font-bold p-3 flex justify-between items-center">
            <Link to="/">
                <span className="font-bold">
                    AppName
                </span>
            </Link>
            <Navigation />            
        </header>
    )
}

export default Header 