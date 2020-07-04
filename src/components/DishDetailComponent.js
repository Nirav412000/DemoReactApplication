import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

    }

    render(){
        if(this.props.dish != null){

            const allcomment = this.props.dish.comments.map((comm) => {
                return(
                    <div className="container">
                    <div key={comm.id}>
                        <p>{comm.comment}</p>
                        <p>--{comm.author},   {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
                    </div>
                    </div>
                );
            }); 

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <h2>Comments</h2>
                            {allcomment}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    };
}

export default DishDetail;