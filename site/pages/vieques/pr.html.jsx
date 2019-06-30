import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="About Puerto Rico">
      <p>
        <a target="_new" href="http://en.wikipedia.org/wiki/Puerto_Rico">Puerto Rico</a> is a territory of the US, located in the Caribbean Ocean. From a practical perspective, this means that you <strong>do not need a passport</strong> to get there. Most Puerto Ricans are bilingual in Spanish and English, so communication should not be difficult either.
      </p>
      <p>
        <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/?ie=UTF8&amp;ll=18.234569,-66.417847&amp;spn=2.243318,4.095154&amp;z=8&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/?ie=UTF8&amp;ll=18.234569,-66.417847&amp;spn=2.243318,4.095154&amp;z=9&amp;source=embed">View Larger Map</a></small>
      </p>
    </Layout>
  )
};
