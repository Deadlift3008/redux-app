import React, {Component} from 'react';
import bindActionCreators from 'redux';
import connect from 'react-redux';
import testAction from '../actions/main_action';

class App extends Component{
    render(){
        return <div className="test_block">
                <button onClick={this.props.testAction}></button>
            {this.props.test}
            </div>
    }
}

function mapStateToProps(state) {
    return {
        test: state
    }
}

function mapDispatchToProps(state){
    return {
        testAction: bindActionCreators(testAction, dispatch)
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(App)
