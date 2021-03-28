import firebase from './Firebase';
import FormError from './FormError';
import { navigate } from '@reach/router';
import {useEffect, useState} from "react";

function Login(props){
   // const user = props.user;

       const [formData,setFormData] = useState(
        {
            email: '',
            password : '',
            errorMsg : null
        }
        );
   
    useEffect(() => {
        if(formData.email || formData.password){
            formData.errorMsg = "Invalid Form Data";
            
        }else{
            formData.errorMsg = null;
        }
    }, [formData] );

    const handleChange = ({target : {name, value}}) => {
        setFormData({...formData, [name]: value});

    };

    const handleSubmit = (e) => {
      console.log("submitting")
        var registrationInfo = {
            email : formData.email,
            password : formData.password
        }
        firebase.auth().signInWithEmailAndPassword(
            registrationInfo.email,
            registrationInfo.password
        ).catch(error => {
            if(error.message != null){
                console.log(error);
                setFormData({...formData, 'errorMsg': error.message})
            }else{
                setFormData({...formData, 'errorMsg': null})
            }
        }).then(() => {
            navigate("/meetings");
        })

        e.preventDefault();
    }

   return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Log in</h3>
                <section className="form-group">
                  {formData.errorMessage !== null ? (
                    <FormError
                      theMessage={formData.errorMsg}
                    />
                  ) : null}
                  <label
                    className="form-control-label sr-only"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    required
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </section>
                <section className="form-group">
                  <input
                    required
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </section>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;