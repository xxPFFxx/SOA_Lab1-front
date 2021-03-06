import React from "react";
import {connect} from "react-redux";
import Table from "react-bootstrap/Table";
import {Accordion} from "react-bootstrap";

class AdditionalTasks extends React.Component {
    render() {
        let uniqueImpactSpeedArray = [];
        if(this.props.uniqueImpactSpeed) {
            for (let impactSpeed of this.props.uniqueImpactSpeed) {
                uniqueImpactSpeedArray.push(<tr>{impactSpeed}</tr>);
            }
        }

        let result = [];
        if(this.props.weaponTypeGreaterThanArray){
            for (let humanBeing of this.props.weaponTypeGreaterThanArray){
                let date = humanBeing.creationDate !== 'null' ? new Date(humanBeing.creationDate).toLocaleString() : ''
                result.push(
                    <tr>
                        <td>{humanBeing.id}</td>
                        <td>{humanBeing.name}</td>
                        <td>x={humanBeing.coordinates.x}, y={humanBeing.coordinates.y}</td>
                        <td>{date}</td>
                        <td>{humanBeing.realHero ? humanBeing.realHero : ""}</td>
                        <td>{humanBeing.hasToothpick ? humanBeing.hasToothpick : ""}</td>
                        <td>{humanBeing.impactSpeed ? humanBeing.impactSpeed : ""}</td>
                        <td>{humanBeing.soundtrackName ? humanBeing.soundtrackName : ""}</td>
                        <td>{humanBeing.weaponType ? humanBeing.weaponType : ""}</td>
                        <td>{humanBeing.mood ? humanBeing.mood : ""}</td>
                        <td>{humanBeing.car ? humanBeing.car.name : ""}</td>
                    </tr>
                )
            }
        }

        return (
            <form>
                <h1>Additional Tasks</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Вернуть количество и массив объектов, значение поля weaponType которых больше заданного.</Accordion.Header>
                        <Accordion.Body>
                            <div className="col-auto">
                            <select className="form-control" id="weaponType" value={this.props.weaponTypeGreaterThan} onChange={(e)=>this.updateWeaponTypeGreaterThan(e)}>
                                <option value="">None</option>
                                <option value="AXE">AXE</option>
                                <option value="RIFLE">RIFLE</option>
                                <option value="MACHINE_GUN">MACHINE_GUN</option>
                                <option value="BAT">BAT</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>this.findGreaterThanWeaponType(this.props.weaponTypeGreaterThan)}>Find</button>
                            <div>Количество : {this.props.totalWeaponTypeGreaterThanArray}</div>
                            <Table striped bordered hover>
                                <thead style={{backgroundColor : "rgb(55,55,55)", color : "white"}}>
                                <tr>
                                    <th scope="col">ID </th>
                                    <th scope="col">Name </th>
                                    <th scope="col">Coordinates </th>
                                    <th scope="col">Creation Date</th>
                                    <th scope="col">RealHero  </th>
                                    <th scope="col">Has Toothpick </th>
                                    <th scope="col">Impact Speed</th>
                                    <th scope="col">Soundtrack Name </th>
                                    <th scope="col">Weapon Type </th>
                                    <th scope="col">Mood </th>
                                    <th scope="col">Car </th>
                                </tr>
                                </thead>
                                <tbody>{result}</tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Вернуть массив уникальных значений поля impactSpeed по всем объектам.</Accordion.Header>
                        <Accordion.Body>
                            <Table bordered hover>
                                <thead>
                                <tr>
                                    <th scope="col">impactSpeed</th>
                                </tr>
                                </thead>
                                <tbody>{uniqueImpactSpeedArray}</tbody>
                            </Table>
                            <button type="button" className="btn btn-outline-primary" onClick={()=>this.findUniqueImpactSpeed()}>Find</button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Удалить из команды всех героев без зубочисток.</Accordion.Header>
                        <Accordion.Body>
                            <input type="number" id="team_id_toothpick" className="form-control" placeholder="Input the team_id" value={this.props.removeToothpickTeamId} onChange={(e)=>this.updateRemoveToothpickTeamId(e)}/>
                            <button type="button" className="btn btn-outline-primary" onClick={()=>this.removeWithoutToothpick(this.props.removeToothpickTeamId)}>Submit</button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Поменять всем героям команды настроение на максимально печальное.</Accordion.Header>
                        <Accordion.Body>
                            <input type="number" id="team_id_sad" className="form-control" placeholder="Input the team_id" value={this.props.sadnessTeamId} onChange={(e)=>this.updateSadnessTeamId(e)}/>
                            <button type="button" className="btn btn-outline-primary" onClick={()=>this.makeMostDepressive(this.props.sadnessTeamId)}>Submit</button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </form>
        )
    }
    updateWeaponTypeGreaterThan(e){
        this.props.dispatch({type: "UPDATE_WEAPON_TYPE_GREATER_THAN", value:e.target.value})
    }

    updateRemoveToothpickTeamId(e){
        this.props.dispatch({type: "UPDATE_REMOVE_TOOTHPICK_TEAM_ID", value:e.target.value})
    }

    updateSadnessTeamId(e){
        this.props.dispatch({type: "UPDATE_SADNESS_TEAM_ID", value:e.target.value})
    }

    findGreaterThanWeaponType(weaponType){
        this.props.dispatch({type: "FIND_GREATER_THAN_WEAPON_TYPE", value: weaponType})
    }

    findUniqueImpactSpeed(){
        this.props.dispatch({type: "FIND_UNIQUE_IMPACT_SPEED"})
    }

    removeWithoutToothpick(teamId){
        this.props.dispatch({type: "REMOVE_WITHOUT_TOOTHPICK", value: teamId})
    }

    makeMostDepressive(teamId){
        this.props.dispatch({type: "MAKE_MOST_DEPRESSIVE", value: teamId})
    }

    updateFilter(e, name){
        this.props.dispatch({type: "UPDATE_FILTER", value:{filterName: name, value: e.target.value}})
    }
}


const mapStateToProps = function(store) {
    return {
        mode: store.mode,
        humanBeing: store.currentHumanBeing,
        filters: store.filters,
        uniqueImpactSpeed: store.uniqueImpactSpeed,
        weaponTypeGreaterThan: store.weaponTypeGreaterThan,
        weaponTypeGreaterThanArray: store.weaponTypeGreaterThanArray,
        totalWeaponTypeGreaterThanArray: store.totalweaponTypeGreaterThanArray,
        removeToothpickTeamId: store.removeToothpickTeamId,
        sadnessTeamId: store.sadnessTeamId
    }
};

export default connect(mapStateToProps)(AdditionalTasks);