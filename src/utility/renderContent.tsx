import React, { FC } from 'react';

import { Spinner } from '../components';
import { EStatus } from '../hooks';



interface RenderContentProps<T, P> {
  status: EStatus;
  data: T | null;
  Component: FC<P>;
  componentProps?: Omit<P, 'data'>; 
}

function renderContent<T, P extends { data: T }>
({ 
  status,
  data,
  Component,
  componentProps,
}: RenderContentProps<T, P>) {
  switch (status) {
  case EStatus.LOADING:
    return <Spinner/>;
  case EStatus.ERROR:
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  case EStatus.SACCESS:
    return data ? <Component {...componentProps as P} data={data} /> : <h5 className="text-center mt-5">Героев пока нет</h5>;
  default:
    return null;
  }
}

export { renderContent };