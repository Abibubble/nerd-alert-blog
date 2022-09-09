# NerdAlert Blog

![GitHub contributors](https://img.shields.io/github/contributors/abibubble/nerd-alert-blog)
![GitHub last commit](https://img.shields.io/github/last-commit/abibubble/nerd-alert-blog)
![GitHub language count](https://img.shields.io/github/languages/count/abibubble/nerd-alert-blog)
![GitHub top language](https://img.shields.io/github/languages/top/abibubble/nerd-alert-blog)
<img src="https://img.shields.io/badge/yarn-~1.22.15-blue" />
[![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
![GitHub forks](https://img.shields.io/github/forks/abibubble/nerd-alert-blog?style=social)

[Here is a link to the deployed site](https://nerd-alert-blog.vercel.app/)

This is a informative site, containing blogs and videos by the members of NerdAlert. It is designed to be responsive on a wide range of devices, whilst also being easy to navigate through. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Final project image home page](docs/img/finalpage.png)

---

## Contents

- [Local Development](#local-development)
- [User Experience (UX)](<#user-experience-(ux)>)

  - [Initial Discussion](#initial-discussion)
  - [User Stories](#user-stories)

- [Design](#design)

  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Features](#features)
  - [Future Features](#future-features)
  - [Navigation bar](#navigation-bar)

- [Database Design](#database-design)

- [Technologies Used](#technologies-used)

  - [Languages](#languages)
  - [Workspace](#workspace)
  - [Version Control](#version-control)
  - [Responsive Design](#responsive-design)
  - [Documentation](#documentation)
  - [Site Design](#site-design)
  - [Database Design](#database-design)
  - [Frameworks, Libraries and Others](#frameworks-libraries-and-others)

- [Deployment](#deployment)

  - [Initial Deployment](#initial-deployment)
  - [How to Fork it](#how-to-fork-it)
  - [Making a Local Clone](#making-a-local-clone)

- [Testing](#testing)

  - [W3C Validator](#w3c-validator)
  - [Testing User Stories](#testing-user-stories)
  - [Solved Bugs](#solved-bugs)
  - [Known Bugs](#known-bugs)
  - [Lighthouse](#lighthouse)
    - [Performance](#performance)
    - [Accessibility](#accessibility)
    - [Best Practices](#best-practices)
    - [SEO](#seo)

- [Credits](#credits)
  - [Code](#code)
  - [Content](#content)
  - [Media](#media)

---

## Local Development

- Run `npm run install` to install the dependencies.
- Run the development server with `npm run dev`.
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- The site auto-updates when you save.

## User Experience (UX)

### Initial Discussion

I wanted to create a website linked to a database, to form a base for all articles and videos created by memebers of NerdAlert.

### User Stories

#### First Time Visitor Goals

As a first time visitor to this site, a user should be able to :

- Easily navigate the site.
- Intuitively and easily understand what to do.
- Search for a specific article, video or category.
- Browse through all articles and videos.
- Learn more about the members of NerdAlert.

#### Returning Visitor Goals

In addition to the First Time Visitor Goals, a Returning Visitor should be able to :

- View the latest articles and videos without needing to search.
- Search for articles and videos on a specific topic.
- Navigate intuitively, with no need to use the browser's back button.

---

## Design

### Color Scheme

- As purple is the favourite colour of the majority of NerdAlert, we have chosen a mostly purple colour scheme.
- 3 different shades of purple have been used to provide some contrast on the site.
- All text is black or white, which allows the text to be easily visible on all backgrounds.

![Color Scheme](docs/img/colors.png)

### Typography

- I have used a sans-serif font from [Dafont Free](https://www.dafontfree.co/), called [AcherusMilitant](https://www.dafontfree.co/acherus-militant-font-family/), across the site.

![Archerus Militant font](docs/img/libre-font.png)

- The basic font-families of Arial, Helvetica, and sans-serif have been used as fallback fonts, so as to not distract the user from the content of the site if the Acherus Militant font doesn't load. This also comes with the bonus that it's standard with HTML, so it should render on any browser and any device.

![Arial, Helvetica, sans-serif fonts](docs/img/standard-fonts.png)

### Imagery

- The images used in this project are all related to the article, video, category or author that they're attached for.
- Icons are used where suitable to allow users to easily understand at a glance what is intended.

### Features

- Search for a specific article, category, or video.

![Search bar](docs/img/search.png)

- Auto-updating copyright year.

![Copyright in footer](docs/img/copyright.png)

### Future Features

- On-site article and video addition.

### Navigation bar

The navigation bar changes depending on screen size.

- On large screen sizes (992px and above)

![Desktop navigation bar](docs/img/nav-desktop.png)

- On small screen sizes (991px and below)

![Mobile navigation bar](docs/img/nav-mobile.png)

---

## Database Design

Strapi was used to store data for this site in a PostgreSQL database. Information about the database can be found in the [nerd-alert-cms README](https://github.com/Abibubble/nerd-alert-cms).

---

## Technologies Used

### Languages Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3#:~:text=CSS3%20is%20the%20latest%20evolution,flexible%20box%20or%20grid%20layouts.)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

### Workspace

#### VSCode:

[VSCode](https://code.visualstudio.com/) was used as an IDE workspace to build this site.

### Version Control

#### Git:

[Git](https://git-scm.com/) was used for version control by utilizing the Gitpod terminal to add and commit to Git and push to GitHub.

#### GitHub:

[GitHub](https://github.com/) is used to store the code for this project after being pushed from Git.

### Responsive Design

#### Am I Responsive Design:

[Am I Responsive Design](http://ami.responsivedesign.is/#) was used to check the responsive design of the site, and to create the final site image.

#### Responsinator:

[Responsinator](http://www.responsinator.com/) was used to help improve the responsive design on a variety of devices.

### Documentation

#### Shields.io:

[Shields.io](https://shields.io/) was used to create the GitHub badges for the top of this README.md file.

### Site Design

#### Font Awesome:

[react-icons](https://react-icons.github.io/react-icons/) was used for the icons.

#### Dafont Free:

[Dafont Free](https://www.dafontfree.co/) was used to select all the fonts on the site.

#### Favicon.io:

[favicon.io](https://favicon.io/) used to create a site favicon.

### Database Design

#### Strapi:

[Strapi](https://strapi.io/) was used to store the contents of the database.

### Frameworks, Libraries and Others

#### Vercel:

[Vercel](https://vercel.com/) was used to deploy the live site.

#### Google DevTools:

[Google DevTools](https://developer.chrome.com/docs/devtools/) was used to help with developing and debugging.

#### Lighthouse:

[Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to ensure that the code was as performant as possible, confirming to best practices, and SEO and Accessibility guidelines.

---

## Deployment

### Requirements for Deployment

- Next.js
- React
- Strapi account and database
- GitHub account
- Vercel account

### Initial Deployment

This site was deployed to Vercel by following these steps:

1. Login or sign up to [Vercel](https://vercel.com/).
2. Select 'Add New...' in the top right of your dashboard, then select 'Project'.
3. Connect your GitHub account to Vercel if you didn't do it while creating your Vercel account.
4. Search for the GitHub repo for this project.
5. Click 'Import'.
6. Check the project name is one that you're happy with.
7. Change the 'Framework preset' dropdown to 'Next.js'.
8. Ensure you've deployed your Strapi CMS database, as described in the [nerd-alert-cms README](https://github.com/Abibubble/nerd-alert-cms).
9. Add an Environment Variable with a key of 'NEXT_PUBLIC_API_URL', and set the value to your deployed Strapi site, not including `/api` or `/admin`.
10. Click 'Deploy'.

### How to Fork it

1. Login or Sign Up to [GitHub](www.github.com).
2. On GitHub, go to [Abibubble/nerd-alert-blog](https://github.com/Abibubble/nerd-alert-blog).
3. In the top right, click "Fork".

### Making a Local Clone

1. Log in to [GitHub](https://www.github.com) and locate the [Repository](https://github.com/Abibubble/nerd-alert-blog) for this site.
2. Under the repository name, above the list of files, click "Code".
3. Here you can either Clone or Download the repository.
4. You should clone the repository using HTTPS, clicking on the icon to copy the link.
5. Open Git Bash.
6. Change the current working directory to the new location, where you want the cloned directory to be.
7. Type `git clone`, and then paste the URL that was copied in Step 4.
8. Press Enter, and your local clone will be created.
9. You will also need a Strapi CMS database, as described in the [nerd-alert-cms README](https://github.com/Abibubble/nerd-alert-cms).

For a more detailed version of any of these steps, go to one of the following:

- The [Vercel Docs](https://vercel.com/docs/concepts/deployments/overview) to deploy on Vercel.
- The [Github Docs page on cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop).
- The [GitHub Docs page on forking a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

---

## Testing

### W3C Validator

The W3C Markup Validator, W3C CSS Validator, JSHint were used to validate the project to ensure there were no syntax errors within the site.

1. W3C HTML Markup Validator

- [Page](LINK)

2. W3C CSS Validator

- [Page](LINK)

3. JSHint

- [JSHint](https://jshint.com/)

![Image of JSHint results](docs/img/jshint1.png)

### Testing User Stories

#### First Time Visitor Goals

##### Be able to easily navigate the site.

- The navigation bar is clearly visible on all pages.
- The navigation bar is fixed to the top of the screen, so even when the user scrolls, they can still see the navigation bar.

##### Intuitively and easily understand what to do.

- Everything is clearly laid out.
- All buttons describe what they're for in simple terms.
- Icons are used to help convey meaning.

##### Search for a specific article, video or category.

- The search bar is displayed prominently on the navbar on all pages.

##### Browse through all articles and videos.

- All articles are displayed on the homepage for users to view.
- Articles and videos can be found via the navigation bar from any page.

##### Learn more about the members of NerdAlert.

- The About Us page provides information about NerdAlert as a group.
- Each author page gives information aobut each member of NerdAlert.

#### Returning Visitor Goals

##### View the latest articles and videos without needing to search.

- All articles and videos are sorted via their publication date.
- The newest articles and videos will always be at the top.

##### Search for articles and videos on a specific topic.

- The search bar can be used to search for a term used in any article, video or category.

##### Navigation should be intuitive, with no need to use the browser's back button.

- The navigation bar is constantly visible across the top of the site.
- This is either the full navigation bar, or the condensed burger icon menu bar on smaller screen sizes.

### Solved Bugs

1. Bug

- Steps

### Known Bugs

- None known.
- If any errors are found, please contact me via [my GitHub](https://github.com/Abibubble/) to get them fixed.

### Lighthouse

I tested the site using DevTools Lighthouse feature, and got these results:

#### Desktop

![Lighthouse desktop first try](docs/img/lighthousedesktop.png)

#### Mobile

![Lighthouse mobile first try](docs/img/lighthousemobile.png)

#### Performance:

- Perf issues

#### Accessibility:

- All images have alt text.
- All icons have titles where text isn't otherwise present to explain their use.
- All tap targets are correctly sized, and aren't overlapping other content.
- All colors are WCAG AA compliant.

#### Best Practices:

- Best practice issues

#### SEO:

- SEO issues

---

## Credits

### Code

- [react-icons](https://react-icons.github.io/react-icons/): Library of icons used.

### Content

- All content was created by the members of NerdAlert:
  - [Abi Harrison](https://github.com/Abibubble)

### Media

- Logo and favicon created by Alexa Hendry.
