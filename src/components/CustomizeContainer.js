import React, {PropTypes, Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class CustomizeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "#",
            color: "#",
            width: null,
            borderRadius: null,
            fontSize: null,
            lineHeight: null
        }

        this.setContainerValues = this.setContainerValues.bind(this);
        this.handleBgSelect = this.handleBgSelect.bind(this);
        this.handleFontColorSelect = this.handleFontColorSelect.bind(this);
    }
    setContainerValues(e,value){
        let state = this.state;
        switch(e.target.dataset.type){
            case "width":
                break;
            case "borderRadius":
                break;
            case "fontSize":
                break;
            case "lineHeight":
                break;
            default:
                state.styleMain[e.target.dataset.type] = value;
                this.setState(state);
                break;
        }
    }
    handleBgSelect(e,index,value){
        this.setState({
            backgroundColor: value
        });
    }
    handleFontColorSelect(e,index,value){
        this.setState({
            color: value
        });
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
                        onChange={this.handleBgSelect}
                        data-type="backgroundColor"
                        data-section="container"
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
                        onChange={this.handleFontColorSelect}
                        data-type="color"
                        data-section="container"
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
                    <RaisedButton label="Apply" primary={true} />
                    <FlatButton label="Reset all styles" secondary={true} />
                </div>
    }
}