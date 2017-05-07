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
import RegisterModal from '../components/registerModal';


//material ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component{
    constructor(){
        super();
        this.state = {
            paper: null
        };
        this.getPage = this.getPage.bind(this);
        this.animate = this.animate.bind(this);

        this.openRegisterModal = this.openRegisterModal.bind(this);
        this.closeRegisterModal = this.closeRegisterModal.bind(this);
        //for routing
        window.addEventListener("hashchange",() => {
            this.props.Actions.UpdatePage();
            this.animate(this.state.paper);
        });

    }


    animate(el){
        el.classList.add("loadAnimation");
        setTimeout(()=>{
            el.classList.remove("loadAnimation");
        },300);
    }

    componentDidMount(){
        this.state.paper = document.querySelector(".pages-wrap__paper");
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

    openRegisterModal(){
        this.props.Actions.setRegisterModal(true);
    }

    closeRegisterModal(){
        this.props.Actions.setRegisterModal(false);
    }


    render(){
        let Page = this.getPage();

        let classes = (this.props.open_modal) ? 'hover show' : '';

        return <MuiThemeProvider>
                    <div className="pages-wrap">
                        <Header dropDownValue={this.props.currentPageId} openModal={this.openRegisterModal} />
                        <RaisedButton label="Register"
                                      primary={true}
                                      className="register__button big-display-hidden"
                                      onTouchTap={this.openRegisterModal}/>
                        <Paper className="pages-wrap__paper" zDepth={3} >
                            {Page}
                        </Paper>
                        <RegisterModal open={this.props.open_modal} closeModal={this.closeRegisterModal}/>
                        <div className={classes} onTouchTap={this.closeRegisterModal}></div>
                    </div>
                </MuiThemeProvider>
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        currentPageId: state.currentPageId,
        currentPage: state.currentPage,
        open_modal: state.open_modal
    }
}

function mapDispatchToProps(dispatch){
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
