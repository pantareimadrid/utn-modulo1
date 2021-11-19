import React, {Component} from "react";

class SiteInput extends Component {
    render(){
        return(
            <div>
                <label>{this.props.inputAnchorText}</label>
                <input type="{this.props.inputType}" id="{this.props.fieldName}" />
            </div>
        )
    }

}

export default SiteInput