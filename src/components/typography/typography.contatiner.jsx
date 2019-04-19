import React from "react";
import PropTypes from "prop-types";
import H1 from "./h1.presentational.jsx";
import H2 from "./h2.presentational.jsx";
import H3 from "./h3.presentational.jsx";
import H4 from "./h4.presentational.jsx";
import H5 from "./h5.presentational.jsx";
import H6 from "./h6.presentational.jsx";
import H7 from "./h7.presentational.jsx";

class Typography extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        const newProps = {...this.props}; // object clone을 spread op로..
        // TODO delete.comment = (this.props의 속성들은 readonly)
        const type = newProps.type;
        delete newProps.type;

        // 인라인 여부 props 처리
        if( newProps.inline ){
            if( newProps.style ){
                newProps.style = {...newProps.style, display:"inline"}
            }else{
                newProps.style = { display:"inline" }
            }
        }
        delete newProps.inline;
        
        // 두껍게 여부 props 처리
        if( newProps.bold ){
            if( newProps.style ){
                newProps.style = {...newProps.style, fontWeight:"bold"}
            }else{
                newProps.style = { fontWeight:"bold" }
            }
        }
        delete newProps.bold;

        // 취소선 props 처리
        if( newProps.strike ){
            if( newProps.style ){
                newProps.style = {...newProps.style, textDecoration:"line-through"}
            }else{
                newProps.style = { textDecoration:"line-through" }
            }
        }
        delete newProps.strike;

        if( newProps.x2 ){
            // console.log("야!", React.createElement("span", {}, newProps.children) );
            newProps.children = React.createElement("span", {style: {fontSize:"2em"}}, newProps.children);
            if( typeof newProps.children == "object" ){
                // typeof newProps.children 
            }
        }
        delete newProps.x2;
        

        switch (type) {
            case "h1": return (<H1 {...newProps}></H1>);
            case "h2": return (<H2 {...newProps}></H2>);
            case "h3": return (<H3 {...newProps}></H3>);
            case "h4": return (<H4 {...newProps}></H4>);
            case "h5": return (<H5 {...newProps}></H5>);
            case "h6": return (<H6 {...newProps}></H6>);
            case "h7": return (<H7 {...newProps}></H7>);
            
            default: // 이도 저도 아니면 일반 p태그
        }
        return (<div {...newProps}></div>);
    }
}

Typography.propTypes = {
    type: PropTypes.string, // 종류
    inline: PropTypes.bool, // 
    bold: PropTypes.bool, // 
    strike: PropTypes.bool, // 
    x2: PropTypes.bool, // 
};
Typography.defaultProps = {
    type: "p", // 기본 p태그
    inline: false,
    bold: false,
    strike: false,
    x2: false,
}


export default Typography;