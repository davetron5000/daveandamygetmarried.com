import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="Schedule of Events">
      <p>
        We've got lots of fun things planned so you enjoy your stay in Vieques!
      </p>
      <h4>Thursday, June 2nd, 2011</h4>
      <p>
      <ul className="events">
        <li><strong>8-10pm</strong> - Welcome Party @ <a href="http://www.lazyjacksvieques.com/index.html">Lazy Jack’s</a> on the Malecon in Esperanza</li>
      </ul>
      </p>
      <h4>Friday, June 3rd, 2011</h4>
      <p>
      <ul className="events">
        <li><strong>2-5pm</strong> - Beach Party at Sun Bay, hosted by the Copelands (*)</li>
        <li><strong>Evening</strong> - Tours of the famous <a href="<%= vieques_do_url %>">Bioluminescent Bay (book now!)</a></li>
      </ul>
      </p>
      <p className="note"><i>
      (*) Sun Bay is on the Vieques Map you'll receive in your welcome bag once you arrive &mdash; there is a $2/car fee for entry to the beach area &mdash; go in and drive up to the water and take a left.  You’ll see us on your right as you proceed down the beach.</i>
      </p>
      <h4>Saturday, June 4th, 2011</h4>
      <p>
      <ul className="events">
        <li><strong>5pm</strong> - Wedding Ceremony &amp; Reception at Martineau Belle Playa</li>
      </ul>
      </p>
      <h5>Directions</h5>
      <p>
      <ol id="directions">
        <li>Locate the W Hotel on the Vieques map (on Rt. 200 on the North side of the island).  </li>
        <li>Go into the front entrance of the W and go through the security gate. </li>
        <li>Tell the guard that you are going to Villa #8 (also known as Martineau Belle Playa).</li>
        <li>Proceed through the gate and take the first right turn.</li>
        <li>Go up over the hill and you will see a row of houses on your left.  </li>
        <li>Martineau Belle Playa is the last </li>
      </ol>
      </p>
    </Layout>
 )
};
