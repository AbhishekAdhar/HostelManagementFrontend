import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function ComplaintsView({ complaints }) {

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Employee Id',
        field: 'eid',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Date',
        field: 'date',
        width: 150,
      },
      {
        label: 'Title',
        field: 'title',
        width: 50,
      },

      {
        label: 'Complaint',
        field: 'description',
        width: 250,
      },
    ],
    rows: complaints
  });
  return (
    <div>
      <div className="row">
        <div className="col-12 container-fluid">
          <h2 className="feature-heading ">Complaints</h2>
          <hr className="feature-line" />
        </div>
      </div>
      <div>
        <MDBDataTableV5
          hover
          responsiveMd
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
          pagingTop
          searching={false}
          scrollX
        />
      </div>
    </div>
  );
}