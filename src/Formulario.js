import React, {Component} from 'react';
import SiteInput from './SiteInput';
import SiteInputPassword from './SiteInputPassword';
import SiteButton from './SiteButton';

class Formulario extends Component {
    render(){
        return(
            <div className="form-container">
                <hr />
               <h3>Formulario</h3>
                <SiteInput inputType="text" inputID="firstname" inputAnchorText="Nombre:" />
                <SiteInput inputType="text" inputID="lastname" inputAnchorText="Apellido:"/>
                <SiteInput inputType="email" inputID="email" inputAnchorText="Email:" />
                <SiteInput inputType="tel" inputID="phone" inputAnchorText="Teléfono:" />
                <SiteInputPassword inputID="password" inputAnchorText="Contraseña:" />
                <SiteInputPassword inputID="repeatpassword" inputAnchorText="Confirmar contraseña:" />
                <SiteButton buttonAnchorText="Cancelar" />
                <SiteButton buttonAnchorText="Enviar" />
                </div>
                )
    }

}

export default Formulario