const getDataFromApi = () => {
    return fetch('//rickandmortyapi.com/api/character')
    .then (response => response.json())
    .then (data => {
        return data.results.map(character => {
            return {
                id:character.id,
                name:character.name,
                species: character.species,
                status: character.status,
                gender: character.gender,
                image:character.image,
                origin: character.origin.name,
                location: character.location.name,
                episode: character.episode.length,
            };
        });
    });
};

export default getDataFromApi;

//NO OLVIDAR CAMBIAR A API
//('//rickandmortyapi.com/api/character/')