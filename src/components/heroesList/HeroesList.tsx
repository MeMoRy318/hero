import {FC,PropsWithChildren, useEffect} from 'react';

import { useAppActionts, useAppSelector } from '../../hooks';
import { heroService } from '../../services';
import { renderContent } from '../../utility';
import { HeroesListItem } from '../heroesListItem/HeroesListItem';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

type IProps = PropsWithChildren;

const HeroesList:FC<IProps> = () => {
  const {filters, heroesLoadingStatus} = useAppSelector(state => state.heroReducer);
  const {heroFetched,heroFetching,heroFetchingError} = useAppActionts();

  useEffect(()=>{
    heroFetching();
    heroService.hero.getAll()
      .then(({data}) => heroFetched(data))
      .catch(()=>heroFetchingError());
    // eslint-disable-next-line
  },[]);

  const content = renderContent({status:heroesLoadingStatus,data:filters,Component:HeroesListItem});
  
  return (
    <>
      {content}            
    </>
  );
};

export {HeroesList};