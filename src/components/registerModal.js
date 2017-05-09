import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

export default class RegisterModal extends Component{
    constructor(props){
        super(props);
        let self = this;
        this.state = {
            disabledSubmit: true,
            preloader: false,
            submitButton: true,
            formMessage: "",
            name: {
                validation: false,
                value: null,
                message: "only letters, min 3 symbols",
                currentErrorText: "",
                validate_instructions: function(value){
                    let result = value.match(/[a-zA-Z]{3,}/);
                    return (result) ? result[0] === value : result;
                }
            },
            password: {
                validation: false,
                value: null,
                message: "required minimum 6 symbols",
                currentErrorText: "",
                validate_instructions: function(value){
                    let result = value.match(/.{6,}/);
                    return (result) ? result[0] === value : result;
                }
            },
            repeat_password: {
                validation: false,
                value: null,
                message: "Password does not match",
                currentErrorText: "",
                validate_instructions: function(value){
                    return (value === self.state.password.value);

                }
            },
            email: {
                validation: false,
                value: null,
                message: "uncorrect. Example: name@gmail.com",
                currentErrorText: "",
                validate_instructions: function(value){
                    let result = value.match(/.{1,}@.{1,}\..{1,}/);
                    return (result) ? result[0] === value : result;
                }
            }

        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkAllfields = this.checkAllfields.bind(this);
    }

    handleInput(e,value){
        let type = e.target.dataset.type;

        let state = this.state;
        state[type].value = value;
        state[type].validation = state[type].validate_instructions(value);

        if(type=="password"){
            state.repeat_password.validation = false;
        }

        if(!state[type].validation){
            state[type].currentErrorText = state[type].message;
        }else{
            state[type].currentErrorText = "";
        }


        this.setState(state);
        this.checkAllfields();


    }

    checkAllfields(){

        if(this.state.name.validation &&
            this.state.password.validation &&
            this.state.repeat_password.validation &&
            this.state.email.validation){
            this.setState({disabledSubmit: false});
        }else{
            this.setState({disabledSubmit: true});
        }

    }

    handleSubmit(){
        if(this.state.disabledSubmit){
            return;
        }

        let form = new FormData();
        form.append("name",this.state.name.value);
        form.append("password",this.state.password.value);
        form.append("email",this.state.email.value);

        console.log(form);
        console.log("sending");

        this.setState({preloader: true, submitButton:false});


        setTimeout(() => {
            this.setState({preloader: false, formMessage: "Registration succesfull!"});
        },3000)

        setTimeout(() => {
            window.location.reload();
        },5000)

    }

    render(){
        if(!this.props.open){
            return <div></div>;
        }

        let errorStyles = {
          position: "absolute",
          bottom: "-10px"
        };

        return <div className="register__modal show">
                    <Paper zDepth={2} className="register__paper">
                        <div className="register__wrap">
                            <div className="card-modal__close" onTouchTap={this.props.closeModal}>&#215;</div>
                        </div>
                        <form action="/register/create" method="POST">
                            <TextField
                                hintText="Name"
                                floatingLabelText="Input your name"
                                data-type="name"
                                onChange={this.handleInput}
                                errorText={this.state.name.currentErrorText}
                                errorStyle={errorStyles}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Input your password"
                                type="password"
                                data-type="password"
                                onChange={this.handleInput}
                                errorText={this.state.password.currentErrorText}
                                errorStyle={errorStyles}
                            />
                            <TextField
                                hintText="Repeat Password"
                                floatingLabelText="Repeat your password"
                                type="password"
                                data-type="repeat_password"
                                onChange={this.handleInput}
                                errorText={this.state.repeat_password.currentErrorText}
                                errorStyle={errorStyles}
                            />
                            <br/>
                            <TextField
                                hintText="Email"
                                floatingLabelText="Input your email"
                                data-type="email"
                                onChange={this.handleInput}
                                errorText={this.state.email.currentErrorText}
                                errorStyle={errorStyles}
                            />
                            <br/>
                            <br/>
                            {this.state.formMessage}
                            {(this.state.submitButton) ? <RaisedButton label="Submit"
                                                                       primary={true}
                                                                       disabled={this.state.disabledSubmit}
                                                                       onTouchTap={this.handleSubmit}/> : ""}

                        </form>
                        {(this.state.preloader) ? <CircularProgress size={40} thickness={4} /> : ""}
                    </Paper>
               </div>
    }
}