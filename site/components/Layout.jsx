import React from "react";
import PropTypes from "prop-types";
import SiteIcons from "../components/SiteIcons";
import SocialMediaCardMetadata from "../components/SocialMediaCardMetadata";

export default class Layout extends React.Component {
  render() {
    return(
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="copyright" href="«link to your copyright statement»" />

    <title>Dave and Amy Get Married!</title>

    <SocialMediaCardMetadata
      description="Website of Dave Copeland and Amy Pearson's Wedding"
      author="David Copeland"
      twitter_handle="davetron5000"
      title="Dave and Amy Get Married"
      url="https://daveandamygetmarried.com"
    />
    <SiteIcons />
  </head>
  <body className="bp">
    <div className="mainpage">
      <div id="header">
        <h1 id="title"><a href="/">Dave and Amy Get Married!</a></h1>
        <h2>June 4th, 2011 - Vieques, Puerto Rico</h2>
      </div>
      <div id="main-content">
        <div id="nav">
          <ul>
            <li className="navtitle">
            The Wedding
            <ul>
              <li><a href="/wedding/how_went.html">How it went!</a></li>
              <li><a href="/wedding/vieques.html">Why Vieques?</a></li>
              <li><a href="/wedding/when.html">When &amp; Where?</a></li>
              <li><a href="/wedding/wear.html">What to Wear</a></li>
              <li><a href="/wedding/expect.html">Schedule of Events</a></li>
              <li><a href="/wedding/faq.html">Q&amp;A</a></li>
            </ul>
            </li>
            <li className="navtitle">Us
            <ul>
              <li><a href="/us/who.html">Who we are</a></li>
              <li><a href="/us/met.html">How we met</a></li>
              <li><a href="/us/engagement_amy.html">Engagement (according to Amy)</a></li>
              <li><a href="/us/engagement_dave.html">Engagement (according to Dave)</a></li>
              <li><a href="/us/pictures.html">Photo Gallery</a></li>
              <li><a href="/us/contact.html">Contact</a></li>
            </ul>
            </li>
            <li className="navtitle">Vieques
            <ul>
              <li><a href="/vieques/about.html">About Vieques</a></li>
              <li><a href="/vieques/pr.html">About Puerto Rico</a></li>
              <li><a href="/vieques/get_there.html">Getting There</a></li>
              <li><a href="/vieques/get_around.html">Getting Around</a></li>
              <li><a href="/vieques/stay.html">Where to Stay</a></li>
              <li><a href="/vieques/do.html">What to Do</a></li>
            </ul>
            </li>
          </ul>
        </div>
        <div id="content">
          <h3> { this.props.title } </h3>
          <h4> { this.props.subtitle } </h4>
          <div id="text-content">
            { this.props.children }
          </div>
        </div>
      </div>
      <div id="footer">
      </div>
    </div>
  </body>
</html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
