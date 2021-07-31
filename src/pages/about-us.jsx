/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Text } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';

function AboutUs() {
  return (
    <>
      <Helmet title="Not found" defer={false} />
      <Flex mt={6} px={[3, null, 4]} sx={{ justifyContent: 'center' }}>
        <Box>
          <Text>
            About Us!
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default AboutUs;
