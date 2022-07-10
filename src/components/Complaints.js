import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function Complaints({ complaints, isLoading, errMess }) {

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Student Name',
        field: 'name',
        width: 50,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Student Id',
        field: 'sid',
        width: 50,
      },
      {
        label: 'Title',
        field: 'title',
        width: 50,
      },
      {
        label: 'Employee Id',
        field: 'eid',
        width: 50,
      },
      {
        label: 'Complaint',
        field: 'description',
        width: 180,
      },

      {
        label: 'Actions',
        field: 'actions',
        default: <div>
          <i className="fa fa-check-circle resolve mr-2" onClick={() => this.toggleResolve}></i>
          <i className="fa fa-trash-alt delete"></i>
        </div>,
        width: 100,
      },

    ],
    rows: complaints
  });
  if (isLoading) {
    return (<Loading />);
  }
  else if (errMess) {
    return (<div><p>{errMess} Please try again</p></div>);
  }
  else {
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
            searchTop
            searchBottom={false}
            scrollX
          />
        </div>
      </div>
    );
  }
}