import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="">Restaurent Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>Restaurent Confusion</h1>
                                <p>We take inspiration from the world's best cuisines and create an unique fusion experience. Our lipsmacking creation will tickle your culinary senses! </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    };
}

export default Header;