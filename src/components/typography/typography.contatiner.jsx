import React from "react";
import PropTypes from "prop-types";
import Header from "./header.presentational.jsx";

const propTypes = {
    type: PropTypes.string, // 종류
    inline: PropTypes.bool, // 
    bold: PropTypes.bool, // 
    strike: PropTypes.bool, // 
    x2: PropTypes.bool, // 
};
const defaultProps = {
    type: "p", // 기본 p태그
    inline: false,
    bold: false,
    strike: false,
    x2: false,
};

class Typography extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
    }

    render() {
        const {
            inline: isInline,
            bold: isBold,
            strike: isStrike,
            x2: isX2,
            ...restProps
        } = this.props; 

        // 인라인 여부 props 처리
        if( isInline ){
            if( restProps.style ){
                restProps.style = {...restProps.style, display:"inline"}
            }else{
                restProps.style = { display:"inline" }
            }
        }
        
        // 두껍게 여부 props 처리
        if( isBold ){
            if( restProps.style ){
                restProps.style = {...restProps.style, fontWeight:"bold"}
            }else{
                restProps.style = { fontWeight:"bold" }
            }
        }

        // 취소선 props 처리
        if( isStrike ){
            if( restProps.style ){
                restProps.style = {...restProps.style, textDecoration:"line-through"}
            }else{
                restProps.style = { textDecoration:"line-through" }
            }
        }

        // 2배 크게 처리
        if( isX2 ){
            restProps.children = React.createElement("span", {style: {fontSize:"2em"}}, restProps.children);
            if( typeof restProps.children == "object" ){
                // typeof restProps.children 
            }
        }

        switch (restProps.type) {
            case "h1": case "h2": case "h3": case "h4": case "h5":
            case "h6": return (<Header {...restProps}></Header>);
            default: // 이도 저도 아니면 일반 p태그
                return (<div {...restProps}></div>);
        }
    }
}


Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;
export default Typography;