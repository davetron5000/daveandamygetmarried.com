import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  const faqs = [
    {
      q: "I got my invitation in the mail and would love to know more details about the food options. Can you tell me what else I get to eat?",
      a: "We're excited about the food options too! Here are more details about the entree options: <ul> <li>Roasted chicken quarters w/ mango glaze, polenta chili cakes</li> <li>Dorado al ajillo (mahi-mahi in garlic sauce) w/ yucca</li> <li>Filet mignon w/ chimichurri demiglaze, tomato relish, potato cheddar pancakes</li> <li>Tofu &amp; asparagus tart, whole wheat crust, roast pepper sauce <i>(vegetarian)</i></li> </ul>"
    },
    {
      q: "So, there were Save-the-Date fish, fish stamps, and fish on the invitation. What's up with the fish?",
      a: "When we visited the island of Culebra in Puerto Rico for the first time, we went snorkeling. There are some amazing snorkeling spots, and tons of fish. While snorkeling at <a target=\"_new\" href=\"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=culebra,+pr&sll=37.0625,-95.677068&sspn=58.946508,127.617188&ie=UTF8&hq=&hnear=Culebra,+Puerto+Rico&ll=18.322202,-65.325265&spn=0.008759,0.015578&t=h&z=17\">playa Carlos Rosario</a>, a small school of fish \"escorted\" us around the reef.  Dave took pictures of them, including the one we used for the Save-the-Date email. We decided it was a good representation of what we hope to have in a wedding: bright, cheery and fun. We also hope our guests will go snorkeling while in Vieques. :-)"
    },
    {
      q: "Do I need a passport?",
      a: "No.",
    },
    {
      q: "Are you sure I don't need a passport?",
      a: "Yep."
    },
    {
      q: "Where are you registered?",
      a: "We don't want any gifts; your presence is enough."
    },
    {
      q: "Seriously,where are you registered?",
      a: "We are (technically) registered through the I Do Foundation. But honestly, your presence at our wedding is enough for us.  And we really mean that.<br/><br />But, if you feel like spending more money on our wedding; we have designated three charities that are important to us, and we would be honored if you <a href=\"http://www.idofoundation.org/cgi-bin/mvc.cgi?page=ourcharity.html&OccasionID=43432\">made a donation to any of these charities</a> as a gift to us."
    },
    {
      q: "But I really want to get you <strong>something</strong>&hellip;",
      a: "If you <strong>must</strong>, through the I Do Foundation, we were able to register at Cooking.com. All purchases made through our I Do Foundation links will generate donations to these three charities as well."
    },
    {
      q: "Where do I go to find it?",
      a: "Go <a target=\"_new\" href=\"http://www.idofoundation.org/43432\">to this link on the I Do Foundation's</a> website."
    },
    {
      q: "What if I just go to Cooking.com directly?",
      a: "Well, you can, but no donation will be made to our charities :("
    },
    {
      q: "I went through the I Do Foundation website and clicked on the link to Cooking.com. Now what?",
      a: "Once you arrive on either website, you will still have to find our registry. Once on Cooking.com, please scroll to the bottom of the page and in really small print where it says \"Website Information,\" you will see \"Wedding Registry.\" Click there and you will be able to find us."
    },
    {
      q: "Whose cat is on the reply card envelope stamps?",
      a: "That's Rudy! He's our cat. We'd like to say he'll be sad to miss the wedding, but he is pretty shy around people, so he'll likely be happily at home sleeping, and every so often wonder where his people are. But we still wanted to involve him in the wedding somehow."
    },
    {
      q: "He’s very photogenic!",
      a: "That isn’t a question but we agree."
    },
    {
      q: "What kind of a cat is Rudy, anyway?",
      a: "A very loud one.  We're confident that he, and other cats like him, will be official designated as \"rudycats,\" but we aren't holding our breath"
    }
  ].map( (faq) => {
    return (
      <React.Fragment key={ faq.q }>
        <dt><strong>Q:</strong>{ " " }{ faq.q }</dt>
        <dd className="faq-answer"><strong>A:</strong>{ " " }
          <span dangerouslySetInnerHTML={{__html: faq.a }} />
        </dd>
      </React.Fragment>
    );
  });
  return(
    <Layout title="Q &amp; A">
      <dl id="faq-list">{ faqs }</dl>
    </Layout>
  )
};
