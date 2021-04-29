import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  ); // if props.type is undefined
};

export default Button;
