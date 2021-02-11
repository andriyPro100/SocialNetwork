import React from "react";

import './styles/App.css';

import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import UserPage from "./Components/UserPage/UserPage";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                        <Header/>
                        <Menu/>
                        <div className="content-wrapper">
                                <Route exact path="/main" component={UserPage}/>
                                <Route path="/dialogs" component={Dialogs}/>
                        </div>
                </div>
            </BrowserRouter>

        );
}

export default App;
