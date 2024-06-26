import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from 'react-bs-datatable';

const BSDatableMain = () => {
  const headers = [
    { title: 'Username', prop: 'username' },
    { title: 'Name', prop: 'realname' },
    { title: 'Location', prop: 'location' }
  ];

  const body = Array.from(new Array(57), (_, index) => {
    const rd = (Math.random() * 10).toFixed(1);
    if (rd > 0.5) {
      return {
        username: 'i-am-billy',
        realname: `Billy ${rd}`,
        location: 'Mars'
      };
    } else {
      return {
        username: 'other-user',
        realname: `John Doe ${index}`,
        location: 'Earth'
      };
    }
  });

  return (
    <div className="container-fluid">
      <DatatableWrapper body={body} headers={headers}>
        <Row className="mb-4">
          <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
            <Filter />
          </Col>
          <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
            <PaginationOptions />
          </Col>
          <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end">
            <Pagination />
          </Col>
        </Row>
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </DatatableWrapper>
    </div>
  );
};

export default BSDatableMain;
