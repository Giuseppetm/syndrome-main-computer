import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.To}>
            <span className="button">{props.Title}</span>
        </Link>
    )
};

export default Button;