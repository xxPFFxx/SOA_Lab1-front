import React from "react";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table'

class MainTable extends React.Component{

    constructor(props){
        super(props);
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }

    render(){
        let result = [];

        if(this.props.humanBeings){
            for (let humanBeing of this.props.humanBeings){
                let date = humanBeing.creationDate !== 'null' ? new Date(humanBeing.creationDate).toLocaleString() : ''
                result.push(
                    <tr onClick={()=>this.handleClick(humanBeing)}>
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
        return(
            <Table bordered hover>
                <thead>
                    <tr>
                        <th scope="col">ID <FontAwesomeIcon icon={this.props.filters.id.sort===0 ? faSort : this.props.filters.id.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("id")}/></th>
                        <th scope="col">Name <FontAwesomeIcon icon={this.props.filters.name.sort===0 ? faSort : this.props.filters.name.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("name")}/></th>
                        <th scope="col">Coordinates <FontAwesomeIcon icon={this.props.filters.coordinates.sort===0 ? faSort : this.props.filters.coordinates.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("coordinates")}/></th>
                        <th scope="col">Creation Date <FontAwesomeIcon icon={this.props.filters.date.sort===0 ? faSort : this.props.filters.date.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("date")}/></th>
                        <th scope="col">RealHero <FontAwesomeIcon icon={this.props.filters.realHero.sort===0 ? faSort : this.props.filters.realHero.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("realHero")}/></th>
                        <th scope="col">Has Toothpick <FontAwesomeIcon icon={this.props.filters.hasToothpick.sort===0 ? faSort : this.props.filters.hasToothpick.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("hasToothpick")}/></th>
                        <th scope="col">Impact Speed <FontAwesomeIcon icon={this.props.filters.impactSpeed.sort===0 ? faSort : this.props.filters.impactSpeed.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("impactSpeed")}/></th>
                        <th scope="col">Soundtrack Name <FontAwesomeIcon icon={this.props.filters.soundtrackName.sort===0 ? faSort : this.props.filters.soundtrackName.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("soundtrackName")}/></th>
                        <th scope="col">Weapon Type <FontAwesomeIcon icon={this.props.filters.weaponType.sort===0 ? faSort : this.props.filters.weaponType.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("weaponType")}/></th>
                        <th scope="col">Mood <FontAwesomeIcon icon={this.props.filters.mood.sort===0 ? faSort : this.props.filters.mood.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("mood")}/></th>
                        <th scope="col">Car <FontAwesomeIcon icon={this.props.filters.car.sort===0 ? faSort : this.props.filters.car.sort===1? faSortUp : faSortDown} onClick={()=>this.sort("car")}/></th>
                    </tr>
                </thead>
                <tbody>{result}</tbody>
            </Table>
        )
    }

    sort(filterName) {
        this.props.dispatch({type: "UPDATE_SORT", value:{filterName: filterName}})
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }

    handleClick(humanBeing){
        this.props.dispatch({type: "UPDATE_CURRENT_TICKET", value:{humanBeing: humanBeing}});
        this.props.dispatch({type: "SET_MODE", value:{mode: 1}})
    }
}

const mapStateToProps = function(store) {
    return {
        humanBeings: store.humanBeings,
        filters: store.filters
    }
};

export default connect(mapStateToProps)(MainTable);