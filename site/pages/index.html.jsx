import React from "react";
import Layout from "../components/Layout";

export default function(props) {
  return(
    <Layout title="Welcome!">
      <div className="header-image">
        <img src="http://farm4.static.flickr.com/3252/5797492485_515004207f_m.jpg" />
      </div>
      <p>
        Welcome to our website!
        Everything went off wonderfully, <a href="/wedding/how_went.html"> so check it out</a>!
      </p>

    </Layout>
  )
};
