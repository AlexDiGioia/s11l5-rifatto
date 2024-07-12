import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm, selectSearchResults } from "../redux/slices/searchSlice";
import { fetchSongsAsync } from "../redux/slices/musicSlice";
import Spotify from "../assets/logo/logo.png";
import { Navbar, Nav, Button, Form, FormControl, InputGroup, Collapse, ListGroup, Container, Row, Col } from "react-bootstrap";

const Sidebar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const searchResults = useSelector(selectSearchResults);

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));

    if (term.trim() !== "") {
      dispatch(fetchSongsAsync(term));
    }
  };

  return (
    <Col xs={2} className="bg-dark text-white vh-100">
      <Navbar expand="md" className="flex-md-column align-items-start">
        <Container className="flex-column align-items-center">
          <Navbar.Brand href="index.html">
            <img src={Spotify} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-md-column w-100">
              <Nav.Link href="#" className="d-flex align-items-center text-white">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center text-white">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Nav.Link>
              <InputGroup className="mt-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" size="sm">GO</Button>
                </InputGroup.Append>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mt-auto p-3">
        <Button variant="primary" className="w-100 mb-2">Sign Up</Button>
        <Button variant="secondary" className="w-100">Login</Button>
        <div className="mt-2 text-center">
          <a href="#" className="text-white">Cookie Policy</a> | <a href="#" className="text-white">Privacy</a>
        </div>
      </div>
      <div className="p-3">
        <ListGroup variant="flush">
          {searchResults.map((result) => (
            <ListGroup.Item key={result.id} className="bg-dark text-white">
              <img src={result.album.cover_medium} alt="Album Cover" className="img-fluid" />
              <br />
              {result.title} - {result.artist.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Col>
  );
};

export default Sidebar;
