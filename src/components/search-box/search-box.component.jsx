import React, { Component }  from 'react';
import './search-box.styles.css'
class SearchBox extends Component{

    render() {

      return(
             <input 
               className={`serach-box ${this.props.className}`} //appending search-box class with javascript `` so we can target just this component and not generic one in future. 
               type={this.props.className}
               placeholder={this.props.placeholder} 
               onChange={this.props.onChangeHandler} 
             />
            )
    }

}

export default SearchBox;