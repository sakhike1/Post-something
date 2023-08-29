Welcome to the Post App! This simple application provides an admin page where users can log in, create posts, and log out.
This ReadMe file will guide you through the setup, features, and usage of the app

on the home page you only have access to the posted posts, about page and admin page to edit a post you have to login on the admin page

once you authenticate on the admin page you can access the post page
in post page you can create a new post, you can logout when you logout you get taken back to the admin page

when you on home page you can click on post to get taken to the details of post it display the date the name and the content of the post

# Features

User Authentication: Secure login and logout functionality for administrators using Firebase.
Create Posts: Authenticated users can create and publish posts.
User-Friendly Interface: Simple and intuitive user interface developed with Tailwind CSS.
Data Management: State management handled with Vuex, ensuring efficient and organized data flow.
Real-time Updates: Utilizes Firebase real-time database capabilities for immediate post updates.
We used jest for testing

# Prerequisites

You should have a basic understanding of HTML, CSS, and JavaScript.
You need a compatible web browser (e.g., Chrome, Firefox).

# Getting Started

To get started with the Post App, follow these steps:

# Posting app [ this is the posting app link ](postsomething.netlify.app).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# Post-something
