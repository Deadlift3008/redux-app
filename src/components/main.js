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
        let inscription;
        if(this.props.list && this.props.list.length > 0){
            inscription = "(" + this.props.list.length + ")";
        }else{
            inscription = "";
        }
        return <div className="main-page" style={this.props.customizedStyles}>
                    <h2>Main</h2>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleChange}
                        className="main-page__tabs"
                    >
                        <Tab label={"List items " + inscription } value="list">
                            <ListItems list={this.props.list} removeItem={this.props.removeItem}/>
                        </Tab>
                        <Tab label="Add item" value="add">
                            <AddItem addItem={this.props.addItem}/>
                        </Tab>
                    </Tabs>
               </div>
    }
}