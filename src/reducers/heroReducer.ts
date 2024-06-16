import { EStatus } from '../hooks';
import { IHeroState, IHeroAction} from '../interfaces';


const initialState:IHeroState = {
  heroes: [],
  heroesLoadingStatus: EStatus.PENDING,
  filters: [],
  elements:[],
  filterParams:'all'
};



const heroReducer = (state = initialState, action:IHeroAction):IHeroState => {
  switch (action.type) {
  case 'HEROES_FETCHING':
    return {
      ...state,
      heroesLoadingStatus: EStatus.LOADING
    };
  case 'HEROES_FETCHED':
    return {
      ...state,
      heroes: action.payload,
      filters:action.payload,
      heroesLoadingStatus: EStatus.SACCESS
    };
  case 'HEROES_FETCHING_ERROR':
    return {
      ...state,
      heroesLoadingStatus: EStatus.ERROR
    };
  case 'ELEMENTS_FETCHED':
    return {
      ...state,
      elements: action.payload,
    };
  case 'HEROES_CREATE':
    return {
      ...state,
      heroes:[...state.heroes,action.payload],
      filters: state.filterParams === 'all' ? 
        [...state.heroes,action.payload] 
        : 
        state.heroes.filter(({element}) => element === state.filterParams )
    };
  case 'HEROES_DELETE':
    return {
      ...state,
      heroes:state.heroes.filter(value => value.id !== action.payload),
      filters:state.filters.filter(value => value.id !== action.payload),
    };
  case 'HEROES_FILTER':
    return {
      ...state,
      filterParams:action.payload,
      filters: action.payload === 'all' ? 
        [...state.heroes] 
        : 
        state.heroes.filter(({element}) => element === action.payload )
    };
  default: return state;
  }
};

export {heroReducer};