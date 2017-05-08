import React, {PropTypes, Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class CustomizePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <div className="other-page__tab">
                    <br/>
                    <br/>
                    <h4>{this.props.page} page customization</h4>
                    <TextField
                        hintText="in px, format 1,2 or 4 values with space"
                        floatingLabelText={this.props.page + " page paddings"}
                        data-type="padding"
                        data-section="main"
                    />
                    <br/>
                    <TextField
                        hintText="in coef"
                        floatingLabelText={this.props.page + " page line height"}
                        data-type="lineHeight"
                        data-section="main"
                    />
                    <br/>
                    <TextField
                        hintText="in px"
                        floatingLabelText={this.props.page + " page font size"}
                        data-type="fontSize"
                        data-section="main"
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="Apply" primary={true} />
                    <FlatButton label="Reset all styles" secondary={true} />
                </div>
    }


}