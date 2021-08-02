/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Text } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';

function AboutUs() {
  return (
    <>
      <Helmet title="talkshirty2me | About Us" defer={false} />
      <Flex mt={6} px={[3, null, 4]} sx={{ justifyContent: 'center' }}>
        <Box>
          <Text>
            <h2>About Us</h2>
            Hi!
            <br/><br/>
            This website is a bit of a side project for the owner. It's a one-man show, with some help from other developer friends and minimal to no marketing, mostly meme marketing. It's not a passion project, but a fun one meant to spread some laughs and sell some shirts, but mostly hats.
            <br/><br/>
            So, be patient and provide feedback with us.
            <br/><br/>
            Nonetheless, this website aims to provide high quality apparel with a high moral mission. That's why 50% of all profits are donated to curated charities. You can find more information about this on the <a href="about-us/transparency/">transparency page</a>.
            <br/><br/>
            There's no warehouse and no inventory behind this operation. Well there is, but not under TS2M LLC's ownership.
            <br/><br/>
            We use dropshippers who print, package, and ship the products sold on this website to the customer's door. You can find more information from our dropshippers directly at <a href="https://printful.com">Printful.com</a>.
            <br/><br/>
            With that being said, a lot of designs are not test printed before added to the store. Especially user-submitted designs - those can almost guaranteed to be untested. Be weary of this, but know that all designs will be moderated in accordance with the dropshippers' printing policies and guidelines.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default AboutUs;
