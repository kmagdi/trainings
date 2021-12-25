export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Rólunk</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Miért válassz minket?</h3>
              <div className="list-style">
                <div className="row">
                   <div className="col">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
