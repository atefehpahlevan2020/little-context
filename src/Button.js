import React, { Component } from "react";
import {Context} from './LanguageContext';

class Button extends Component {
    static contextType = Context;
    render() {
        return (
            <button className="Button">{this.context.language === 'english' ? 'Submit' : 'ارسال'}</button>
        )
    }
}

export default Button;
