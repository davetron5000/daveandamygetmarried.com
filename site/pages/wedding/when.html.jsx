import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="&#191;When &amp; Where?">
      <p>
        We're getting married <strong>Saturday, June 4th, 2011</strong> at the Martineau Belle Playa, in Vieques, Puerto Rico.  Note that there will be <a href="<%= wedding_expect_url %>">a welcome party and a beach party</a>, and that the island has <a href="<%= vieques_do_url %>">lots of other things to do</a>.
      </p>
      <p>
        <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/?ie=UTF8&amp;ll=18.143379,-65.467547&amp;spn=0.002304,0.003999&amp;t=h&amp;z=19&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/?ie=UTF8&amp;ll=18.143379,-65.467347&amp;spn=0.002304,0.003999&amp;t=h&amp;z=19&amp;source=embed">View Larger Map</a></small>
      </p>
      <p>
        Hopefully, you received our travel information in the mail, but please try to arrive in Vieques (or San Juan, at least) on <strong>Thursday, June, 2nd.</strong>
      </p>
    </Layout>
  )
};
