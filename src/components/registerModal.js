import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class RegisterModal extends Component{
    render(){
        if(!this.props.open){
            return <div></div>;
        }

        return <div className="register__modal show">
                    <Paper zDepth={2} className="register__paper">
                        <div className="register__wrap">
                            <div className="card-modal__close" onTouchTap={this.props.closeModal}>&#215;</div>
                        </div>
                        <form action="/register/create" method="POST">
                            <TextField
                                hintText="Name"
                                floatingLabelText="Input your name"
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Input your password"
                                type="password"
                            />
                            <TextField
                                hintText="Repeat Password"
                                floatingLabelText="Repeat your password"
                                type="password"
                            />
                            <TextField
                                hintText="Email"
                                floatingLabelText="Input your email"
                            />
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} />
                        </form>
                    </Paper>
               </div>
    }
}