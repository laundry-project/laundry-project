import React from "react";
import { withRouter } from "react-router";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import logo from "../components/images/fresh.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";



const FindLaundry = () => (
  <div>
    <Navbar />
    <h1>Temukan Cabang Fresh and Clean Laundry Terdekat</h1>
    <Card.Group>
      <Card>
        <Card.Content>
          <Image src={logo} />
          <Card.Header>Fresh and Clean laundry - Kemang</Card.Header>
          <Card.Description>Fresh Laundry Cabang Kemang</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              trigger={
                <Button basic color="green">
                  Info
                </Button>
              }
            ></Modal>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={logo} />
          <Card.Header>Fresh laundry - Tebet</Card.Header>
          <Card.Description>Fresh and Clean Laundry Cabang Tebet</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Info
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={logo} />
          <Card.Header>Fresh laundry - Grogol</Card.Header>
          <Card.Description>Fresh and Clean Laundry Cabang Grogol</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Info
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
    <Footer />
  </div>
);

export default withRouter(FindLaundry);
