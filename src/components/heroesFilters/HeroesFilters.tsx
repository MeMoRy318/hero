import { FC, PropsWithChildren } from 'react';

import { useAppActionts, useAppSelector } from '../../hooks';
import { IElements } from '../../interfaces';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

type IProps = PropsWithChildren;

const HeroesFilters: FC<IProps> = () => {
  const { heroFilter } = useAppActionts();
  const { filterParams } = useAppSelector(state => state.heroReducer);

  const setClassNameByElement = (element: IElements | 'all'): string => 
    element === filterParams ? 'active' : ''; 

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button 
            onClick={() => heroFilter('all')}
            className={`btn btn-outline-dark ${setClassNameByElement('all')}`}>
              Все
          </button>
          <button 
            onClick={() => heroFilter('fire')} 
            className={`btn btn-danger ${setClassNameByElement('fire')}`}>
              Огонь
          </button>
          <button 
            onClick={() => heroFilter('water')} 
            className={`btn btn-primary ${setClassNameByElement('water')}`}>
              Вода
          </button>
          <button 
            onClick={() => heroFilter('wind')} 
            className={`btn btn-success ${setClassNameByElement('wind')}`}>
              Ветер
          </button>
          <button 
            onClick={() => heroFilter('earth')} 
            className={`btn btn-secondary ${setClassNameByElement('earth')}`}>
              Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export { HeroesFilters };
