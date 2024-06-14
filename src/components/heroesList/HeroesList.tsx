import {FC,PropsWithChildren, useEffect} from 'react';

import { useAppActionts, useAppSelector } from '../../hooks';
import { heroService } from '../../services';
import { renderContent } from '../../utility';
import { HeroesListItem } from '../heroesListItem/HeroesListItem';


type IProps = PropsWithChildren;

const HeroesList:FC<IProps> = () => {
  const {heroes, heroesLoadingStatus} = useAppSelector(state => state.heroReducer);
  const {heroFetched,heroFetching,heroFetchingError} = useAppActionts();

  useEffect(()=>{
    heroFetching();
    heroService.hero.getAll()
      .then(({data}) => heroFetched(data))
      .catch(()=>heroFetchingError());
    // eslint-disable-next-line
  },[]);

  const content = renderContent({status:heroesLoadingStatus,data:heroes,Component:HeroesListItem});
  
  return (
    <>
      {content}            
    </>
  );
};

export {HeroesList};