import {fromHumanBeing} from "../util/humanBeingUtil";

const mainReducer = (state={}, action)=>{
    switch (action.type){
        case ("UPDATE_TICKETS"): {
            let result = [];
            let humanBeing = action.value.humanBeingList;
            if(humanBeing && typeof humanBeing[Symbol.iterator] === 'function'){
                result = humanBeing;
            }
            else if(humanBeing){
                result.push(humanBeing);
            }

            return Object.assign({}, state, {humanBeings: result, totalHumanBeings: parseInt(action.value.humanBeingList.length)});
        }
        case ("UPDATE_CURRENT_PAGE"): {
            return Object.assign({}, state, {currentPage: action.value.currentPage})
        }
        case ("UPDATE_PAGE_SIZE"): {
            return Object.assign({}, state, {pageSize: action.value.pageSize})
        }
        case ("UPDATE_SORT"): {
            let filters = state.filters;
            filters[action.value.filterName].sort = (filters[action.value.filterName].sort + 1) % 3;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_FILTER"): {
            let filters = state.filters;
            filters[action.value.filterName].filter = action.value.value;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_CURRENT_TICKET_FIELD"): {
            let humanBeing = state.currentHumanBeing;
            humanBeing[action.value.fieldName] = action.value.value;
            return Object.assign({}, state, {currentHumanBeing: humanBeing})

        }
        case ("UPDATE_CURRENT_TICKET"):{
            return Object.assign({}, state, {currentHumanBeing: fromHumanBeing(action.value.humanBeing)})
        }
        case ("CLEAR_CURRENT_TICKET"): {
            let humanBeing = state.currentHumanBeing;
            for(let field in humanBeing){
                if (Object.prototype.hasOwnProperty.call(humanBeing, field)) {
                    if (field === "hasToothpick" || field === "realHero" || field === "car_cool"){
                        humanBeing[field] = false;
                    }
                    else{
                        humanBeing[field] = "";
                    }

                }
            }
            return Object.assign({}, state, {currentHumanBeing: humanBeing})
        }
        case ("SET_ERROR"):{
            return Object.assign({}, state, {error: action.value.error})
        }
        case ("SET_MODE"):{
            return Object.assign({}, state, {mode: action.value.mode})
        }
        default: return state;
    }
}

export default mainReducer