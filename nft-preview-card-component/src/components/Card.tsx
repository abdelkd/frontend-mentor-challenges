import Avatar from '/images/image-avatar.png';
import Thumbnail from '/images/image-equilibrium.jpg';
import IconEther from '/images/icon-ethereum.svg';
import IconClock from '/images/icon-clock.svg';
import IconView from '/images/icon-view.svg';

const Card = () => {
  return (
    <section className='card'>
      <div className='card__image'>
        <div className='card__image--view-icon'>
          <img src={IconView} alt='A picture of a cube' />
        </div>
        <img
          className='card__image--thumbnail'
          src={Thumbnail}
          alt='A picture of a cube'
        />
      </div>

      <div className='card__text'>
        <h1 className='card__text--heading'>
          <a href=''>Equilibrium #3429</a>
        </h1>
        <p className='card__text--description'>
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      <div className='card__price'>
        <div className='card__price--price'>
          <img src={IconEther} alt='' />
          <span>0.041 eth</span>
        </div>
        <div className='card__price--time-left'>
          <img src={IconClock} alt='' />
          <span>3 days left</span>
        </div>
      </div>
      <div className='card__creator'>
        <img src={Avatar} alt='' />
        <p>
          Creation of <a>Jules Wyvern</a>
        </p>
      </div>
    </section>
  );
};

export default Card;
