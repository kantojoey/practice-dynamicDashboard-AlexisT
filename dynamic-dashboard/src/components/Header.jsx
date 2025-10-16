import React from "react";

const Header = ()=>{
    const currentDate = new Date().toLocaleDateString();
    return(
        <header><i>{currentDate}</i></header>
    );
};

export default Header;