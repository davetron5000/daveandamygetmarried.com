import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="What to do in Vieques">
      <p>
      There's a lot of fun stuff to do on Vieques, and our <a target="_new" href="<%= travel_guide_url %>">travel guide</a> should have some good pointers on where to get started with:
      <ul>
      <li>Amazing beaches</li>
      <li>Bioluminescent Bay</li>
      <li>Birding</li>
      <li>Snorkeling</li>
      <li>Hourseback tours</li>
      <li>Kayaking</li>
      </ul>
      </p>
      <h4>Bio-Bay</h4>
      <p>
      <img src="http://www.abessnorkeling.com/images/photos/biobay_tato.jpg" style={{ float: "left", margin: "8px" }} width='150'/>
      As mentioned in our <a href="<%= wedding_expect_url %>">schedule of events</a>, on Friday, after the beach party, guests are encouraged to visit the <a target="_new" href="http://www.tripadvisor.com/Attraction_Review-g147326-d147796-Reviews-Bioluminescent_Mosquito_Bay-Isla_de_Vieques_Puerto_Rico.html">Bioluminescent Bay</a>.  This is a "must-see".  Amy and I went to one on the mainland of Puerto Rico and it was <strong>amazing</strong>; the one in Vieques is supposed to be <strong>far</strong> better.  To get a sense of what we mean, check out some <a target="_new" href="http://www.google.com/images?q=vieques+bioluminescent+bay&um=1&ie=UTF-8&source=univ&ei=3ZUYTa_MN4SclgfDk6yHDA&sa=X&oi=image_result_group&ct=title&resnum=1&ved=0CCIQsAQwAA&biw=1833&bih=982">pictures</a>&hellip;those are not Photoshopped!
      </p>
      <h5>Reserving your Trip</h5>
      <p>
      If you haven’t already made a reservation, call today! Tours book up quickly and this is something you should not miss!  Here's some places where you can book your tour:
      </p>
      <ul>
        <li>Island Adventures (big electric boat tours) &mdash;	787-741-0720</li>
        <li>Blue Caribe (kayak tours) &mdash; 787-741-2522</li>
        <li>Abe’s Snorkeling &amp; Bio-Bay Tours (kayak tours) &mdash; 787-741-2134</li>
      </ul>
      <p><i>
      Mention Weddings in Vieques to Blue Caribe or Abe’s Snorkeling to get a discounted rate of $25/person
      </i>
      </p>
      <h4>Other Activities</h4>
      <p>
      Vieques offers a variety of outdoor activities.  Here’s a quick list of our recommendations of things to do during our wedding weekend:
      </p>
      <p>
      <table>
        <thead>
          <tr>
            <th>Recommendation</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="www.funbrothers-vieques.com">Fun Brothers Jet Ski, Banana Boats, Kayaks &amp; More</a>
              </td><td>787-435-9372</td>
          </tr>
          <tr>
            <td>
              <a href="www.bluecaribekayak.com">Blue Caribe Kayak</a>
              </td><td>787-741-2522</td>
          </tr>
          <tr>
            <td>
              <a href="www.abessnorkeling.com">Abe’s Snorkeling</a>
              </td><td>787-741-2134</td>
          </tr>
          <tr>
            <td>
              <a href="www.naturalvieques.com">Expediciones en Bieque (horseback riding and kayaks)</a>
              </td><td>787-435-0073</td>
          </tr>
          <tr>
            <td>
              <a href="www.viequesadventures.com">Vieques Adventure Company (fly fishing and biking)</a>
              </td><td>787-692-9162</td>
          </tr>
          <tr>
            <td>Caribbean Fly Fishing</td><td>787-450-3744</td>
          </tr>
          <tr>
            <td>
              <a href="www.viequessportfishing.com">Vieques Sport Fishing</a>
              </td><td>787-502-3839</td>
          </tr>
          <tr>
            <td>Vieques Massage by Ingrid Bergman</td><td>787-435-1313</td>
          </tr>
        </tbody>
      </table>
      </p>
    </Layout>

  )
};
