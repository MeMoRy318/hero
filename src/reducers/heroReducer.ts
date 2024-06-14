import { EStatus } from '../hooks';
import { IHeroState, IHeroAction} from '../interfaces';


const initialState:IHeroState = {
  heroes: [],
  heroesLoadingStatus: EStatus.PENDING,
  filters: []
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
      heroesLoadingStatus: EStatus.SACCESS
    };
  case 'HEROES_FETCHING_ERROR':
    return {
      ...state,
      heroesLoadingStatus: EStatus.ERROR
    };
  default: return state;
  }
};

export {heroReducer};