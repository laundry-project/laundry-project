import React from "react";
import { Button, Header, Dropdown, Modal } from "semantic-ui-react";

const JenisCuci = [
  {
    key: "Cuci Baju",
    text: "Cuci Baju",
    value: "Cuci Baju"
  },
  {
    key: "Cuci Sepatu",
    text: "Cuci Sepatu",
    value: "Cuci Sepatu"
  }
];

const BookLaundry = () => (
  <Modal
    trigger={
      <Button basic color="blue">
        Book
      </Button>
    }
  >
    <Modal.Header>Pemesanan Laundry</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Silahkan Isi Data Laundry Anda !</Header>
        <Dropdown
        text='jenis'
          placeholder="Jenis Cuci"
          fluid
          selection
          options={JenisCuci}
        />
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default BookLaundry;
