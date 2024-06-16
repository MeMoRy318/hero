import { EStatus } from '../hooks';


type IElements =  'all' | 'fire' | 'water' | 'wind' |'earth';

interface IHero {
    id: string | number,
    name: string,
    description: string
    element:IElements,
}

interface IHeroState {
    heroes:IHero[],
    heroesLoadingStatus: EStatus,
    filters:IHero[],
    elements:IElements[]
    filterParams:IElements
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

interface IElementsFetched{
    type:'ELEMENTS_FETCHED'
    payload:IElements[]
}

interface IHeroCreate {
    type:'HEROES_CREATE',
    payload:IHero
}

interface IHeroDelete {
    type:'HEROES_DELETE',
    payload: string | number
}

interface IHeroFilter {
    type:'HEROES_FILTER'
    payload:IElements
}

type IHeroAction = IHeroFetching | IHeroFetched | IHeroFetchingError | IElementsFetched | IHeroCreate | IHeroDelete | IHeroFilter;

export type {IHeroFilter,IHero,IElements, IHeroState, IHeroAction,IHeroFetching,IHeroFetched,IHeroFetchingError,IElementsFetched,IHeroCreate,IHeroDelete};