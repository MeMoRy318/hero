import { FC, PropsWithChildren } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useAppActionts } from '../../hooks';
import { IHero } from '../../interfaces';
import { heroService } from '../../services';
import { setClassNameByElements } from '../../utility';

import './heroesListItem.scss';


interface IProps extends PropsWithChildren {
    data: IHero[];
}

const HeroesListItem: FC<IProps> = ({ data }) => {
  const { heroDelete } = useAppActionts();

  const onClick = async (id: string | number) => {
    try {
      await heroService.hero.delete(id);
      heroDelete(id);
    } catch {
      console.log('Щось пішло не так');
    }
  };

  const elements = data.map(({ id, description, element, name }) => (
    <CSSTransition key={id} timeout={500} classNames="hero">
      <li
        className={`card flex-row mb-4 shadow-lg text-white ${setClassNameByElements(element)}`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
          className="img-fluid w-25 d-inline"
          alt="unknown hero"
          style={{ objectFit: 'cover' }}
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </div>
        <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
          <button
            type="button"
            className="btn-close btn-close"
            aria-label="Close"
            onClick={() => onClick(id)}
          ></button>
        </span>
      </li>
    </CSSTransition>
  ));
  
  return (
    <TransitionGroup component="ul">
      {elements}
    </TransitionGroup>
  );
};

export { HeroesListItem };
