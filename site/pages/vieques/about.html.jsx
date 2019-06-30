import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="About Vieques">
      <p>
      <a href="http://en.wikipedia.org/wiki/Vieques" target="_new">Vieques</a> is an island off the east coast of <a href="<%= vieques_pr_url %>">Puerto Rico</a>. It is fairly small (21 miles long by 4 miles wide) and less developed than Puerto Rico (no stop lights). From World War II until 2003, most of the island was owned by the US Navy and was used for military exercises (i.e. bombing things).
      </p>
      <p>
      <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=&amp;sll=18.117466,-65.45105&amp;sspn=0.140309,0.255947&amp;ie=UTF8&amp;ll=18.126439,-65.438862&amp;spn=0.140302,0.255947&amp;z=11&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=&amp;sll=18.117466,-65.45105&amp;sspn=0.140309,0.255947&amp;ie=UTF8&amp;ll=18.126439,-65.438862&amp;spn=0.140302,0.255947&amp;z=13">View Larger Map</a></small>
      </p>
      <h4>Once you're there</h4>
      <p>
      <ul id="hints">
        <li>We’ll include two maps in your welcome bag.  The less colorful map is the “real” Vieques Map.  It’s the only map of the island that is accurate.  Take it everywhere with you in case you take a wrong turn and get lost.  The other map is cute and colorful but has proven to be a nightmare for navigational purposes.  All of the locations for events on our agenda are shown on the maps or directions are provided at the end of this document.</li>
        <li>Drive carefully on the island – especially at night!  There are wild horses, cows, iguanas, roosters and mongoose all over the roads (as if you didn’t notice on the way to where you’re staying).  Keep this in mind before you get behind the wheel if you’ve been drinking.  And wear your seatbelt at all times – there’s a hefty fine and they do enforce it!</li>
        <li>We’ve included a copy of Vieques Events in your welcome packets.  Vieques Events is the monthly newsletter for the island.  It has all kinds of useful phone numbers and information in it.  </li>
        <li>Wear sunblock and drink a lot of water while you’re here.  We’re much closer to the equator than you’re probably used to, and you’ll burn much more quickly here than at any of the beaches in the United States.  So please wear lots of sunscreen and drink lots of water to stay hydrated.</li>
        <li>Vieques is a small, quiet island.  It doesn’t even have a stoplight.  Sometimes that means tourists forget to use common sense about their general safety like they would at home.  Unfortunately, the island isn’t quite perfect.  Occasionally, there are instances of petty thievery that can ruin your whole vacation if you don’t take the regular precautions you would take when vacationing in any other city.  As long as you lock the door to your house or hotel room, don’t carry large amounts of cash, and are aware of your surroundings, you shouldn’t have any problems.</li>
        <li>Do not leave anything (even things that aren’t valuable) in your rental car when you park it at the beaches.  Leave your rental car unlocked.  At many of the beaches, you can’t see your car from the beach.  If somebody wants to rifle through your car, let them.  They won’t steal it – there’s nowhere to go!  But they will break a window to see what’s in a duffle bag left on the back seat.  And the rental car company will bill you for the damage.  </li>
        <li>There have occasionally been incidences of “banditos” on horseback stealing beach bags and electronics off towels on the beach while tourists were in the water or away on a beach walk.  Don’t take large amounts of cash to the beach with you.  Don’t bring credit cards to the beach.  Please don’t leave anything of value unattended on the beach if you’re in an isolated area.</li>
        <li>Don’t pick up hitchhikers – unless you know them. ☺  And don’t hitchhike!</li>
        <li>Weddings in Vieques, the company that planned our big day, has asked us to tell you that they have a zero tolerance policy for illegal drugs at any wedding events.  Please don’t bring anything to any of our wedding-related events that you wouldn’t bring to your grandmother’s house.  If anyone gets caught violating the policy, the wedding planners will shut down our event (even if it’s our wedding reception).  Please respect the importance of our big day.</li>
        <li>If you have any problems while you’re here, you can call our wedding planner Sandy Malone for assistance.  Her cell phone number is (202) 486-7575.  Her husband Bill’s cell phone is (787) 455-6222.  Either one of them can help you if you need assistance.</li>
      </ul>
      </p>
    </Layout>
  )
};
