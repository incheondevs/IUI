import React from 'react';
import PropTypes from 'prop-types';
import PresentCompo from './inputText.presentational';
/** TODO :: HOC를 써야하는 이유? **/

/* props 설정 */
const propTypes = {
    onTopLoading: PropTypes.func, // 메인 로딩 보이기 메소드
    classes: PropTypes.object.isRequired
};
const propsError = msg => { console.log(msg); alert("ERROR!"); }
const defaultProps = {
    onTopLoading: () => propsError("onTopLoading 메소드 필요!") 
}

/*** 컴포넌트 정의 Start!!!! ***/
class InputText extends React.Component {
    constructor(props){
        super(props);

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent( e ){
        
    }

    render() {
        return (
            <PresentCompo {...this.props} />
        )
    }
}
InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;
export default InputText;