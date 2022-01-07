import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { useAuthContext } from "../contexts/AuthContext";

const Icon = styled(FontAwesomeIcon)({
  backgroundImage: "linear-gradient(to right, #76b582, #368a46)",
  padding: "5px",
  fontSize: "40px",
});
const LogoWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const BrandName = styled.span({
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
  fontWeight: 200,
});
const StyledLink = styled(Link)({
  fontSize: "1.2rem",
  fontWeight: 200,
  borderBottom: "3px solid transparent",
  textDecoration: "none",
  color: "white",
  margin: "0 1rem 0 1rem",
  "&:hover": {
    color: "#76b582",
  },
});

const Navigation = () => {
  const { currentUser } = useAuthContext();

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="fixed-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <LogoWrapper>
            <Icon icon={faLeaf} />
            <BrandName>NATURE PHOTOS</BrandName>
          </LogoWrapper>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <>
                <StyledLink to="/myprofile">
                  {currentUser.displayName
                    ? currentUser.displayName.toUpperCase()
                    : currentUser.email.toUpperCase()}
                </StyledLink>
                <StyledLink to="/uploadalbum">UPLOAD ALBUM</StyledLink>
                <StyledLink to="/albums">ALBUMS</StyledLink>
                <StyledLink to="/logout">LOG OUT</StyledLink>
              </>
            ) : (
              <>
                <StyledLink to="/reviewalbums">REVIEW ALBUMS</StyledLink>
                <StyledLink to="/photographs">PHOTOGRAPHS</StyledLink>
                <StyledLink to="/login">LOG IN</StyledLink>
                <StyledLink to="/signup">SIGN UP</StyledLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
