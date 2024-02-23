import React from "react";
import user2 from "./Images/footer.png";
import Imagesjson from "./Images/Logo.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <table className="footer-table">
        <div className="footer-img">
                <img src={user2} alt="User 2" />
              </div>
          <tbody>
            <tr>
            
              <td className="footer-container">
                <div className="footer-header">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={Imagesjson} alt="Instagram" />
                      </a>
                    </li>
                  </ul>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy collaborative thinking to further the overall
                    value proposition.
                  </p>
                  <div className="clock">
                    <i className="fa-regular fa-envelope"></i>
                    <div className="condent-text"></div>
                    <h6> Email contact@logistics.com</h6>
                  </div>
                  <div className="clock">
                    <i className="fa-solid fa-phone"></i>
                    <div className="condent-text"></div>
                    <h6> Call Us (00) 112 365 489</h6>
                  </div>
                </div>
              
              <td className="pages">
                <h3>Pages</h3>
                <p>About Us</p>
                <p>Our Team</p>
                <p>Project</p>
                <p>Project</p>
                <p>Contact</p>
              </td>
              <td className="Utility">
                <h3>Utility</h3>
                <p>Style Guide</p>
                <p>Changelog</p>
                <p>Licenses</p>
                <p>Protected</p>
                <p>Not Found</p>
              </td>
              <td className="Subscribe">
                <h3>Subscribe</h3>
                <div className="search">
                  <input type="search" placeholder="Email here" />
                </div>
                <div className="socialmedia">
                  <button className="footer-btn">Explore More</button>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </td>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Footer;
