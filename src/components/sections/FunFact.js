import { Fragment } from "react";
const FunFact = () => {
  return (
    <Fragment>
      <div className="content fuct">
        {/* title */}
        <div className="title">Fun Fact</div>
        {/* content */}
        <div className="row fuct-items">
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-music" />
              </div>
              <div className="name">80 Albumes Listened</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-trophy" />
              </div>
              <div className="name">15 Awards Won</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-coffee" />
              </div>
              <div className="name">1 000 Cups of coffee</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-flag" />
              </div>
              <div className="name">10 Countries Visited</div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default FunFact;

export const FunFactWriter = () => {
  return (
    <div className="content fuct">
      {/* title */}
      <div className="title">
        <div className="first-letter">Fun Facts </div>
      </div>
      {/* content */}
      <div className="row fuct-items">
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-paw" />
            </div>
            <div className="name">Dog lover</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-heartbeat" />
            </div>
            <div className="name">Yoga lover</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-pencil" />
            </div>
            <div className="name">Art lover</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-book" />
            </div>
            <div className="name">Book lover</div>
          </div>
        </div>
        <div className="clear" />
      </div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-item">
            <div className="text">
              <div>
                Always be learning. Humans are constant works in progress that need to receive feedback in order to grow. I am always looking at ways to challenge and improve myself, which is why in my spare time I like to participate in hackathons, read blogs, dabble in new projects and attend meetups.
              </div>
            </div>
            <div className="user">

              <div className="info">
                <div className="name">Halyna Podyman</div>
                <div className="company">UX Designer</div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export const FunFactClassic = () => {
  return (
    <div className="content fuct">
      {/* title */}
      <div className="title">Fun Fact</div>
      {/* content */}
      <div className="row fuct-items">
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="ion ion-disc" />
            </div>
            <div className="name">80 Albumes Listened</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="ion ion-trophy" />
            </div>
            <div className="name">15 Awards Won</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="ion ion-coffee" />
            </div>
            <div className="name">1 000 Cups of coffee</div>
          </div>
        </div>
        {/* fuct item */}
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="ion ion-flag" />
            </div>
            <div className="name">10 Countries Visited</div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
