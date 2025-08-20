import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <img
        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/04_12/gate_models_og_01.jpg"
        alt=""
        className="w-100 small-banner"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Contact us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis quam excepturi
              minima quas saepe, reiciendis neque sint dolores dolor repudiandae a ratione
              quibusdam, facere debitis rerum labore ab odio.
            </p>

            <form>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
