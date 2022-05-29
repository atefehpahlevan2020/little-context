import React, {Component} from 'react';
import './App.css';
import UserCreate from "./UserCreate";
import {LanguageStore} from "./LanguageContext";
import SelectLanguage from "./SelectLanguage";

class App extends Component {

    render() {
        return (
            <div className="App">
                <LanguageStore>
                        <SelectLanguage onLanguageChange={this.onLanguageChange}/>
                        <UserCreate/>
                </LanguageStore>
            </div>
        );
    }
}


export default App;
