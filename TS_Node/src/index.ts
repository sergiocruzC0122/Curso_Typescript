import { getPokemon } from './generics/get-pokemon';




getPokemon(4)
    .then( pokemon => console.log( pokemon.abilities) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )



