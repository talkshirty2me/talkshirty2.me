/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Text } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';

function Transparency() {
  return (
    <>
      <Helmet title="talkshirty2me | About Us - Transparency" defer={false} />
      <Flex mt={6} px={[3, null, 4]} sx={{ justifyContent: 'center' }}>
        <Box>
          <Text>
            <h2>Transparency!</h2>
            It's a pretty great thing.
            <br/><br/>
            Here's what we're transparent about:
            <ol>
              <li>How much we give to charities</li>
              <li>Which charities we give to</li>
              <li>When we give to charities</li>
            </ol>
            <h2>Look at this graph</h2>
            <h3><em>rolling graph of half profit, from api</em></h3>
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Transparency;
