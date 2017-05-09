import React, {PropTypes, Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';


export default class CustomizeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "#",
            color: "#",
            width: null,
            borderRadius: null,
            fontSize: null,
            lineHeight: null,
            snackbar_open: false,
            snackbar_message: ""
        };

        this.setContainerValues = this.setContainerValues.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.setContainer = this.setContainer.bind(this);
        this.checkUnits = this.checkUnits.bind(this);
        this.resetStyles = this.resetStyles.bind(this);

        this.handleRequestClose = this.handleRequestClose.bind(this);

    }
    setContainerValues(e,value){
        switch(e.target.dataset.type){
            case "width":
                this.setState({width: this.checkUnits(value,/\d+%/)});
                break;
            case "borderRadius":
                this.setState({borderRadius: this.checkUnits(value,/\d+%/)});
                break;
            case "fontSize":
                this.setState({fontSize: parseInt(value) + "px"});
                break;
            case "lineHeight":
                this.setState({lineHeight: this.checkUnits(value,/\d+(\.\d+)?/)});
                break;
            default:
                state[e.target.dataset.type] = value;
                this.setState(state);
                break;
        }
    }
    handleSelect(type,e,index,value){
        this.setState({
            [type]: value
        });
    }

    checkUnits(value,regxp){
        let result = value.match(regxp);
        if( (result && result[0] == value ) || value==""){
            return value;
        }else{
            return parseInt(value) + "px";
        }
    }
    setContainer(){
        let changedStyles = {};
        for(var i in this.state){
            if(this.state[i]!==null &&
                i!=="snackbar_open" &&
                i!=="snackbar_message"){
                changedStyles[i] = this.state[i];
            }
        }

        this.props.styleMain(changedStyles);

        this.setState({snackbar_open: true, snackbar_message: "Styles applied"});
    }
    resetStyles(){
        this.props.resetStyles({type: "container"});
        this.setState({snackbar_open: true, snackbar_message: "Styles resetted"});
    }

    handleRequestClose(){
        this.setState({snackbar_open: false});
    }
    render(){
        return  <div className="other-page__tab">
                    <br/>
                    <br/>
                    <h4>Container customization</h4>
                    <TextField
                        hintText="in px or %"
                        floatingLabelText="Container width"
                        data-type="width"
                        data-section="container"
                        onChange={this.setContainerValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px or %"
                        floatingLabelText="Container border radius"
                        data-type="borderRadius"
                        data-section="container"
                        onChange={this.setContainerValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px"
                        floatingLabelText="Container text font size"
                        data-type="fontSize"
                        data-section="container"
                        onChange={this.setContainerValues}
                    />
                    <br/>
                    <TextField
                        hintText="in px or in coef"
                        floatingLabelText="Container line height"
                        data-type="lineHeight"
                        data-section="container"
                        onChange={this.setContainerValues}
                    />
                    <br/>
                    <SelectField
                        floatingLabelText="Container background color"
                        value={this.state.backgroundColor}
                        onChange={this.handleSelect.bind(this,"backgroundColor")}
                        className="other-page__select"
                    >
                        <MenuItem value="#" primaryText="Default" />
                        <MenuItem value="#99ffcc" primaryText="Light green" />
                        <MenuItem value="#9a27b0" primaryText="Purple" />
                        <MenuItem value="#4f575b" primaryText="Deep gray" />
                        <MenuItem value="#fef65b" primaryText="Light yellow" />
                        <MenuItem value="#00ced1" primaryText="Light bluegreen" />
                    </SelectField>
                    <br/>
                    <SelectField
                        floatingLabelText="Container font color"
                        value={this.state.color}
                        onChange={this.handleSelect.bind(this,"color")}
                        className="other-page__select"
                    >
                        <MenuItem value="#" primaryText="Default" />
                        <MenuItem value="#99ffcc" primaryText="Light green" />
                        <MenuItem value="#9a27b0" primaryText="Purple" />
                        <MenuItem value="#4f575b" primaryText="Deep gray" />
                        <MenuItem value="#fef65b" primaryText="Light yellow" />
                        <MenuItem value="#00ced1" primaryText="Light bluegreen" />
                    </SelectField>
                    <br/>
                    <br/>
                    <RaisedButton label="Apply" primary={true} onTouchTap={this.setContainer}/>
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