const Login = () => {

  return <div style={{ width: "50%", margin: "auto", padding: "100px", border: "1px solid black", marginTop: "20px", backgroundColor: "skyblue" }}>
    <form className="row g-3">
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-12">
        <label for="inputAddress2" className="form-label">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">State</label>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">Sign in</button>
      </div>
    </form>
  </div>
}
export default Login