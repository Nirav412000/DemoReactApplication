import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardText,CardTitle,CardImgOverlay } from 'reactstrap';
import  DishDetail  from './DishDetailComponent';

class Menu extends Component{

    constructor(props) {
        super(props);

    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>    
                        </CardImgOverlay> 
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;