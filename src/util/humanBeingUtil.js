import convert from "xml-js";

export function fromJSON(json){
    return JSON.parse(json)
}

export function toJSON(humanBeing){
    return JSON.stringify(humanBeing)
}

export function fromHumanBeing(humanBeing){
    return{
        id: humanBeing.id._text,
        name: humanBeing.name._text,
        coords_x: humanBeing.coordinates.x._text,
        coords_y: humanBeing.coordinates.y._text,
        date: humanBeing.date,
        realHero: humanBeing.realHero ? humanBeing.realHero._text : "",
        hasToothpick: humanBeing.hasToothpick ? humanBeing.hasToothpick._text : "",
        type: humanBeing.impactSpeed ? humanBeing.impactSpeed._text : "",
        car_id: humanBeing.car ? humanBeing.car.id._text : "",
        car_name: humanBeing.car ? humanBeing.car.name._text : "",
        car_cool: humanBeing.car && humanBeing.car.cool ? humanBeing.car.cool._text : ""
    }
}