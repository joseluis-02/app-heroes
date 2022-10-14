import { heroes } from "../data/heroes"

export const getByHeroId = ( id ) => {
    return heroes.find(heroe => heroe.id === id);
}