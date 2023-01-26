// People api response
// {
//     "name": "Luke Skywalker",
//     "height": "172",
//     "hair_color": "blond",
//     "birth_year": "19BBY",
//     "homeworld": "https://swapi.dev/api/planets/1/"
//}


const ShowPeople = ({dataState}) => {
    const {name, height, hair_color, birth_year, homeworld} = dataState;
    
    return(
            <div className='information'>
                <h2>Show Character</h2>
                <h3>{name}</h3>
                <p>Height: {height}</p>
                <p>Hair Color: {hair_color}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Homeworld: {homeworld}</p> 
            </div>
    );
}

export default ShowPeople;