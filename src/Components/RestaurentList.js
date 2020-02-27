import React, { Component } from "react";
import "./List.css";
import { Table } from "react-bootstrap";
class RestaurentList extends Component {
    constructor() {
        super();
        this.state = {
            List: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/restaurant").then(response => {
            response.json().then(result => {
                this.setState({ lists: result });
            });
        });
    }
    render() {
        return (
            <div>
                {this.state.lists ? (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            {this.state.lists.map(item => {
                                return (
                                    <div key={item.id}>
                                        <span>Name:{item.Name} </span>
                                        <span>Address:{item.Address}</span>
                                        <span>Rating:{item.Rating}</span>
                                    </div>
                                );
                            })}
                        </Table>
                    </div>
                ) : (
                    <p>Loading</p>
                )}
            </div>
        );
    }
}

export default RestaurentList;
