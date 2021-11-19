import React, {Component} from "react";

class SiteButton extends Component {
    render(){
        return(
            <span>
                <button>{this.props.buttonAnchorText}</button>
            </span>
        )
    }

}

export default SiteButton