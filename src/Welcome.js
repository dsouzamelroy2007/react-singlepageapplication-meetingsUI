import { Link } from "@reach/router";

function Welcome(props){
    const {userName} = props;
    return (
        <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName}
        </span>
        ,
        <Link to="/login" className="font-weight-bold text-primary pl-1" onClick = {e => props.logoutUser(e)}>
          log out
        </Link>
      </div>
    );
}

export default Welcome;