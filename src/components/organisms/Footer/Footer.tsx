import "./footer.css";

export function Footer() {
  return (
    <footer className="contact-form">
      <form action="">
        <div className="form-group">
          <input type="text" name="text" placeholder="Username" id="" />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" id="" />
        </div>
        <div className="form-group">
          <input type="number" name="telephone" placeholder="telephone" id="" />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="message"
            id=""
            cols={30}
            rows={10}
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </footer>
  );
}
