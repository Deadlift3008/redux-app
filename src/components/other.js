import React, {PropTypes, Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

import CustomizePage from '../components/CustomizePage';
import CustomizeContainer from '../components/CustomizeContainer';

export default class Other extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabValue: "container"
        };

        this.handleTab = this.handleTab.bind(this);
    }

    handleTab(value){
        this.setState({
            tabValue: value,
        });
    }


    render(){
        return  <div className="other-page">
                    <h2>Other</h2>
                    <br/>
                    <Divider />
                    <br/>
                    <h3>Customization</h3>
                    <br/>
                    <Tabs
                        value={this.state.tabValue}
                        onChange={this.handleTab}
                    >
                        <Tab label="Container" value="container">
                            <CustomizeContainer
                                styleMain={this.props.styleMain}
                                resetStyles={this.props.resetStyles}
                            />
                        </Tab>
                        <Tab label="Main page" value="main_page">
                            <CustomizePage
                                page="main"
                                stylePage={this.props.stylePage}
                                resetStyles={this.props.resetStyles}
                            />
                        </Tab>
                        <Tab label="Info page" value="info_page">
                            <CustomizePage
                                page="info"
                                stylePage={this.props.stylePage}
                                resetStyles={this.props.resetStyles}
                            />
                        </Tab>
                    </Tabs>
                </div>
    }
}