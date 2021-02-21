import React from "react";

import './styles/App.css';

import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./container/dialogs_container";
import {UserPageContainer} from "./container/userPage_container";

const App = () => {
        return (
        <BrowserRouter>
                <div className='app-wrapper'>
                        <Header/>
                        <Menu/>
                        <div className="content-wrapper">
                                <Route exact path="/main" render={() => <UserPageContainer/>}/>
                                <Route path="/dialogs" render={() => <DialogContainer/>}/>
                        </div>
                </div>
        </BrowserRouter>
        );
}

export default App;
