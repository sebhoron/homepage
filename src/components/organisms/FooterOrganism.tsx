export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact</h3>
            <form action="/action_page.php" target="_blank">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h3>About</h3>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're hiring</a>
            </p>
            {/* ... Other About links */}
          </div>
          <div className="col-md-4">
            <h3>Store</h3>
            <p>
              <i className="fa fa-fw fa-map-marker"></i> Company Name
            </p>
            {/* ... Other Store information */}
          </div>
        </div>
        {/* Social media icons */}
        <div className="row mt-4">
          <div className="col">
            <a href="/">
              <i className="fa fa-facebook-official"></i>
            </a>
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
            {/* ... Other social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};
