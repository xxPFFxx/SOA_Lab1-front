import {DEFAULT_URL} from '../index'
import {applyMiddleware} from "redux";
import {fromJSON, toJSON} from "../util/humanBeingUtil";

const mainMiddleware = store => next => action => {
    switch (action.type) {
        case("LOAD_TICKETS"):{
            let req = new XMLHttpRequest();
            //pagination
            let pagination = `pageNumber=${store.getState().currentPage}&pageSize=${store.getState().pageSize}`;
            //sorting
            let order = "";
            order = applySort(store.getState().filters.id, "id", order);
            order = applySort(store.getState().filters.name, "name", order);
            order = applySort(store.getState().filters.coordinates, "coordinates", order);
            order = applySort(store.getState().filters.date, "creationDate", order);
            order = applySort(store.getState().filters.realHero, "realHero", order);
            order = applySort(store.getState().filters.hasToothpick, "hasToothpick", order);
            order = applySort(store.getState().filters.impactSpeed, "impactSpeed", order);
            order = applySort(store.getState().filters.soundtrackName, "soundtrackName", order);
            order = applySort(store.getState().filters.weaponType, "weaponType", order);
            order = applySort(store.getState().filters.mood, "mood", order);
            order = applySort(store.getState().filters.car, "car", order);
            order = applySort(store.getState().filters.team, "team", order);
            //filtering
            order += "&filterBy=";
            order = applyFilter(store.getState().filters.id, "id", order);
            order = applyFilter(store.getState().filters.name, "name", order);
            order = applyFilter(store.getState().filters.x, "coordinates", order, store.getState().filters.y);
            order = applyFilter(store.getState().filters.date, "creationDate", order, store.getState().filters.dateFormat);
            order = applyFilter(store.getState().filters.realHero, "realHero", order);
            order = applyFilter(store.getState().filters.hasToothpick, "hasToothpick", order);
            order = applyFilter(store.getState().filters.impactSpeed, "impactSpeed", order);
            order = applyFilter(store.getState().filters.soundtrackName, "soundtrackName", order);
            order = applyFilter(store.getState().filters.weaponType, "weaponType", order);
            order = applyFilter(store.getState().filters.mood, "mood", order);
            order = applyFilter(store.getState().filters.car, "car", order);
            order = applyFilter(store.getState().filters.team, "team", order);
            if (order.at(order.length-1) === ';') order = order.slice(0,order.length-1);
            req.open("GET", `${DEFAULT_URL}/human-beings?${pagination}${order}`, false);
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "UPDATE_TICKETS", value: fromJSON(req.responseText)})
                    store.dispatch({type: "SET_ERROR", value: {error: null}})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send();
            return next(action)
        }
        case("UPDATE_TICKET"):{
            let req = new XMLHttpRequest();
            req.open("PUT", `${DEFAULT_URL}/human-beings/${store.getState().currentHumanBeing.id}`, false);
            req.setRequestHeader("Content-Type", "application/json");
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "LOAD_TICKETS"})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send(toJSON(transferFormDataToHumanBeingDTO(store.getState().currentHumanBeing)));
            return next(action)
        }
        case("DELETE_TICKET"):{
            let req = new XMLHttpRequest();
            req.open("DELETE", `${DEFAULT_URL}/human-beings/${store.getState().currentHumanBeing.id}`, false);
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "LOAD_TICKETS"})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send();
            return next(action)
        }
        case("ADD_TICKET"):{
            let req = new XMLHttpRequest();
            req.open("POST", `${DEFAULT_URL}/human-beings`, false);
            req.setRequestHeader("Content-Type", "application/json");
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "LOAD_TICKETS"})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send(toJSON(transferFormDataToHumanBeingDTO(store.getState().currentHumanBeing)));
            return next(action)
        }
        case("FIND_UNIQUE_IMPACT_SPEED"):{
            let req = new XMLHttpRequest();
            req.open("GET", `${DEFAULT_URL}/additional?uniqueImpactSpeed`, false);
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "UPDATE_UNIQUE_IMPACT_SPEED", value: fromJSON(req.responseText)})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send();
            return next(action)
        }
        case("FIND_GREATER_THAN_WEAPON_TYPE"):{
            let req = new XMLHttpRequest();
            req.open("GET", `${DEFAULT_URL}/additional?weaponTypeArray=${action.value}`, false);
            req.onload = ()=>{
                if(req.status === 200){
                    store.dispatch({type: "UPDATE_WEAPON_TYPE_GREATER_THAN_ARRAY", value: fromJSON(req.responseText)})
                }
                else{
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = ()=>alert("Server is unavailable");
            req.send();
            return next(action)
        }
        default:{
            return next(action)
        }

    }
}

function transferFormDataToHumanBeingDTO(form) {
    let result = {};
    result.name = form.name;
    result.coordinates = {};
    result.coordinates.x = form.coords_x;
    result.coordinates.y = form.coords_y;

    result.realHero = form.realHero + "";
    result.hasToothpick = form.hasToothpick + "";
    result.impactSpeed = form.impactSpeed;
    result.soundtrackName = form.soundtrackName;
    result.weaponType = form.weaponType;
    result.mood = form.mood;

    result.car = {};
    result.car.name = form.car_name;
    result.car.cool = form.car_cool + "";

    result.team = {};
    result.team.name = form.team_name;
    return result;
}

function applySort(filter, name, result){
    if(filter.sort !== 0){
        if (result.length === 0){
            return  result + `&orderBy=${filter.sort === 1? "+":"-"}${name}`;
        }
        else {
            return  result + `;${filter.sort === 1? "+":"-"}${name}`;
        }
    }
    else return result;
}

function applyFilter(filter, name, result, secondFilter=null){
    if (name === "coordinates" && (filter.filter || secondFilter.filter)){
        return result + `${name}:${filter.filter},${secondFilter.filter};`;
    }
    if(filter.filter){
        if(secondFilter){
            return result + `${name}:${filter.filter},${secondFilter.filter};`;
        }
        else return  result + `${name}:${filter.filter};`;
    }
    else return result;
}
export default applyMiddleware(mainMiddleware)