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


export default class AddItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
    }

    handleNext(){
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    }

    handlePrev(){
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    }

    getStepContent(){
        switch(this.state.stepIndex){
            case 0:
                return <TextField
                            hintText="Name"
                            floatingLabelText="Input your name"
                        />;
            case 1:
                return <TextField
                    hintText="Description"
                    floatingLabelText="Input your description"
                    multiLine={true}
                    rows={2}
                />;
            case 2:
                return <div className="main-page__slider">
                            <h3>Input your value</h3>
                            <Slider defaultValue={0.5} />
                        </div>;

        }
    }

    render(){
        const {finished, stepIndex} = this.state;
        return <div className="main-page__add-item">
                    <h2>Add items</h2>
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
                                label="Back"
                                disabled={stepIndex === 0}
                                onTouchTap={this.handlePrev}
                                style={{marginRight: 12}}
                            />
                            <RaisedButton
                                label={stepIndex === 2 ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={this.handleNext}
                            />
                        </div>
                    </div>
                </div>
    }
}