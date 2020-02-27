import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import RestaurentList from "./Components/RestaurentList";
import RestaurentCreate from "./Components/RestaurentCreate";
import RestaurentUpdate from "./Components/RestaurentUpdate";
import RestaurentSearch from "./Components/RestaurentSearch";
import Home from "./Components/Home";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export function App() {
    return (
        <>
            <p>About us Cities   Reviews</p>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                <Link to="/Home">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/List">List</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/Create">Create</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/Search">Search</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/Update">Update</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route path="/List">
                    <RestaurentList />
                </Route>
                <Route path="/Create">
                    <RestaurentCreate />
                </Route>
                <Route path="/Search">
                    <RestaurentSearch />
                </Route>
                <Route path="/Update">
                    <RestaurentUpdate />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
            </Router>
        </>
    );
}
