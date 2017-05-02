import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/main_action';

class App extends Component{
    constructor(){
        super();
    }
    render(){
        return <div className="test_block">
                <button onClick={this.props.Actions.testAction}>Добавить</button>
                {this.props.state.data}
                <button onClick={this.props.Actions.testAction2}>Очистить</button>
            </div>
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
