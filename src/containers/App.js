import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/main_action';

//tap event for react components
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//components
import Info from '../components/info';
import Main from '../components/main';
import Other from '../components/other';
import Header from '../components/header';

//material ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';



class App extends Component{
    constructor(){
        super();
        this.state = {
            paper: null
        }
        this.getPage = this.getPage.bind(this);
        this.animate = this.animate.bind(this);
        //for routing
        window.addEventListener("hashchange",() => {
            this.props.Actions.UpdatePage();
            if(!this.state.paper){
                this.state.paper = document.querySelector(".pages-wrap__paper");
            }
            this.animate(this.state.paper);
        });
    }

    animate(el){
        el.classList.add("loadAnimation");
        setTimeout(()=>{
            el.classList.remove("loadAnimation");
        },750);
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

        return <MuiThemeProvider>
                    <div className="pages-wrap">
                        <Header dropDownValue={this.props.currentPageId}/>
                        <Paper className="pages-wrap__paper" zDepth={3} >
                            {Page}
                        </Paper>
                    </div>
                </MuiThemeProvider>
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
