import React from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {CodesDynamicAction} from '../actions/CodesDynamicAction';


class CodesDynamic extends React.Component {

    constructor(props) {
        super(props);
      }
    render() {
        
        const codeList = this.props.state.codesList.map((item) => {
            return (<div>
                ddd
                 {item.name}
            </div>
            )
        });

        return (
            <div className='basket'>
                asdasd
                {codeList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state: state.codes
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        codesDynamicAction: CodesDynamicAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CodesDynamic);