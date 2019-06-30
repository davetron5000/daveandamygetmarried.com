import React from "react";
import Layout from "../../components/Layout";

export default function(props) {
  return(
    <Layout title="Photo Gallery">
      <h4>Official Shots</h4>
      <embed style={{marginLeft: "12px"}} type="application/x-shockwave-flash" src="https://picasaweb.google.com/s/c/bin/slideshow.swf" width="500" height="375" flashvars="host=picasaweb.google.com&hl=en_US&feat=flashalbum&RGB=0x000000&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Famymaura%2Falbumid%2F5635328413460206433%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>
      <p>
      <small><a href="https://picasaweb.google.com/amymaura/WeddingPhotos?feat=email#">Direct Link to Slideshow&hellip;</a></small>
      </p>
      <h4>From the Ceremony by our Guests</h4>
      <p>
      We created a <a href="http://www.flickr.com/groups/daveandamygotmarried">Flickr Group</a> where we can share all of our photos.  Check it out and contribute anything you've got from the trip!
      </p>
      <h4>From our adventures so far&hellip;</h4>
      <embed style={{ marginLeft: "12px"}} type="application/x-shockwave-flash" src="http://picasaweb.google.com/s/c/bin/slideshow.swf" width="500" height="375" flashvars="host=picasaweb.google.com&hl=en_US&feat=flashalbum&RGB=0x000000&feed=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Famymaura%2Falbumid%2F5555084659502795617%3Falt%3Drss%26kind%3Dphoto%26authkey%3DGv1sRgCOaN_4_enLue8wE%26feat%3Den_US" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>

      <p>
      <small><a href="http://picasaweb.google.com/amymaura/DaveAndAmy?authkey=Gv1sRgCOaN_4_enLue8wE&feat=directlink">Direct Link to Slideshow&hellip;</a></small>
      </p>
    </Layout>
  )
};
