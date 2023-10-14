import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I'm Halyna Podyman .</strong>
A proactive and solution-oriented graduate in Computer Science, holding an upper second-class honours degree from London South Bank University. With a year of experience as a Junior Front End Developer, I have proficiently constructed websites following web standards, ensuring cross-browser compatibility, responsive design, and clean code practices. My passion lies in enhancing the usability of various interfaces and elevating user experience to new heights. I am now eager to expand my skills and knowledge in the field of UX design.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 29
                </li>
                <li>
                  <strong>Residence . . . . .</strong> UK
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> London, UK
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">About Me</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
              I am Ryan Adlard, web designer from USA, California. I have rich
              experience in web site design and building and customization, also
              I am good at wordpress. I love to talk with you about our unique.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 24
              </li>
              <li>
                <strong>Residence . . . . .</strong> USA
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
              <li>
                <strong>Address . . . . .</strong> California, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
