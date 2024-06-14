import { IHero, IHeroFetched, IHeroFetching, IHeroFetchingError } from '../interfaces';


const heroFetching = ():IHeroFetching => ({type:'HEROES_FETCHING'});

const heroFetched = (data:IHero[]):IHeroFetched => ({payload:data,type:'HEROES_FETCHED'});

const heroFetchingError = ():IHeroFetchingError => ({type:'HEROES_FETCHING_ERROR'}); 

export {heroFetching,heroFetched,heroFetchingError};