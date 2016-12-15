import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    onInputChange(term){
        this.setState({
            term: term.target.value
        })
        this.props.onSearchTermChange(this.state.term)
    }

     render(){
         return (
             <div className="search-bar">
                <input 
                 value={this.state.term}
                 onChange={this.onInputChange.bind(this)} /><br/>
             </div>   
         );
     }
}

export default SearchBar;