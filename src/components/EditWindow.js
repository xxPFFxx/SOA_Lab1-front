import React from "react";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal'
import {Button, Col, Form, Row} from "react-bootstrap";

class EditWindow extends React.Component{
    render() {
        return(
            <Modal centered show={this.props.mode !== 0} onHide={()=>this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.mode === 2 ? "Add humanBeing" : `Modify humanBeing ${this.props.humanBeing.id}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.name} onChange={(e)=>this.handleChange(e, "name")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Real Hero</Form.Label>
                                    <Form.Check type="text" value={this.props.humanBeing.realHero} onChange={(e)=>this.handleChange(e, "realHero")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>HasToothpick</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.hasToothpick} onChange={(e)=>this.handleChange(e, "hasToothpick")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Impact Speed</Form.Label>
                                    <Form.Control type="number" value={this.props.humanBeing.impactSpeed} onChange={(e)=>this.handleChange(e, "impactSpeed")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Soundtrack name</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.soundtrackName} onChange={(e)=>this.handleChange(e, "soundtrackName")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Weapon type</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.weaponType} onChange={(e)=>this.handleChange(e, "weaponType")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Mood</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.mood} onChange={(e)=>this.handleChange(e, "mood")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>X coordinate</Form.Label>
                                    <Form.Control type="number" value={this.props.humanBeing.coords_x} onChange={(e)=>this.handleChange(e, "coords_x")}/>
                                </Form.Group>
                            </Col><Col>
                            <Form.Group>
                                <Form.Label>Y coordinate</Form.Label>
                                <Form.Control type="number" value={this.props.humanBeing.coords_y} onChange={(e)=>this.handleChange(e, "coords_y")}/>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Car ID</Form.Label>
                                    <Form.Control type="number" value={this.props.humanBeing.car_id} onChange={(e)=>this.handleChange(e, "car_id")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Car name</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.car_name} onChange={(e)=>this.handleChange(e, "car_name")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Car cool</Form.Label>
                                    <Form.Control type="text" value={this.props.humanBeing.car_cool} onChange={(e)=>this.handleChange(e, "car_cool")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" disabled={this.props.mode !== 1} onClick={()=>this.handleDelete()}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={()=>this.handleSubmit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    handleClose(){
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
    }
    handleSubmit(){
        if(this.props.mode === 1){
            this.props.dispatch({type: "UPDATE_TICKET"})
        }
        if(this.props.mode === 2){
            this.props.dispatch({type: "ADD_TICKET"})
        }
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
    }
    handleDelete(){
        this.props.dispatch({type: "DELETE_TICKET"})
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
    }
    handleChange(e, field){
        let mode = this.props.mode;
        this.props.dispatch({type: "SET_MODE", value:{mode: 0}})
        this.props.dispatch({type: "UPDATE_CURRENT_TICKET_FIELD", value:{fieldName: field, value: e.target.value}});
        this.props.dispatch({type: "SET_MODE", value:{mode: mode}})
    }
}

const mapStateToProps = function(store) {
    return {
        mode: store.mode,
        humanBeing: store.currentHumanBeing
    }
};

export default connect(mapStateToProps)(EditWindow);