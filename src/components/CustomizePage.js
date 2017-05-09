import React, {PropTypes, Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';


export default class CustomizePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: this.props.page,
            paddingLeft: null,
            paddingRight: null,
            paddingTop: null,
            paddingBottom: null,
            lineHeight: null,
            fontSize: null,
            snackbar_open: false,
            snackbar_message: ""
        };

        this.setValues = this.setValues.bind(this);
        this.setStyles = this.setStyles.bind(this);

        this.checkUnits = this.checkUnits.bind(this);
        this.resetStyles = this.resetStyles.bind(this);

        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    setValues(e,value){
        let result;
        switch(e.target.dataset.type){
            case "paddingLeft":
                this.setState({paddingLeft: this.checkUnits(value,/\d+%/)});
                break;
            case "paddingRight":
                this.setState({paddingRight: this.checkUnits(value,/\d+%/)});
                break;
            case "paddingTop":
                this.setState({paddingTop: this.checkUnits(value,/\d+%/)});
                break;
            case "paddingBottom":
                this.setState({paddingBottom: this.checkUnits(value,/\d+%/)});
                break;
            case "lineHeight":
                this.setState({lineHeight: this.checkUnits(value,/\d+(\.\d+)?/)});
                break;
            case "fontSize":
                this.setState({fontSize: parseInt(value) + "px"});
                break;

        }
    }
    checkUnits(value,regxp){
        let result = value.match(regxp);
        if( (result && result[0] == value ) || value==""){
            return value;
        }else{
            return parseInt(value) + "px";
        }
    }
    setStyles(){
        let changedStyles = {};
        for(var i in this.state){
            if(this.state[i]!==null &&
                i!=="snackbar_open" &&
                i!=="snackbar_message"){
                changedStyles[i] = this.state[i];
            }
        }

        this.props.stylePage(changedStyles);
        let msg = this.props.page + " page styles applied";
        this.setState({snackbar_open: true, snackbar_message: msg});
    }
    resetStyles(){
        this.props.resetStyles({type: this.props.page});
        let msg = this.props.page + " page styles resetted";
        this.setState({snackbar_open: true, snackbar_message: msg});
    }
    handleRequestClose(){
        this.setState({snackbar_open: false});
    }
    render(){
        return  <div className="other-page__tab">
                    <br/>
                    <br/>
                    <h4>{this.props.page} page customization</h4>
                    <br/>
                    <TextField
                        hintText="in px or in %"
                        floatingLabelText={this.props.page + " page padding top"}
                        data-type="paddingTop"
                        onChange={this.setValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px or in %"
                        floatingLabelText={this.props.page + " page padding left"}
                        data-type="paddingLeft"
                        onChange={this.setValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px or in %"
                        floatingLabelText={this.props.page + " page padding right"}
                        data-type="paddingRight"
                        onChange={this.setValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px or in %"
                        floatingLabelText={this.props.page + " page padding bottom"}
                        data-type="paddingBottom"
                        onChange={this.setValues}
                    />
                    <br/>
                    <TextField
                        hintText="in coef or in px"
                        floatingLabelText={this.props.page + " page line height"}
                        data-type="lineHeight"
                        onChange={this.setValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px"
                        floatingLabelText={this.props.page + " page font size"}
                        data-type="fontSize"
                        onChange={this.setValues}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="Apply" primary={true} onTouchTap={this.setStyles}/>
                    <FlatButton label="Reset all styles" secondary={true} onTouchTap={this.resetStyles}/>
                    <Snackbar
                        open={this.state.snackbar_open}
                        message={this.state.snackbar_message}
                        autoHideDuration={3000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
    }


}