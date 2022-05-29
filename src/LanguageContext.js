import React, { Component } from "react";


export const Context = React.createContext({
    language : 'english',
});


export class LanguageStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            language : 'english',
        }
    }
    onLanguageChange = (value) => {
        this.setState({
            language : value,
        })
    }
    render() {
        let onLanguageChange = this.onLanguageChange
        return (
            <Context.Provider value={{...this.state,onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
