// eslint-disable-next-line
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IRootState } from '../store';


const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector;

export {useAppSelector};