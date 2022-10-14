import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroItem } from './HeroItem';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );
    //console.log( heroes );
  return (
    <>
        <div className="shadow p-3 bg-body rounded mt-2 mb-3 animate__animated animate__backInDown">{ publisher }</div>
        <div className="row row-cols-1 row-cols-sm-2 g-3 row-cols-md-3">
            {
               heroes.map( heroe => (
                <HeroItem 
                    key={heroe.id}
                    {...heroe}
                />
               ))
            }
        </div>
    </>
  )
}
