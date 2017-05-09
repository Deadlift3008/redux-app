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
import Snackbar from 'material-ui/Snackbar';


export default class ListItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            snackbar_open: false
        };
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.showSnackbar = this.showSnackbar.bind(this);
    }

    handleRequestClose(){
        this.setState({snackbar_open: false});
    }

    showSnackbar(){
        this.setState({snackbar_open: true});
    }

    render(){
        let list,msg;
        if(this.props.list){
            list = this.props.list.map((item,i,arr) => {
                return  <TableRow key={i}>
                            <TableRowColumn>{item.id}</TableRowColumn>
                            <TableRowColumn>{item.name}</TableRowColumn>
                            <TableRowColumn>{item.description}</TableRowColumn>
                            <TableRowColumn>{item.value}</TableRowColumn>
                            <TableRowColumn>
                                <div className="small-display-hidden" onTouchTap={this.showSnackbar}>
                                    <RaisedButton label="Delete" primary={true} onTouchTap={this.props.removeItem.bind(this,item)}/>
                                </div>
                                <div className="big-display-hidden" onTouchTap={this.showSnackbar}>
                                    <div className="cross" onTouchTap={this.props.removeItem.bind(this,item)}>&#215;</div>
                                </div>
                            </TableRowColumn>

                        </TableRow>
            });
        }
        if(!this.props.list || this.props.list.length == 0){
            msg = <h2>No one item has been added yet</h2>;
        }else{
            msg = '';
        }



        return <div className="main-page__list-items">
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {list}
                    </TableBody>
                </Table>
                {msg}
                <Snackbar
                    open={this.state.snackbar_open}
                    message="item deleted"
                    autoHideDuration={3000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
    }
}