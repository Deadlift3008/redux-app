import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/main_action';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import Info from '../components/info';
import Main from '../components/main';
import Other from '../components/other';

class App extends Component{
    constructor(){
        super();
        this.getPage = this.getPage.bind(this);
        //for routing
        window.addEventListener("hashchange",() => {
            this.props.Actions.UpdatePage();
        });
    }

    getPage(){
        switch(this.props.currentPage){
            case "Main":
                return <Main />;
                break;
            case "Info":
                return <Info />;
                break;
            case "Other":
                return <Other />;
                break;
            default:
                return <Main />;
                break;
        }
    }

    render(){
        let Page = this.getPage();

        return <div className="pages-wrap">
            {Page}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        currentPageId: state.currentPageId,
        currentPage: state.currentPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
