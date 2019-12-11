import React from "react";
import NavbarAfterlog from "./NavbarAfterlog";
import { Table } from "semantic-ui-react";
import { Card, Image } from "semantic-ui-react";

const TableExamplePagination = () => (
  <div>
    <NavbarAfterlog />
    <Card>
      <Image ui={false} />
      <Card.Content>
        <Card.Header>Taufik Hidayat</Card.Header>
        <Card.Meta>Bergabung pada 11 Desember 2019</Card.Meta>
        <Card.Description>Email : taufik@mailcom</Card.Description>
        <Card.Description>Password : 12345</Card.Description>
        <Card.Description>Alamat : Jakarta</Card.Description>
      </Card.Content>
    </Card>
    <h1>History Pemesanan</h1>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Tanggal</Table.HeaderCell>
          <Table.HeaderCell>Order Id</Table.HeaderCell>
          <Table.HeaderCell>Pemesanan</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Senin, 22 Maret 2019</Table.Cell>
          <Table.Cell>Order-Id-01</Table.Cell>
          <Table.Cell>Cuci Kiloan</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default TableExamplePagination;
