import React, { ReactNode } from "react"

interface NavBarProps {
    children: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({children}) => {
    
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    )
};

function Logo() {
    return (
        <div className="logo">
            <span role="img">📚</span>
            <h1>Life management</h1>
        </div>
    )
}


export default NavBar;
