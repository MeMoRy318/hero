import { useEffect } from 'react';

import { useAppActionts, useAppSelector } from '../../hooks';
import { heroService } from '../../services';


const ElementList = () => {
  const {elementsFetched} = useAppActionts();
  const {elements} = useAppSelector(state => state.heroReducer);

  useEffect(()=>{
    heroService.element.getAll()
      .then(({data}) => elementsFetched(data));
  },[]);

  const renderElements = elements.map(value => <option value={value} key={value}>{value}</option>);
 
  return (
    <div className="mb-3">
      <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
      <select 
        required
        className="form-select" 
        id="element" 
        name="element"
        defaultValue="">
        <option value="" disabled>Выберите элемент...</option>
        {renderElements} 
      </select>
    </div>
  );
};

export {ElementList};