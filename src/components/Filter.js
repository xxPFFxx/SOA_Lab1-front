import React from "react";
import {connect} from "react-redux";

class Filter extends React.Component{
    render() {
        return(
            <form>
                <div className="row filter">
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
                        <label className="form-label" htmlFor="dateFormat">Date format</label>
                        <select className="form-control" id="dateFormat" value={this.props.filters.dateFormat.filter} onChange={(e)=>this.updateFilter(e, "dateFormat")}>
                            <option value="">None</option>
                            <option value="after">After</option>
                            <option value="before">Before</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="date">Date</label>
                        <input type="datetime-local" id="date" className="form-control" value={this.props.filters.date.filter} onChange={(e)=>this.updateFilter(e, "date")}/>
                    </div>
                </div>
                <div className="row filter">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="realHero">RealHero</label>
                        <select className="form-control" id="realHero" value={this.props.filters.realHero.filter} onChange={(e)=>this.updateFilter(e, "realHero")}>
                            <option value="">None</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="hasToothpick">HasToothpick</label>
                        <select className="form-control" id="hasToothpick" value={this.props.filters.hasToothpick.filter} onChange={(e)=>this.updateFilter(e, "hasToothpick")}>
                            <option value="">None</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
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
                        <select className="form-control" id="weaponType" value={this.props.filters.weaponType.filter} onChange={(e)=>this.updateFilter(e, "weaponType")}>
                            <option value="">None</option>
                            <option value="AXE">AXE</option>
                            <option value="RIFLE">RIFLE</option>
                            <option value="MACHINE_GUN">MACHINE_GUN</option>
                            <option value="BAT">BAT</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="mood">Mood</label>
                        <select className="form-control" id="mood" value={this.props.filters.mood.filter} onChange={(e)=>this.updateFilter(e, "mood")}>
                            <option value="">None</option>
                            <option value="SORROW">SORROW</option>
                            <option value="CALM">CALM</option>
                            <option value="RAGE">RAGE</option>
                            <option value="FRENZY">FRENZY</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="car">Car</label>
                        <input type="text" id="car" className="form-control" value={this.props.filters.car.filter} onChange={(e)=>this.updateFilter(e, "car")}/>
                    </div>
                    <div className="col-auto">
                        <br/>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>this.applyChanges()}>Apply</button>
                    </div>
                </div>
            </form>
        )
    }
    updateBooleanFilter(e, name){
        this.props.dispatch({type: "UPDATE_FILTER", value:{filterName: name, value: e.target.checked}})
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