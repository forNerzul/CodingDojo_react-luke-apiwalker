// Films:
// {title: "A New Hope", episode_id: 4, opening_crawl: "It is a period of civil war.", director: "George Lucas", producer: "Gary Kurtz, Rick McCallum", release_date: "1977-05-25"}
const ShowFilms = ({dataState}) => {
    const {title, episode_id, opening_crawl, director, producer, release_date} = dataState;
    return(
        <div>
            <h2>Show Films</h2>
            <h3>{title}</h3>
            <p>Episode: {episode_id}</p>
            <p>Opening Crawl: "{opening_crawl}"</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p>Release Date: {release_date}</p>
        </div>
    );
}

export default ShowFilms;