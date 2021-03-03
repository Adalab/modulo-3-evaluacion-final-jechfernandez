const getDataFromApi = () => {
    return fetch('//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
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
                episode: character.episode,
            };
        });
    });
};

export default getDataFromApi;

//NO OLVIDAR CAMBIAR A API
//('//rickandmortyapi.com/api/character/')