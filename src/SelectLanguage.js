import React, {Component} from "react";
import {Context} from "./LanguageContext";

class SelectLanguage extends Component {
    static contextType=Context;
    render() {
        return  <div className="select-language">
            Select a Language:
            <span onClick={() => {
                this.context.onLanguageChange('english');
            }}>English</span>
            <span onClick={() => {
                this.context.onLanguageChange('persian')
            }}>فارسی</span>
        </div>
    }
}
export default SelectLanguage;