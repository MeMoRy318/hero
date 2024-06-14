import {useDispatch} from 'react-redux'; 
import {bindActionCreators} from 'redux';

import * as actions from '../actions';


const useAppActionts = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions,dispatch);
};

export {useAppActionts};