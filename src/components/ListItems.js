import React, {PropTypes, Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';


export default class ListItems extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let list;
        if(this.props.list){
            list = this.props.list.map((item,i,arr) => {
                return  <TableRow key={i}>
                            <TableRowColumn>{item.id}</TableRowColumn>
                            <TableRowColumn>{item.name}</TableRowColumn>
                            <TableRowColumn>{item.description}</TableRowColumn>
                            <TableRowColumn>{item.value}</TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Delete" primary={true} onTouchTap={this.props.removeItem.bind(this,item)}/>
                            </TableRowColumn>

                        </TableRow>
            });
        }else{
            // list = <h2>No one item has been added yet</h2>;
            list = "No one item has been added yet";
        }



        return <div className="main-page__list-items">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>

            </div>
    }
}