import React from 'react';
import './inputText.css';

const PresentCompo = props => {
    console.log(props);
    
    let inputClass = "iui-input-text-input";
    let iconClass = "iui-input-text-icon";
    if ( props.icon ) inputClass += " with-icon";
    if ( props.fontSize ){
        switch(props.fontSize){
            case "lg": inputClass += " text-lg"; break;
            case "sm": inputClass += " text-sm"; break;
            case "xs": inputClass += " text-xs"; break;
            default:
        }
        if ( props.icon ){
            switch(props.fontSize){
                case "lg": iconClass += " text-lg"; break;
                case "sm": iconClass += " text-sm"; break;
                case "xs": iconClass += " text-xs"; break;
                default:
            }
        }
    }
    if( props.inline ) inputClass += " inline"

    let boxClass = "iui-input-text";
    if( props.inline ) boxClass += " inline"

    return (
        <div className={ boxClass }>
            <input className={ inputClass }
                type="text"
                value={ props.value }
                placeholder={ props.placeholder }
            />
            {
                props.icon ? (
                    <span className={ iconClass }>
                        <i class="material-icons">{props.icon}</i>
                    </span>
                ) : ""
            }
        </div>
    );
}

export default PresentCompo;
