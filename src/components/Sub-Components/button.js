function Button(props) {
    return <button className="btn">{props.name}</button>;
  }
  Button.defaultProps = {
    type: "button",
    
};
  export default Button;