// Starships

// {
//     "name": "CR90 corvette",
//     "model": "CR90 corvette",
//     "manufacturer": "Corellian Engineering Corporation",
//     "cost_in_credits": "3500000",
//     "length": "150",
//     "max_atmosphering_speed": "950",
//     "crew": "30-165",
//     "passengers": "600",
//     "cargo_capacity": "3000000",
//     "consumables": "1 year",
// }

const ShowStarships = ({dataState}) => {
    const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables} = dataState;
    return(
        <div>
            <h2>Show Starships</h2>
            <h3>{name}</h3>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost in Credits: {cost_in_credits}</p>
            <p>Length: {length}</p>
            <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
            <p>Cargo Capacity: {cargo_capacity}</p>
            <p>Consumables: {consumables}</p>
        </div>
    );
}

export default ShowStarships;