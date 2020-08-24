/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ryosuke`,
    description: `Designer, Developer`,

    // For JSON-LD
    name: "Ryosuke",
    jobTitle: "Full Stack Engineer",
    url: "https://whoisyrosuke.com",
    email: "ryosuke.san.hana@gmail.com",
    phone: "7863834420",
    birthDate: "1990-10-01",
    // Pick one: street address or PO Box
    // Make sure to leave one option empty or Gatsby will break!
    streetAddress: "",
    poBox: "PO Box 420",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90710",
    country: "United States",

    projects: [
      {
        title: "Project Title",
        image:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      {
        title: "Another Title",
        image:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      {
        title: "The Projects Don't Stop",
        image:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      {
        title: "The Projects Don't Stop",
        image:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ryosuke",
        short_name: "Ryosuke",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon/android-chrome-192x192.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
