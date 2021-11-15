import React from "react";
import {connect} from "react-redux";

class Filter extends React.Component{
    render() {
        return(
            <form>
                <div className="row">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="id">ID</label>
                        <input type="number" id="id" className="form-control" value={this.props.filters.id.filter} onChange={(e)=>this.updateFilter(e, "id")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" value={this.props.filters.name.filter} onChange={(e)=>this.updateFilter(e, "name")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="x">X</label>
                        <input type="number" id="x" className="form-control" value={this.props.filters.x.filter} onChange={(e)=>this.updateFilter(e, "x")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="y">Y</label>
                        <input type="number" id="y" className="form-control" value={this.props.filters.y.filter} onChange={(e)=>this.updateFilter(e, "y")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="date">Date</label>
                        <input type="text" id="date" className="form-control" value={this.props.filters.date.filter} onChange={(e)=>this.updateFilter(e, "date")}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="realHero">RealHero</label>
                        <input type="checkbox" id="realHero" className="form-control" value={this.props.filters.realHero.filter} onChange={(e)=>this.updateFilter(e, "realHero")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="hasToothpick">HasToothpick</label>
                        <input type="checkbox" id="hasToothpick" className="form-control" value={this.props.filters.hasToothpick.filter} onChange={(e)=>this.updateFilter(e, "hasToothpick")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="impactSpeed">ImpactSpeed</label>
                        <input type="number" id="impactSpeed" className="form-control" value={this.props.filters.impactSpeed.filter} onChange={(e)=>this.updateFilter(e, "impactSpeed")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="soundtrackName">SoundtrackName</label>
                        <input type="text" id="soundtrackName" className="form-control" value={this.props.filters.soundtrackName.filter} onChange={(e)=>this.updateFilter(e, "soundtrackName")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="weaponType">WeaponType</label>
                        <input type="number" id="weaponType" className="form-control" value={this.props.filters.weaponType.filter} onChange={(e)=>this.updateFilter(e, "weaponType")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="mood">Mood</label>
                        <input type="number" id="mood" className="form-control" value={this.props.filters.mood.filter} onChange={(e)=>this.updateFilter(e, "mood")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="car">Car</label>
                        <input type="number" id="car" className="form-control" value={this.props.filters.car.filter} onChange={(e)=>this.updateFilter(e, "car")}/>
                    </div>
                    <div className="col-auto">
                        <br/>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>this.applyChanges()}>Apply</button>
                    </div>
                </div>
            </form>
        )
    }
    updateFilter(e, name){
        this.props.dispatch({type: "UPDATE_FILTER", value:{filterName: name, value: e.target.value}})
    }
    applyChanges(){
        this.props.dispatch({type: "UPDATE_CURRENT_PAGE", value:{currentPage: 1}})
        this.props.dispatch({type: "LOAD_TICKETS", value:{}})
    }
}

const mapStateToProps = function(store) {
    return {
        filters: store.filters
    }
};

export default connect(mapStateToProps)(Filter);