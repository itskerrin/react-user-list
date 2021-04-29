import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // will return the content between the Card component tags
};

export default Card;
