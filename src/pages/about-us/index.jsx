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
            Hi!
            <br/>
            This website is a bit of a side project for the owner. It's a one-man show, with some help from developer friends.
            <br/>
            Nonetheless, this website aims to provide high quality apparel with a high moral mission. That's why 50% of all profits are donated to curated charities. You can find more information about this on the <a href="about-us/transparency">transparency page</a>.
            <br/>
            There's no warehouse and no inventory behind this operation. Well there is, but not under TS2M LLC's ownership. We use dropshippers who print, package, and ship the products sold on this website to the customer's door.
            <br/>
            This company is solely focused on delivering the software that provides the service that delivers you awesome products. A lot of the time, especially with user submitted designs, it's difficult to know how a product will turn out without ordering samples. With that being said, we'll be sure to follow all of our dropshippers' guidelines to ensure the best products are delivered to our customers. You can find more information from our dropshippers directly at <a href="https://printful.com">Printful.com</a>.
            <br/>
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default AboutUs;
