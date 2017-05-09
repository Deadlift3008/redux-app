import React, {PropTypes, Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
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
        let dropDownStyles = {
            fontSize: "18px",
            textTransform: "uppercase",
            marginTop: "-2px"
        };
        let iconStyle = {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          right: "0",
          top: "0"
        };
        return <div className="header">
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Page" className="header__title"/>
                    <ToolbarSeparator />
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        labelStyle={dropDownStyles}
                        iconButton={<NavigationExpandMoreIcon />}
                        iconStyle={iconStyle}
                    >
                        <MenuItem value={1} primaryText="Main" onClick={this.linkTo.bind(this,"")}/>
                        <MenuItem value={2} primaryText="Info" onClick={this.linkTo.bind(this,"info")}/>
                        <MenuItem value={3} primaryText="Other" onClick={this.linkTo.bind(this,"other")}/>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Register"
                                  primary={true}
                                  className="register__button small-display-hidden"
                                  onTouchTap={this.props.openModal}/>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <a href="https://github.com/Deadlift3008/redux-app" target="_blank" rel="noopener noreferer">
                            <MenuItem primaryText="Git repository" />
                        </a>
                    </IconMenu>
                </ToolbarGroup>

            </Toolbar>
        </div>
    }
}