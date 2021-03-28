function Welcome(props){
    const {userName} = props;
    return (
        <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName}
        </span>
        ,
        <a href="/" className="font-weight-bold text-primary pl-1">
          log out
        </a>
      </div>
    );
}

export default Welcome;