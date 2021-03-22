import {useState} from "react";
import FormError from "./FormError";

function Register(){
 
    const [formData,setFormData] = useState(
        {
            displayName: '',
            email: '',
            passOne : '',
            passTwo : '',
            errorMsg : null
        }
        );
   
    const updateValues = ({target : {name, value}}) => {
        setFormData({...formData, [name]: value});
        if(formData.passOne !== formData.passTwo){
            formData.errorMsg = "Passwords do not match";
        }
    };
        
return(
    <form className="mt-3">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="font-weight-light mb-3">Register</h3>
              <div className="form-row">
                  {formData.errorMsg != null ? (
                    <FormError
                       theMessage={this.state.errorMessage}
                     />
                  ) : null}
                <section className="col-sm-12 form-group">
                  <label
                    className="form-control-label sr-only"
                    htmlFor="displayName"
                  >
                    Display Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="displayName"
                    placeholder="Display Name"
                    name="displayName"
                    required
                    value={formData.displayName}
                    onChange={updateValues}
                  />
                </section>
              </div>
              <section className="form-group">
                <label
                  className="form-control-label sr-only"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  name="email"
                  value={formData.email}
                  onChange={updateValues}
                />
              </section>
              <div className="form-row">
                <section className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="passOne"
                    placeholder="Password"
                    value={formData.passOne}
                    onChange={updateValues}
                  />
                </section>
                <section className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    type="password"
                    required
                    name="passTwo"
                    placeholder="Repeat Password"
                    value={formData.passTwo}
                    onChange={updateValues}
                  />
                </section>
              </div>
              <div className="form-group text-right mb-0">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
 )
}

export default Register;