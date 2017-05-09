import React, {PropTypes, Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CardModal from '../components/CardModal';
import InfoText from '../components/InfoText';
import Divider from 'material-ui/Divider';


const tilesData = [
    {
        img: 'src/images/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'src/images/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'src/images/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'src/images/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'src/images/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'src/images/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'src/images/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'src/images/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];



export default class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentClass: "",
            currentSrc: "",
            cols: 1
        };

        this.openCard = this.openCard.bind(this);
        this.closeCard = this.closeCard.bind(this);
    }
    openCard(e){
        this.setState({
            currentClass: "show",
            currentSrc: arguments[0].img
        });
    }
    closeCard(){
        this.setState({
            currentClass: "",
            currentSrc: ""
        });
    }
    componentDidMount(){
        // for desktop
        let width  = getComputedStyle(document.querySelector(".info-page__grid")).maxWidth;
        if(document.documentElement.clientWidth > parseInt(width)){
            this.setState({...this.state,cols: 2});
        }
    }
    render(){
        return <div className="info-page" style={this.props.customizedStyles}>
            <h2>Info</h2>
            <Divider />
            <div className="info-page__content clearfix">
                <InfoText />
                <GridList
                    cellHeight={"auto"}
                    className="info-page__grid"
                    cols={this.state.cols}
                >
                    <Subheader>December</Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            className="info-page__grid-title"
                            onTouchTap={this.openCard.bind(this,tile)}
                        >
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
            <CardModal
                src={this.state.currentSrc}
                currentClass={this.state.currentClass}
                close={this.closeCard.bind(this)}
            />
            <div className={'hover ' + this.state.currentClass} onTouchTap={this.closeCard}></div>
        </div>
    }
}