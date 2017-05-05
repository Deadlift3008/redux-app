import React, {PropTypes, Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.dropDownValue,
        };

        this.handleChange = this.handleChange.bind(this);
        this.linkTo = this.linkTo.bind(this);
    }
    handleChange(event, index, value){
        this.setState({value});

    }
    linkTo(hash,e){
        window.location.hash = hash;
    }
    render(){
        return <div className="header">
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarTitle text="Page" />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Main" onClick={this.linkTo.bind(this,"")}/>
                        <MenuItem value={2} primaryText="Info" onClick={this.linkTo.bind(this,"info")}/>
                        <MenuItem value={3} primaryText="Other" onClick={this.linkTo.bind(this,"other")}/>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Register" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Git repository" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        </div>
    }
}