import React, { Component } from 'react';
import DashBoard from './DashboardComponent';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LeftNav from './LeftNav';
import Architecture from './ArchitectureComponent'
import EmployeeView from './EmployeeView';
import StudentView from './StudentsComponent';
import NoticeBoard from './NoticeBoard'
import AddEmployee from './AddEmployeeComponent';
import Seat from './SeatComponent';
import Complaints from './Complaints';
import ArchitectureView from './ArchitectureView';
import StudentUpdateForm from './StudentUpdateForm';
import EmployeeUpdateForm from './EmployeeUpdateForm';
import SeatAllocationUpdateForm from './SeatAllocationUpdateForm';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStudentModalOpen: false,
      isEmployeeModalOpen: false,
      isNoticeModalOpen: false,
      isResolved: false,
      isArchitectureModalOpen: false,
      isSeatModalOpen: false,
      Students: [],
      Employees: [],
      Notices: [],
      Architecture: [],
      Seats: [],
      Complaints: [],
      MessBills: []
    };
  }

  componentDidMount() {

    let students = [];
    if (this.props.students.students != null) {
      this.props.students.students.forEach(element => {
        students.push({
          sid: element.sid,
          name: element.studentName,
          mobile: element.mobileNo,
          program: element.branch,
          gMob: element.fatherMobile,
          guardian: element.fatherName,
          pAddress: element.address,
          actions: <div>
            <Link className="fa fa-pencil-alt edit mr-2" to={`/admin/updateStudent/${element._id}`}></Link>
            <i className="fa fa-trash-alt delete" onClick={() => {
              if (window.confirm("Are u sure u want to delete ?"))
                this.props.deleteStudent(element._id)
            }}></i>
          </div>
        })
      });
    }
    const studentlist = this.state.Students.concat(students);

    let employees = [];
    if (this.props.employees.employees != null) {
      this.props.employees.employees.forEach(element => {
        employees.push({
          name: element.employeeName,
          gender: element.gender,
          employeetype: element.employeeType,
          designation: element.designation,
          mobile: element.mobileNo,
          date: element.joiningDate.split('T')[0],
          address: element.hostel.name,
          actions: <div>
            <Link className="fa fa-pencil-alt edit mr-2" to={`/admin/updateEmployee/${element._id}`}></Link>
            <i className="fa fa-trash-alt delete" onClick={() => {
              if (window.confirm("Are u sure u want to delete ?"))
                this.props.deleteEmployee(element._id)
            }}></i>
          </div>
        })
      });
    }
    const employeeList = this.state.Employees.concat(employees);

    let notices = [];
    this.props.notices.notices.forEach(element => {
      notices.push({
        title: element.title,
        description: element.description,
        actions: <div>
          <i className="fa fa-trash-alt delete" onClick={() => {
            if (window.confirm("Are u sure u want to delete ?"))
              this.props.deleteNotice(element._id)
          }}></i>
        </div>
      })
    });
    const noticeList = this.state.Notices.concat(notices);

    let seatAllocation = [];
    this.props.seatAllocation.seatAllocation.forEach(element => {
      seatAllocation.push({
        name: element.name,
        sid : element.sid,
        room: element.room,
        actions: <div>
          <Link className="fa fa-pencil-alt edit mr-2" to={`/admin/updateSeatAllocation/${element._id}`}></Link>
          <i className="fa fa-trash-alt delete" onClick={() => {
            if (window.confirm("Are u sure u want to delete ?"))
              this.props.deleteSeatAllocation(element._id)
          }}></i>
        </div>
      })
    });
    const seatAllocationList = this.state.Seats.concat(seatAllocation);

    let complaints = [];
    this.props.complaints.complaints.forEach(element => {
      complaints.push({
        name: element.studentName.username,
        title: element.title,
        complaint: element.complaint,
        actions: <div>
          <i className="fa fa-trash-alt delete" onClick={() => {
            if (window.confirm("Are u sure u want to delete ?"))
              this.props.deleteComplaint(element._id)
          }}></i>
        </div>
      })
    });
    const complaintsList = this.state.Complaints.concat(complaints);

    this.setState({
      Students: studentlist,
      Employees: employeeList,
      Notices: noticeList,
      Seats: seatAllocationList,
      Complaints: complaintsList,
    });
  }

  render() {

    const StudentDetail = ({ match }) => {
      return (
        <StudentUpdateForm
          updateStudent={this.props.updateStudent}
          id={match.params.id}
          student={this.props.students.students.filter((student) => (student._id === match.params.id))[0]}
        />
      )
    }

    const EmployeeDetail = ({ match }) => {
      return (
        <EmployeeUpdateForm
          updateEmployee={this.props.updateEmployee}
          id={match.params.id}
          employee={this.props.employees.employees.filter((employee) => (employee._id === match.params.id))[0]}
        />
      )
    }


    const SeatDetail = ({ match }) => {
      return (
        <SeatAllocationUpdateForm
          updateSeatAllocation={this.props.updateSeatAllocation}
          id={match.params.id}
          seat={this.props.seatAllocation.seatAllocation.filter((seat) => (seat._id === match.params.id))[0]}
        />
      )
    }
    return (
      <div className="feature admin">
        <div className="row">
          <div className="col-md-3">
            <LeftNav />
          </div>
          <div className="col-md-9">

            <Switch>
              <Route path="/admin/dashboard" component={() => <DashBoard architectures={this.props.architecture.architecture} students={this.props.students} employees={this.props.employees} auth={this.props.auth} notices={this.props.notices.notices} />} />
              <Route exact path="/admin/students" component={() => <StudentView students={this.state.Students} />} />
              <Route exact path="/admin/rooms" component={() => <ArchitectureView architectures={this.props.architecture.architecture} />} />
              <Route exact path="/admin/employees" component={() => <EmployeeView employees={this.state.Employees} />} />
              <Route exact path="/admin/EmployeeManage/addnew" component={() => <AddEmployee postEmployee={this.props.postEmployee} />} />
              <Route exact path="/admin/StudentManage/view" component={() => <StudentView students={this.state.Students} isLoading={this.props.students.isLoading} errMess={this.props.students.errMess} />} />
              <Route exact path="/admin/EmployeeManage/view" component={() => <EmployeeView employees={this.state.Employees} isLoading={this.props.employees.isLoading} errMess={this.props.employees.errMess} />} />
              <Route exact path="/admin/NoticeBoard" component={() => <NoticeBoard notices={this.state.Notices} postNotice={this.props.postNotice} isLoading={this.props.notices.isLoading} errMess={this.props.notices.errMess} />} />
              <Route exact path="/admin/Architecture" component={() => <Architecture postArchitecture={this.props.postArchitecture} architecture={this.props.architecture.architecture} isLoading={this.props.architecture.isLoading} errMess={this.props.architecture.errMess} />} />
              <Route exact path="/admin/Complaints" component={() => <Complaints complaints={this.state.Complaints} isLoading={this.props.complaints.isLoading} errMess={this.props.complaints.errMess} />} />
              <Route exact path="/admin/StudentManage/seatallocation" component={() => <Seat seats={this.state.Seats} isLoading={this.props.seatAllocation.isLoading} errMess={this.props.seatAllocation.errMess} postSeatallocation={this.props.postSeatallocation} />} />
              <Route exact path="/admin/updateStudent/:id" component={StudentDetail} />
              <Route exact path="/admin/updateEmployee/:id" component={EmployeeDetail} />
              <Route exact path="/admin/updateSeatAllocation/:id" component={SeatDetail} />
              <Redirect to="/admin/dashboard" />
            </Switch>

          </div>
        </div>
      </div>
    )
  }
}
export default Admin
