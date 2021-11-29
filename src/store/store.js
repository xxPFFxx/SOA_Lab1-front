import { createStore} from 'redux';
import reducers from './reducers';
import middleware from "./middleware";

const initialState = {
    humanBeings: [],
    totalHumanBeings: 0,
    currentPage: 1,
    pageSize: 10,
    error: null,
    mode: 0,
    uniqueImpactSpeed : [],
    weaponTypeGreaterThan : "",
    weaponTypeGreaterThanArray : [],
    totalWeaponTypeGreaterThanArray : 0,
    currentHumanBeing:
        {
            id: "",
            name: "",
            coords_x: "",
            coords_y: "",
            date: "",
            realHero: false,
            hasToothpick: false,
            impactSpeed: "",
            soundtrackName : "",
            weaponType : "",
            mood : "",
            car_id: "",
            car_name: "",
            car_cool: false,
        },
    filters:
        {
            id: {filter: null, sort: 0},
            name: {filter: null, sort: 0},
            coordinates: {filter: null, sort: 0},
            x: {filter: null, sort: 0},
            y: {filter: null, sort: 0},
            dateFormat : {filter : null, sort : 0},
            date: {filter: null, sort: 0},
            realHero: {filter: null, sort: 0},
            hasToothpick: {filter: null, sort: 0},
            impactSpeed: {filter: null, sort: 0},
            soundtrackName: {filter: null, sort: 0},
            weaponType: {filter: null, sort: 0},
            mood: {filter: null, sort: 0},
            car: {filter: null, sort: 0}
        }
}

export default createStore(reducers, initialState, middleware);