import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RegisterForm from "./formregister/RegisterForm";
import { LoginForm } from "./formregister/LoginForm";
import { Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export function Header(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fullWidth = true;
  const maxWidth = "sm";
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Navbar
        key="sm"
        bg="dark"
        variant="dark"
        expand="sm"
        className="mb-3 px-2 py-3"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="../images/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Escursioni
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-sm"}
            aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                {props.showAdmin && (
                  <>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={"offcanvasNavbarDropdown-expand-sm"}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button
                className="ms-3"
                variant="outline-info"
                onClick={handleOpen}
              >
                Login
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="alert-dialog-title" className="thDark text-white">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#f00",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="thDark text-white" dividers>
          {showLogin ? <LoginForm /> : <RegisterForm />}
          <Typography
            gutterBottom
            onClick={() => {
              setShowLogin(!showLogin);
            }}
            mt={4}
            className="text-center"
          >
            Non hai ancora un account?{" "}
            <span className="span-register">Registrati ora!!</span>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
