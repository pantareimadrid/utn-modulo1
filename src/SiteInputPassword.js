import React, {Component} from "react";

class SiteInputPassword extends Component {
    render(){
        return(
            <div>
                <label>{this.props.inputAnchorText}</label>
                <input type="password" id="{this.props.fieldName}" />
            </div>
        )
    }

}

export default SiteInputPassword