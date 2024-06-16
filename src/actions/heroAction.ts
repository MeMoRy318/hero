import { IElements, IHero, IHeroFetched, IHeroFetching, IHeroFetchingError,IElementsFetched, IHeroCreate, IHeroDelete, IHeroFilter } from '../interfaces';


const heroFetching = ():IHeroFetching => ({type:'HEROES_FETCHING'});

const heroFetched = (data:IHero[]):IHeroFetched => ({payload:data,type:'HEROES_FETCHED'});

const heroFetchingError = ():IHeroFetchingError => ({type:'HEROES_FETCHING_ERROR'});

const elementsFetched = (elements:IElements[]):IElementsFetched => ({payload:elements,type:'ELEMENTS_FETCHED'});

const heroCreate = (data:IHero):IHeroCreate => ({payload:data,type:'HEROES_CREATE'});

const heroDelete = (id:string | number ):IHeroDelete => ({payload:id,type:'HEROES_DELETE'});

const heroFilter = (params:IElements):IHeroFilter => ({payload:params,type:'HEROES_FILTER'});

export {heroFetching,heroFetched,heroFetchingError,elementsFetched,heroCreate,heroDelete,heroFilter};