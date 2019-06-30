import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="Getting around">
      <p>
        You will most likely need to rent a car, and you should do so as soon as you've made your <a href="/vieques/get_there.html">travel plans</a>.  The packet of travel information that you've hopefully received by now should have all the information you need to rent a car for our trip.  If you lost it, or didn't receive it, you can <a href="/pdf/travel_guide.psf">download a PDF</a> or <a href="/us/contact.html">contact us</a> for a copy.
      </p>
      <h4>Rental Car Agencies</h4>
      <p>
        Here is a list of rental car agencies on vieques.  <em>Please refer to our <a href="/pdf/travel_guide.pdg">travel guide</a> for the most complete information</em>
      </p>
      <p>
        <table>
          <thead>
            <tr>
              <th>Rental Agency</th><th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Acevedoʼs</td><td> 787-741-4380</td></tr>
            <tr><td>B&amp;E Car Rental   </td><td> 787-435-6488 or 787-435-6020</td></tr>
            <tr><td>Coqui Car Rental </td><td> 787-741-3696</td></tr>
            <tr><td>Maritzaʼs</td><td> 787-741-0078</td></tr>
            <tr><td>Marcoʼs</td><td> 787-741-1388</td></tr>
            <tr><td>Martineau Bay</td><td> 787-741-0087</td></tr>
            <tr><td>Island Car Rental </td><td> 787-741-1666</td></tr>
            <tr><td>Vieques Car Rental</td><td> 787-741-1037</td></tr>
          </tbody>
        </table>
      </p>
    </Layout>
  )
};
