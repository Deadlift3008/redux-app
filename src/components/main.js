import React, {PropTypes, Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AddItem from '../components/AddItem';
import ListItems from '../components/ListItems';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            tab: 'list'
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value){
        this.setState({
            tab: value,
        });
    }
    render(){
        return <div className="main-page">
                    <h2>Main</h2>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleChange}
                        className="main-page__tabs"
                    >
                        <Tab label="List items" value="list">
                            <ListItems />
                        </Tab>
                        <Tab label="Add item" value="add">
                            <AddItem />
                        </Tab>
                    </Tabs>
               </div>
    }
}