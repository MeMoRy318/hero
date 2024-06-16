import { IElements, IHero } from '../interfaces';

import { IRes, axiosService } from './axiosService';


const heroService = {
  hero:{
    getById:(id: string | number):IRes<IHero> => axiosService.get(`/heroes/${id}`),
    getAll:():IRes<IHero[]> => axiosService.get('/heroes'),
    create:(data:IHero):IRes<IHero> => axiosService.post('/heroes',data),
    delete:(id: string | number) => axiosService.delete(`/heroes/${id}`),
  },
  element:{
    getAll:():IRes<IElements[]> => axiosService.get('/filters')
  }
};

export { heroService };