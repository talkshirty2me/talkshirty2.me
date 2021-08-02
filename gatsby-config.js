require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopify: {
          shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
          accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        },
        gatsbyStorefrontApi: {
          apiUrl: process.env.GATSBYSTOREFRONT_API_URL,
          accessToken: process.env.GATSBYSTOREFRONT_ACCESS_TOKEN,
        },
        useGatsbyStorefrontApi: false,
        basePath: '/',
        productImagesCarouselProps: {
          // See: https://github.com/express-labs/pure-react-carousel#carouselprovider-
          // naturalSlideWidth: 500,
          // naturalSlideHeight: 500,
        },
        product: {
          maxDescriptionSectionsNumber: 10,
        },
        manifest: {
          name: 'talkshirty2me',
          short_name: 'TS2M',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/favicon.png',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://talkshirty2.me',
    gatsbyStorefrontConfig: {
      storeName: 'talkshirty2me',
      logo: {
        url: '/talkshirty2me-logo.png',
        width: '40px',
        height: '40px'
      },
      storeDescription: 'clothes against humanity',
      email: 'hi@talkshirty2.me',
      company: 'ts2m llc',
      location: 'USA',
      address: '',
      phone: '',
      workingDays: '',
      workingHours: '',
      socialNetworks: [
        'https://instagram.com/talkshirty2me',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-70450292-13',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'section',
          children: [
            {
              name: 'Hats',
              type: 'collection',
              handle: 'hats',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Tops',
              type: 'collection',
              handle: 'tops',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Bottoms',
              type: 'collection',
              handle: 'bottoms',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Jackets',
              type: 'collection',
              handle: 'jackets',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Activewear',
              type: 'collection',
              handle: 'activewear',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Swimwear',
              type: 'collection',
              handle: 'swimwear',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Shwag',
              type: 'collection',
              handle: 'shwag',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Hats",
            type: 'collection',
            handle: 'hats',
            link: '/collection/hats',
          },
          {
            name: "Tops",
            type: 'collection',
            handle: 'tops',
            link: '/collection/tops',
          },
          {
            name: "Bottoms",
            type: 'collection',
            handle: 'bottoms',
            link: '/collection/bottoms',
          },
          {
            name: "Jackets",
            type: 'collection',
            handle: 'jackets',
            link: '/collection/jackets',
          },
          {
            name: "Activewear",
            type: 'collection',
            handle: 'activewear',
            link: '/collection/activewear',
          },
          {
            name: "Swimwear",
            type: 'collection',
            handle: 'swimwear',
            link: '/collection/swimwear',
          },
          {
            name: "Shwag",
            type: 'collection',
            handle: 'shwag',
            link: '/collection/shwag',
          },
          {
            name: "-",
            type: 'collection',
            handle: '',
            link: '',
          },
          {
            name: "About Us",
            type: 'collection',
            handle: 'about-us',
            link: '/about-us/',
          },
          {
            name: "Transparency",
            type: 'collection',
            handle: 'transparency',
            link: '/about-us/transparency',
          },
          {
            name: "Memes",
            type: 'collection',
            handle: 'memes',
            link: 'https://instagram.com/talkshirty2me',
          },
        ],
      }),
      footerLinks: [
        {
          name: 'About Us',
          link: '/about-us/',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy Policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
