<h1 align="center">
  Minimal Portfolio for Gatsby
</h1>

Get your portfolio started with a stylish, minimal theme for Gatsby.

## 🚀 Quick start

1. Clone this project: `git clone git@github.com:whoisryosuke/gatsby-minimal-portfolio.git`
1. Install depenendencies: `yarn`
1. Run the development server: `yarn develop`
1. Edit files (like `gatsby-config.js`), save, and see changes

When you're done, build the website using `yarn build` and upload the `public` folder to a your hosting server or CDN.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── src
    |   └── components
    |       ├── Description.jsx
    |       ├── GlobalStyles.jsx
    |       └── Logo.jsx
    ├── static
    |   └── assets
    |       └── Cursor.svg
    |   └── favicon
    └── gatsby-config.js

1.  **`Description.jsx`**: This component is where you can edit your description. You can use any HTML, just make sure you follow the JSX syntax (like closing tags - e.g. ✅`<br />` vs ⛔️`<br>`).

2.  **`GlobalStyles.jsx`**: This component contains all the CSS for global styles, including **CSS custom properties** for changing colors.

3.  **`Logo.jsx`**: This component is where the Logo or "Site Title" is stored. You can edit this text in `gatsby-config.js`, but if you want to use an image you'd place it here.

4.  **`Cursor.svg`**: This SVG is the cursor used in the global CSS styles inside `GlobalStyles.jsx`.

5.  **`/favicon`**: This is where you can change the favicon images. You can set the default favicon image inside `gatsby-config.js` using the `gatsby-plugin-manifest` plugin settings.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, SEO data, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/whoisryosuke/gatsby-minimal-portfolio)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/whoisryosuke/gatsby-minimal-portfolio)
