export function fromJSON(json){
    return JSON.parse(json)
}

export function toJSON(humanBeing){
    return JSON.stringify(humanBeing)
}

export function fromHumanBeing(humanBeing){
    return{
        id: humanBeing.id,
        name: humanBeing.name,
        coords_x: humanBeing.coordinates.x,
        coords_y: humanBeing.coordinates.y,
        date: humanBeing.date,
        realHero: humanBeing.realHero ? humanBeing.realHero : false,
        hasToothpick: humanBeing.hasToothpick ? humanBeing.hasToothpick : false,
        impactSpeed: humanBeing.impactSpeed ? humanBeing.impactSpeed : "",
        soundtrackName : humanBeing.soundtrackName ? humanBeing.soundtrackName : "",
        weaponType : humanBeing.weaponType ? humanBeing.weaponType : "",
        mood : humanBeing.mood ? humanBeing.mood : "",
        car_id: humanBeing.car ? humanBeing.car.id : "",
        car_name: humanBeing.car ? humanBeing.car.name : "",
        car_cool: humanBeing.car && humanBeing.car.cool ? humanBeing.car.cool : false
    }
}