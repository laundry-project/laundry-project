import React from "react";
import { withRouter } from "react-router";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import logo from "../components/images/fresh.jpg";
import Navbar from "./Navbar";

import "semantic-ui-css/semantic.min.css";

const FindLaundry = () => (
  <div>
    <Navbar />
    <Card.Group>
      <Card>
        <Card.Content>
          <Image src={logo} />
          <Card.Header>Fresh laundry - Kemang</Card.Header>
          <Card.Description>Fresh Laundry Located in Kemang</Card.Description>
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
          <Card.Description>Fresh Laundry Located in Tebet</Card.Description>
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
          <Card.Description>Fresh Laundry Located in Grogol</Card.Description>
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
          <Card.Header>Fresh laundry - Depok</Card.Header>
          <Card.Description>Fresh Laundry Located in Depok</Card.Description>
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
          <Card.Header>Fresh laundry - Pasar Minggu</Card.Header>
          <Card.Description>
            Fresh Laundry Located in Pasar Minggu
          </Card.Description>
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
          <Card.Header>Fresh laundry - Senayan</Card.Header>
          <Card.Description>Fresh Laundry Located in Senayan</Card.Description>
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
          <Card.Header>Fresh laundry - Karet</Card.Header>
          <Card.Description>Fresh Laundry Located in Karet</Card.Description>
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
          <Card.Header>Fresh laundry - Cawang</Card.Header>
          <Card.Description>Fresh Laundry Located in Cawang</Card.Description>
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
  </div>
);

export default withRouter(FindLaundry);
