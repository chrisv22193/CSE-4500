const cars = {
    Year: 2012,
    Make: 'Volkswagen',
    Model: 'Golf R',
    isActive: true
}

const carObjToString = JSON.stringify(cars)

console.log(typeof carObjToString);

const toJSONCars = JSON.parse(carObjToString);

console.log(typeof toJSONCars);