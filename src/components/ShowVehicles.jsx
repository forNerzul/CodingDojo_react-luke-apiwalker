// Vehicles:
// {name: "Sand Crawler", model: "Digger Crawler", manufacturer: "Corellia Mining Corporation", cost_in_credits: "150000", length: "36.8", max_atmosphering_speed: "30", crew: "46", passengers: "30", cargo_capacity: "50000", consumables: "2 months", vehicle_class: "wheeled"}

const ShowVehicles = ({dataState}) => {
    const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class} = dataState;
    return(
        <div>
            <h2>Show Vehicles</h2>
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
            <p>Vehicle Class: {vehicle_class}</p>
        </div>
    );
}

export default ShowVehicles;