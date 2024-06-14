import { EStatus } from '../hooks';


type IElements =  'all' | 'fire' | 'water' | 'wind' |'earth';

interface IHero {
    id: string | number,
    name: string,
    description: string
    element:IElements
}

interface IHeroState {
    heroes:IHero[],
    heroesLoadingStatus: EStatus,
    filters:IHero[]
}

interface IHeroFetching {
    type:'HEROES_FETCHING'
}

interface IHeroFetched{
    type:'HEROES_FETCHED'
    payload:IHero[]
}

interface IHeroFetchingError {
    type:'HEROES_FETCHING_ERROR'
}

type IHeroAction = IHeroFetching | IHeroFetched | IHeroFetchingError;

export type {IHero,IElements, IHeroState, IHeroAction,IHeroFetching,IHeroFetched,IHeroFetchingError};