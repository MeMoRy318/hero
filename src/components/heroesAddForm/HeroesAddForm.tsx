import { FC,FormEvent,PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppActionts } from '../../hooks';
import { IHero } from '../../interfaces';
import { heroService } from '../../services';
import { ElementList } from '../index';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

type IProps = PropsWithChildren;

const HeroesAddForm:FC<IProps> = () => {
  
  const {heroCreate} = useAppActionts();


  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const {data:newHero} = await heroService.hero.create({...data,id:uuidv4()} as IHero);
    heroCreate(newHero);
    form.reset();
  };

  return (
    <form 
      className="border p-4 shadow-lg rounded"
      onSubmit={onSubmit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
        <input 
          required
          type="text" 
          name="name" 
          className="form-control" 
          id="name" 
          placeholder="Как меня зовут?"/>
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">Описание</label>
        <textarea
          required
          name="description" 
          className="form-control" 
          id="text" 
          placeholder="Что я умею?"
          style={{'height': '130px'}}/>
      </div>
      <ElementList/>
      <button type="submit" className="btn btn-primary">Создать</button>
    </form>
  );
};

export {HeroesAddForm};