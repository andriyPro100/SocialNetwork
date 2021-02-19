import React from "react";

import './styles/App.css';

import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import UserPage from "./Components/UserPage/UserPage";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {
        debugger
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                        <Header/>
                        <Menu/>
                        <div className="content-wrapper">
                                <Route exact path="/main" render={() =>
                                    <UserPage newPostText={props.state.newPostText}
                                              posts={props.state.posts}
                                              dispatch={props.dispatch.bind(props.store)}
                                />}/>
                                <Route path="/dialogs" render={() =>
                                    <Dialogs friends={props.state.friends}
                                             messages={props.state.messages}
                                             newMessageText={props.state.newMessageText}
                                             dispatch={props.dispatch.bind(props.store)}
                                    />}/>
                        </div>
                </div>
            </BrowserRouter>

        );
}

export default App;
