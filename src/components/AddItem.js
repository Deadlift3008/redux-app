import React, {PropTypes, Component} from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Snackbar from 'material-ui/Snackbar';


export default class AddItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0,
            item_to_add: {
                name: null,
                description: null,
                value: 0.5
            },
            disabled: {
                0: true,
                1: true,
                2: false
            },
            snackbar_open: false
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getStepContent = this.getStepContent.bind(this);

        this.setItemValue = this.setItemValue.bind(this);

        this.handleRequestClose = this.handleRequestClose.bind(this);

    }

    handleNext(e){
        const {stepIndex} = this.state;

        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex > 0,
        });

        if(this.state.finished){
            this.props.addItem(this.state.item_to_add);
            this.setState({snackbar_open: true});
        }

    }

    setItemValue(e,value){
        let temp,dis;
        // remember values for adding it
        switch(e.target.dataset.type){
            case "name":
                temp = this.state.item_to_add;
                temp.name = value;
                dis = this.state.disabled;
                dis[0] = false;
                this.setState({item_to_add: temp,
                    disabled: dis
                });
                break;
            case "desc":
                temp = this.state.item_to_add;
                temp.description = value;
                dis = this.state.disabled;
                dis[1] = false;
                this.setState({item_to_add: temp,
                    disabled: dis
                });
                break;
            default:
                temp = this.state.item_to_add;
                temp.value = value;
                this.setState({item_to_add: temp});
        }



    }


    handlePrev(){
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1, finished: false});
        }
        // if user already added item
        if(stepIndex > 2){
            this.setState({
                stepIndex: 0,
                finished: false,
                disabled: {
                    0: true,
                    1: true,
                    2: false
                }});
        }
    }

    handleRequestClose(){
        this.setState({snackbar_open: false});
    }

    getStepContent(){
        switch(this.state.stepIndex){
            case 0:
                return <div className="main-page__name main-page__input">
                            <TextField
                                        hintText="Name"
                                        floatingLabelText="Input your name"
                                        onChange={this.setItemValue}
                                        data-type="name"
                                    />
                        </div>;
            case 1:
                return <div className="main-page__desc main-page__input">
                            <TextField
                                hintText="Description"
                                floatingLabelText="Input your description"
                                multiLine={true}
                                rows={2}
                                onChange={this.setItemValue}
                                data-type="desc"
                            />
                    </div>;
            case 2:
                return <div className="main-page__slider main-page__input">
                            <h3>Input your value</h3>
                            <Slider
                                defaultValue={0.5}
                                onChange={this.setItemValue}
                                data-type="slider"
                            />
                            <div className="main-page__value">Your value is {this.state.item_to_add.value}</div>
                        </div>;

        }
    }


    render(){
        const {finished, stepIndex} = this.state;

        let buttonPlace;
        //if user added item
        if(stepIndex <= 2){
            buttonPlace =  <RaisedButton
                                label={finished ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={this.handleNext}
                                disabled={this.state.disabled[stepIndex]}
                            />
        }else{
            buttonPlace = <FlatButton label="Added!" secondary={true} />
        }

        return <div className="main-page__add-item">
                    <h2 className="main-page__header">Add items</h2>
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Step 1</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Step 2</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Last step</StepLabel>
                        </Step>
                    </Stepper>
                    <div className="main-page__content-block">
                        <div>{this.getStepContent()}</div>
                        <div style={{marginTop: 12}}>
                            <FlatButton
                                label={(stepIndex > 2) ? "add more" : "back"}
                                disabled={stepIndex === 0}
                                onTouchTap={this.handlePrev}
                                style={{marginRight: 12}}
                            />
                            {buttonPlace}
                        </div>
                    </div>
                    <Snackbar
                        open={this.state.snackbar_open}
                        message="Item added"
                        autoHideDuration={3000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
    }
}