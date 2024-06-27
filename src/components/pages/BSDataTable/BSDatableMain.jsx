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
import { Data } from '../../../data/Data';
import './YourStylesheet.css'; // Import the stylesheet with the sticky-header class

const BSDatableMain = () => {
  const headers = [
    { title: 'ID', prop: 'id', isSortable: true, isFilterable: true },
    { title: 'Name', prop: 'Name', isSortable: true, isFilterable: true },
    { title: 'Position', prop: 'Position', isSortable: true, isFilterable: true },
    { title: 'Email', prop: 'email', isSortable: true, isFilterable: true },
    { title: 'Gender', prop: 'gender', isSortable: true, isFilterable: true },
    { title: 'Age', prop: 'Age', isSortable: true, isFilterable: true },
    { title: 'Salary', prop: 'Salary', isSortable: true, isFilterable: true },
    { prop: 'checkbox', checkbox: { idProp: 'id', className: 'table-checkbox' }, alignment: { horizontal: 'center' } }
  ];

  return (
    <div className="container-fluid">
      <DatatableWrapper
        body={Data}
        headers={headers}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 10,
            options: [5, 10, 15, 20]
          }
        }}
      >
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
        <div className="table-wrapper">
          <Table striped bordered hover>           
            <TableHeader  />
            <TableBody />
          </Table>
        </div>
      </DatatableWrapper>
    </div>
  );
};

export default BSDatableMain;
