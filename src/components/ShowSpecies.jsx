// Species:
// {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic"}

const ShowSpecies = ({dataState}) => {
    const {name, classification, designation, average_height, skin_colors} = dataState;

    return(
        <div>
            <h2>Show Species</h2>
            <h2>{name}</h2>
            <p>Classification: {classification}</p>
            <p>Designation: {designation}</p>
            <p>Average Height: {average_height}</p>
            <p>Skin Colors: {skin_colors}</p>
        </div>
    );
}
export default ShowSpecies;