import React from "react";

import '../styles/App.css';

import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";

const App = () => {
        return (
            <div className='app-wrapper'>
                <Header/>
                <Menu/>
                <Content/>
            </div>
        );
}

export default App;
