import React, {PropTypes, Component} from 'react';
import {Card,CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class CardModal extends Component{
    render(){
        return  <div className={'card-modal ' + this.props.currentClass}>
                    <Card>
                        <div className="card-modal__close" onTouchTap={this.props.close}>&#215;</div>
                        <CardHeader
                            title="Card"
                            subtitle="Subtitle"
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                            <img src={this.props.src} />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
               </div>
    }
}


