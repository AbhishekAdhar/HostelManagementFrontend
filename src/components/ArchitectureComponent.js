import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup } from 'reactstrap';
import ArchitectureView from './ArchitectureView'

class Architecture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // room: this.props.architecture.room
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postArchitecture(this.state);
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Architecture</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="Rooms">Total Rooms</Label>
                                    <Input required type="text" name="rooms" id="rooms" placeholder="Rooms"
                                        onChange={this.handleInputChange} value={this.state.rooms} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="container-fluid">
                        <Row form>
                            <FormGroup row>
                                <Col md={{ size: 15 }}>
                                    <Button type="submit" color="primary">
                                        ADD ROOM
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Row>
                        </div>
                    </Form>
                </div>
                <div className="col-12 container-fluid" ><ArchitectureView architectures={this.props.architecture} isLoading={this.props.isLoading} errMess={this.props.errMess} /></div>
            </div>
        )
    }
}

export default Architecture;