
function FormError({ theMessage }){

    console.log("Hi");
    return (
        <div className="col-12 alert alert-danger px-3">
          {theMessage}
        </div>
      );
}

export default FormError;