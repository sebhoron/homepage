import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="row-padding">
        <div class="column left">
          <h3>Contact</h3>
          <form id="" action="/action_page.php" target="_blank">
            <p>
              <input type="text" placeholder="Name" name="Name" required />
            </p>
            <p>
              <input type="text" placeholder="Email" name="Email" required />
            </p>
            <p>
              <input
                type="text"
                placeholder="Subject"
                name="Subject"
                required
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Message"
                name="Message"
                required
              />
            </p>
            <button type="submit" id="button-send">
              Send
            </button>
          </form>
        </div>
        <div class="column middle">
          <h3>About</h3>
          <p>
            <a href="/">About us</a>
          </p>
          <p>
            <a href="/">We're hiring</a>
          </p>
          <p>
            <a href="/">Support</a>
          </p>
          <p>
            <a href="/">Find store</a>
          </p>
          <p>
            <a href="/">Shipment</a>
          </p>
          <p>
            <a href="/">Payment</a>
          </p>
          <p>
            <a href="/">Gift card</a>
          </p>
          <p>
            <a href="/">Return</a>
          </p>
          <p>
            <a href="/">Help</a>
          </p>
        </div>
        <div class="column right">
          <h3>Store</h3>
          <p>
            <i class="fa fa-fw fa-map-marker"></i> Company Name
          </p>
          <p>
            <i class="fa fa-fw fa-phone"></i> 0044123123
          </p>
          <p>
            <i class="fa fa-fw fa-envelope"></i> ex@mail.com
          </p>
          <br />
          <h3>We accept</h3>
          <p>
            <i class="fa fa-fw fa-cc-amex"></i> Amex
          </p>
          <p>
            <i class="fa fa-fw fa-credit-card"></i> Credit Card
          </p>
          <br />
          <a href="/">
            <i class="fa fa-facebook-official"></i>
          </a>
          <a href="/">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa fa-snapchat"></i>
          </a>
          <a href="/">
            <i class="fa fa-pinterest-p"></i>
          </a>
          <a href="/">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
