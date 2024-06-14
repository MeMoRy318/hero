import { IElements } from '../interfaces';


const setClassNameByElements = (elementName:IElements):string => {
  switch (elementName) {
  case 'fire':
    return 'bg-danger bg-gradient';
  case 'water':
    return 'bg-primary bg-gradient';
  case 'wind':
    return 'bg-success bg-gradient';
  case 'earth':
    return 'bg-secondary bg-gradient';
  default:
    return 'bg-warning bg-gradient';
  }
}; 

export {setClassNameByElements};