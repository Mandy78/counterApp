import "./Button.css";

const Button = (props) => {
  return (<div className="btn">

    <button className="button" onClick={props.callback}>{props.btnName}
    </button>

  </div>
  );


}

export default Button;