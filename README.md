I created this boilerplate for a Progressive Web Application that uses Next.js framework because many of the tutorials I found online left out important information about options in the `_document.tsx`, `mainfest.json`, and the `next.config.js` files. [This youtube tutorial](https://www.youtube.com/watch?v=ARNN_zmrwcw) had the most up-to-date information at the time, and the comments below were my best resources for creating a PWA with [`next-pwa`](https://www.npmjs.com/package/next-pwa) library and nextjs. Hope this is helpful!

## To Set Up Your Own Progressive Web App with Next.js

Fork this repo, clone to your machine, and when in the root folder, run `npm install`.

If you want to immediately compile and view the boilerplate app on your machine, run:
- `npx next build`
followed by
- `npx next start`
- navigate to `localhost:3000` in your chrome browser (or any browser run with chromium), and view the app. 

To import as a desktop app, click the icon seen here: 

<img width="510" alt="image" src="https://user-images.githubusercontent.com/99047250/213308384-370d7664-2f28-48de-a64a-dd896c8ad528.png">

To customize, edit the provided `manifest.json` file in the `public` folder, and run through the workflow above. Be sure to have the `display` option set to "standalone" or "fullscreen". 

Please feel free to leave feedback, comments, or links to issues so that this boilerplate can be kept up-to-date.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

==================================================

# <a name="_9c6618keh49k"></a>**Muxe PWA**
A progressive web application built with Next.js and TypeScript.
## <a name="_kvdri5cmc5up"></a>**Table of Contents**
- Project Overview
- Features
- Getting Started
- Scripts
- Dependencies
- DevDependencies
- License
## <a name="_opy11ohfsiz4"></a>**Project Overview**
Muxe PWA is a progressive web application leveraging the power of Next.js and TypeScript. It integrates various libraries and tools to provide a robust and scalable web application.
## <a name="_ew3d7j6ipjuu"></a>**Features**
- **TypeScript** for static typing.
- **Next.js** for server-side rendering and static site generation.
- **Material UI** and **Styled Components** for modern UI components.
- **Redux** for state management.
- **Firebase** for backend services.
- **PWA support** with next-pwa.
- **Date manipulation** with date-fns, dayjs, and moment.
- **Charting** with chart.js and react-chartjs-2.
- **Linting and Formatting** with ESLint and Prettier.
- **Commitlint** and **Husky** for commit message validation.
## <a name="_qcdf56gnsxvs"></a>**Getting Started**
### <a name="_mho864wxtwi5"></a>**Prerequisites**
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x) or[ ](https://yarnpkg.com/)[Yarn](https://yarnpkg.com/) (optional)
### <a name="_47i2h9pwlxol"></a>**Installation**
1. Clone the repository:

bash

Copy code

git clone https://github.com/yourusername/muxe-pwa.git

cd muxe-pwa

2. Install dependencies:

bash

Copy code

npm install

\# or

yarn install

3. Set up Husky (if not automatically set up):

bash

Copy code

npm run postinstall

### <a name="_yjj8fb8bwnuq"></a>**Running the Development Server**
bash

Copy code

npm run dev

\# or

yarn dev

Open http://localhost:3000 with your browser to see the result.
## <a name="_x67ok0bslsvz"></a>**Scripts**
- **dev**: Runs the development server.
- **build**: Builds the application for production.
- **start**: Starts the production server.
- **lint**: Lints the project using ESLint.
- **postinstall**: Installs Husky for Git hooks.
- **format**: Checks code formatting with Prettier.
- **format:fix**: Fixes code formatting with Prettier.
## <a name="_8z9i1slo0u6k"></a>**Dependencies**
These are the main dependencies used in this project:

- @emotion/react: ^11.11.1
- @emotion/styled: ^11.11.0
- @headlessui/react: ^1.7.17
- @heroicons/react: ^2.0.18
- @mui/material: ^5.14.16
- @mui/styled-engine-sc: ^6.0.0-alpha.4
- @mui/styles: ^5.14.17
- @mui/x-date-pickers: ^6.17.0
- @mui/x-date-pickers-pro: ^6.17.0
- @nextui-org/react: ^2.1.13
- axios: ^1.6.0
- chart.js: ^4.4.0
- date-fns: ^2.30.0
- dayjs: ^1.11.10
- firebase: ^10.5.0
- framer-motion: ^10.16.4
- lodash: ^4.17.21
- moment: ^2.29.4
- moment-timezone: ^0.5.43
- next: ^13.5.5
- next-pwa: ^5.6.0
- react: ^18.2.0
- react-chartjs-2: ^5.2.0
- react-date-range: https://github.com/agustinagox/date-range-muxe.git
- react-dom: ^18.2.0
- react-redux: ^8.1.3
- redux: ^4.2.1
- redux-persist: ^6.0.0
- redux-thunk: ^2.4.2
- styled-components: ^6.1.0
- typescript: ^5.2.2
## <a name="_nbjolvwqvgf1"></a>**DevDependencies**
These are the main devDependencies used in this project:

- @next/eslint-plugin-next: ^14.0.4
- @types/lodash: ^4.14.202
- autoprefixer: ^10.4.16
- commitizen: ^4.3.0
- cz-conventional-changelog: ^3.3.0
- eslint-config-prettier: ^9.1.0
- husky: ^8.0.3
- lint-staged: ^15.2.0
- postcss: ^8.4.31
- prettier: ^3.1.1
- tailwindcss: ^3.3.3

Structure Folder:
.env

.eslintrc.json

.github

`   `|-- workflows

`   `|   |-- docker-image.yml

.gitignore

.husky

`   `|-- \_

`   `|   |-- .gitignore

`   `|   |-- husky.sh

`   `|-- pre-commit

.prettierrc

Dockerfile

README.md

components

`   `|-- alert

`   `|   |-- alert.tsx

`   `|-- bottom-sheet

`   `|   |-- bottom-sheet.tsx

`   `|-- button

`   `|   |-- button.tsx

`   `|-- card

`   `|   |-- card.tsx

`   `|-- carousel

`   `|   |-- carousel.tsx

`   `|-- chart

`   `|   |-- bar-chart.tsx

`   `|   |-- line-chart.tsx

`   `|-- checkbox

`   `|   |-- checkbox.tsx

`   `|-- date-range

`   `|   |-- date-range.tsx

`   `|-- footer

`   `|   |-- footer.tsx

`   `|-- form-upload

`   `|   |-- form-upload.tsx

`   `|-- header

`   `|   |-- header.tsx

`   `|-- info-song-request

`   `|   |-- info-song-request.tsx

`   `|-- input-amount

`   `|   |-- input-amount.tsx

`   `|-- input-dropdown

`   `|   |-- input-dropdown.tsx

`   `|-- input

`   `|   |-- index.tsx

`   `|-- item-earning

`   `|   |-- item-earning.tsx

`   `|-- item-gift

`   `|   |-- item-gift.tsx

`   `|-- item-notif

`   `|   |-- item-notif.tsx

`   `|-- item-payment

`   `|   |-- item-payment.tsx

`   `|-- item-playlist

`   `|   |-- item-playlist.tsx

`   `|-- item-report

`   `|   |-- item-report.tsx

`   `|-- item-song-request

`   `|   |-- item-song-request.tsx

`   `|-- item-song

`   `|   |-- item-song.tsx

`   `|-- layout

`   `|   |-- layout.tsx

`   `|-- line-gradient

`   `|   |-- line-gradient.tsx

`   `|-- menu-card

`   `|   |-- menu-card.tsx

`   `|-- modal-gift

`   `|   |-- modal-gift.tsx

`   `|-- modal-notification

`   `|   |-- modal-notification.tsx

`   `|-- modal-song-request

`   `|   |-- modal-song-request.tsx

`   `|-- modal

`   `|   |-- modal.tsx

`   `|-- month-rangex

`   `|   |-- mounth-rangex.tsx

`   `|-- pill

`   `|   |-- pill-add.tsx

`   `|   |-- pill-date.tsx

`   `|   |-- pill-genre-light.tsx

`   `|   |-- pill-genre.tsx

`   `|   |-- pill-price.tsx

`   `|   |-- pill-request.tsx

`   `|   |-- pill-status.tsx

`   `|   |-- pill.tsx

`   `|-- search

`   `|   |-- search.tsx

`   `|-- snackbar

`   `|   |-- snackbar-notif.tsx

`   `|   |-- snackbar.tsx

`   `|-- time-picker

`   `|   |-- time-picker.tsx

constants

`   `|-- config.ts

`   `|-- string.ts

firebase

`   `|-- config.ts

hooks

`   `|-- useFcmToken.tsx

next.config.js

package.json

pages

`   `|-- \_app.tsx

`   `|-- \_document.tsx

`   `|-- api

`   `|   |-- api.ts

`   `|   |-- api.types.ts

`   `|   |-- auth.ts

`   `|   |-- customer.api.ts

`   `|   |-- performer.api.ts

`   `|   |-- venue.api.ts

`   `|-- confirm

`   `|   |-- index.tsx

`   `|-- customer

`   `|   |-- choose-payment

`   `|   |   |-- index.tsx

`   `|   |-- connect-credit-card

`   `|   |   |-- index.tsx

`   `|   |-- connect-gopay

`   `|   |   |-- index.tsx

`   `|   |-- edit-payment

`   `|   |   |-- index.tsx

`   `|   |-- events

`   `|   |   |-- index.tsx

`   `|   |-- explore-song

`   `|   |   |-- index.tsx

`   `|   |-- gift-failed

`   `|   |   |-- index.tsx

`   `|   |-- gift-send

`   `|   |   |-- index.tsx

`   `|   |-- home

`   `|   |   |-- index.tsx

`   `|   |-- my-song-request

`   `|   |   |-- index.tsx

`   `|   |-- notification

`   `|   |   |-- index.tsx

`   `|   |-- on-boarding

`   `|   |   |-- index.tsx

`   `|   |-- payment-artist

`   `|   |   |-- index.tsx

`   `|   |-- payment-cart

`   `|   |   |-- index.tsx

`   `|   |-- payment-method

`   `|   |   |-- index.tsx

`   `|   |-- playlist

`   `|   |   |-- index.tsx

`   `|   |-- request-song

`   `|   |   |-- index.tsx

`   `|   |-- request-this-song

`   `|   |   |-- index.tsx

`   `|   |-- song-request-failed

`   `|   |   |-- index.tsx

`   `|   |-- song-request-sent

`   `|   |   |-- index.tsx

`   `|   |-- support-artist

`   `|   |   |-- index.tsx

`   `|-- email-verified

`   `|   |-- index.tsx

`   `|-- forbidden.tsx

`   `|-- forgot-password

`   `|   |-- index.tsx

`   `|-- index.tsx

`   `|-- loading

`   `|   |-- index.tsx

`   `|-- login

`   `|   |-- index.tsx

`   `|-- on-boarding

`   `|   |-- index.tsx

`   `|-- password-reset-failed

`   `|   |-- index.tsx

`   `|-- password-reset-success

`   `|   |-- index.tsx

`   `|-- password-reset

`   `|   |-- index.tsx

`   `|-- performer

`   `|   |-- earning

`   `|   |   |-- index.tsx

`   `|   |-- gift-receive

`   `|   |   |-- index.tsx

`   `|   |-- home

`   `|   |   |-- index.tsx

`   `|   |-- performer-detail

`   `|   |   |-- index.tsx

`   `|   |-- profile

`   `|   |   |-- index.tsx

`   `|   |-- report

`   `|   |   |-- index.tsx

`   `|   |-- schedule

`   `|   |   |-- index.tsx

`   `|   |-- set-play-list

`   `|   |   |-- index.tsx

`   `|   |-- song-request

`   `|   |   |-- index.tsx

`   `|-- privacy-policy

`   `|   |-- index.tsx

`   `|-- register

`   `|   |-- index.tsx

`   `|-- reset-link-confirm

`   `|   |-- index.tsx

`   `|-- reset-password-performer

`   `|   |-- index.tsx

`   `|-- reset-password-venue

`   `|   |-- index.tsx

`   `|-- splash

`   `|   |-- index.tsx

`   `|-- terms-and-conditions

`   `|   |-- index.tsx

`   `|-- venue

`   `|   |-- add-event

`   `|   |   |-- index.tsx

`   `|   |-- earning

`   `|   |   |-- index.tsx

`   `|   |-- edit-event

`   `|   |   |-- index.tsx

`   `|   |-- event-detail

`   `|   |   |-- index.tsx

`   `|   |-- home

`   `|   |   |-- index.tsx

`   `|   |-- profile

`   `|   |   |-- index.tsx

`   `|   |-- report

`   `|   |   |-- index.tsx

`   `|   |-- schedule

`   `|   |   |-- index.tsx

`   `|   |-- venue-detail-edit

`   `|   |   |-- index.tsx

`   `|   |-- venue-detail

`   `|   |   |-- index.tsx

postcss.config.js

public

`   `|-- favicon.ico

`   `|-- firebase-messaging-sw.js

`   `|-- icon-192x192.png

`   `|-- icon-256x256.png

`   `|-- icon-384x384.png

`   `|-- icon-512x512.png

`   `|-- icons

`   `|   |-- account\_circle.png

`   `|   |-- address.png

`   `|   |-- arow-right.png

`   `|   |-- arrow-crooked.png

`   `|   |-- badge.png

`   `|   |-- bio.png

`   `|   |-- call.png

`   `|   |-- cc-white.png

`   `|   |-- chevron.png

`   `|   |-- circle-arrow-left.png

`   `|   |-- clock.png

`   `|   |-- close.png

`   `|   |-- credit-card.png

`   `|   |-- date-black.png

`   `|   |-- download.png

`   `|   |-- edit-circle.png

`   `|   |-- eye-slash.png

`   `|   |-- facebook.png

`   `|   |-- google.png

`   `|   |-- gopay.png

`   `|   |-- home.png

`   `|   |-- index.ts

`   `|   |-- instagram.png

`   `|   |-- lminus.png

`   `|   |-- lock-teal.png

`   `|   |-- lock-white.png

`   `|   |-- logout.png

`   `|   |-- lplus.png

`   `|   |-- mail-teal.png

`   `|   |-- mail-white.png

`   `|   |-- music-tag.png

`   `|   |-- not.png

`   `|   |-- notif.png

`   `|   |-- pencil.png

`   `|   |-- pestival.png

`   `|   |-- plus.png

`   `|   |-- priority\_high.png

`   `|   |-- qr.png

`   `|   |-- report.png

`   `|   |-- schedule-white.png

`   `|   |-- schedule.png

`   `|   |-- search.png

`   `|   |-- setlist-white.png

`   `|   |-- setlist.png

`   `|   |-- setting.png

`   `|   |-- spotify.png

`   `|   |-- tiktok.png

`   `|   |-- upload.png

`   `|   |-- visibility.png

`   `|   |-- web.png

`   `|   |-- world.png

`   `|   |-- x.png

`   `|   |-- youtube.png

`   `|-- illustrations

`   `|   |-- blur-purple-circle.png

`   `|   |-- blur-teal-circle.png

`   `|   |-- blur-teal-top.png

`   `|   |-- index.ts

`   `|   |-- line-purple.png

`   `|   |-- line-teal.png

`   `|-- images

`   `|   |-- arrow-right3.png

`   `|   |-- barcode.png

`   `|   |-- bg-approved.png

`   `|   |-- bg-black-purple.png

`   `|   |-- bg-dash.png

`   `|   |-- bg-muramasa.jpeg

`   `|   |-- bg-photo.png

`   `|   |-- bg-photo2.png

`   `|   |-- bg-played.png

`   `|   |-- bg-playlist.png

`   `|   |-- bg-rejectd.png

`   `|   |-- close.png

`   `|   |-- default-profile.png

`   `|   |-- done.png

`   `|   |-- gear.png

`   `|   |-- grain.svg

`   `|   |-- img-song.png

`   `|   |-- index.ts

`   `|   |-- logo-footer.png

`   `|   |-- logo-venue.png

`   `|   |-- logo.png

`   `|   |-- muxe-footer.png

`   `|   |-- muxe-profile.png

`   `|   |-- onboarding-img.png

`   `|   |-- onboarding-img.svg

`   `|   |-- playlist1.png

`   `|   |-- playlist2.png

`   `|   |-- playlist3.png

`   `|   |-- playlist4.png

`   `|   |-- profile.png

`   `|   |-- splash.png

`   `|-- index.ts

`   `|-- logo192.png

`   `|-- manifest.json

`   `|-- music

`   `|   |-- index.ts

`   `|   |-- music-1.png

`   `|   |-- music-10.png

`   `|   |-- music-11.png

`   `|   |-- music-12.png

`   `|   |-- music-13.png

`   `|   |-- music-14.png

`   `|   |-- music-15.png

`   `|   |-- music-16.png

`   `|   |-- music-17.png

`   `|   |-- music-2.png

`   `|   |-- music-3.png

`   `|   |-- music-4.png

`   `|   |-- music-5.png

`   `|   |-- music-6.png

`   `|   |-- music-7.png

`   `|   |-- music-8.png

`   `|   |-- music-9.png

`   `|-- next.svg

`   `|-- notification-badgex24.png

`   `|-- payments

`   `|   |-- bca.png

`   `|   |-- bni.png

`   `|   |-- bri.png

`   `|   |-- dana.png

`   `|   |-- gopay.png

`   `|   |-- index.ts

`   `|   |-- mandiri.png

`   `|   |-- ovo.png

`   `|   |-- permata.png

`   `|   |-- shope.png

`   `|   |-- visa.png

`   `|-- sw.js

`   `|-- thirteen.svg

`   `|-- vercel.svg

`   `|-- video

`   `|   |-- -f1c7-425e-b7a7-c13be7196cf2.mov

`   `|   |-- -f610-43c0-9453-ad0be3f01a2a.mov

`   `|   |-- index.ts

`   `|-- workbox-678d514f.js

store

`   `|-- actions

`   `|   |-- authActions.ts

`   `|   |-- customerActions.ts

`   `|   |-- performerActions.ts

`   `|   |-- userActions.ts

`   `|   |-- venueActions.ts

`   `|-- genre.ts

`   `|-- genreAll.ts

`   `|-- music.ts

`   `|-- persist-config.ts

`   `|-- reducers

`   `|   |-- authReducer.ts

`   `|   |-- customerReducer.ts

`   `|   |-- musicReducer.ts

`   `|   |-- performerReducer.ts

`   `|   |-- reportReducer.ts

`   `|   |-- userReducer.ts

`   `|   |-- venueReducer.ts

`   `|-- store.ts

`   `|-- store.types.ts

styles

`   `|-- Home.module.css

`   `|-- default-date-range.css

`   `|-- globals.css

`   `|-- index.css

`   `|-- styles-date-range.css

tailwind.config.js

tsconfig.json

utils

`   `|-- converter.ts

`   `|-- date.ts

`   `|-- detect-browser.ts

`   `|-- event-helper.ts

`   `|-- index.ts

`   `|-- logger.ts

`   `|-- performer-helper.ts

yarn.lock




