import {FC,PropsWithChildren} from 'react';

import { HeroesList,HeroesAddForm, HeroesFilters } from '../index';

import './app.scss';


type IProps = PropsWithChildren;

const App:FC<IProps> = () => {
  return (
    <main className="app">
      <div className="content">
        <HeroesList/>
        <div className="content__interactive">
          <HeroesAddForm/>
          <HeroesFilters/>
        </div>
      </div>
    </main>
  );
};

export {App};