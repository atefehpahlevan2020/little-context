import React, { Component } from "react";
import {Context} from './LanguageContext';


class Field extends Component{
    static contextType = Context;
    render() {
        let username = this.context.language === 'english' ? 'Username' : 'نام کاربری'
        return(
            <div className="Field">
                <label htmlFor="username">{username}</label>
                <input type='text' placeholder={username}/>
            </div>
        )
    }
}


export default Field;