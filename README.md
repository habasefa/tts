# Temaribet Frontend

## Overview

This repository hosts the frontend for [Temaribet](https://temaribet.net/), a professional tutoring platform based in Addis Ababa, Ethiopia. Temaribet connects parents and students with highly qualified tutors, making personalized learning accessible, efficient, and stress-free for busy parents, ensuring academic success for children.

### Homepage

Below is a screenshot of the homepage of Temaribet:

![Homepage Screenshot](./public/home_page_screenshot_2.png)

## Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) and [Next.js](https://nextjs.org/)  
- **UI Framework**: [Material-UI](https://mui.com/), [Ant Design](https://ant.design/), [Font Awesome](https://fontawesome.com/), [Heroicons](https://heroicons.com/)  
- **State Management**: [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [React-Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist)  
- **Form Handling**: [Formik](https://formik.org/), [React Hook Form](https://react-hook-form.com/), [Yup](https://github.com/jquense/yup)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Emotion](https://emotion.sh/docs/introduction)  
- **Utilities**: [Axios](https://axios-http.com/), [Moment.js](https://momentjs.com/), [JWT Decode](https://github.com/auth0/jwt-decode), [CSV to JSON](https://github.com/Keyang/csvtojson)  
- **Analytics**: [Google Analytics](https://github.com/react-ga/react-ga), [Facebook Pixel](https://github.com/zsajjad/react-facebook-pixel)  
- **Firebase**: [Firebase](https://firebase.google.com/) for app initialization and [Firebase Storage](https://firebase.google.com/products/storage) for file storage  
 
---

## Project Structure

```plaintext
tts/
├── backend-utils/      # Utilities for API interactions and backend services
├── components/         # Reusable UI components (e.g., buttons, cards, modals)
├── pages/              # Next.js pages for routing
├── public/             # Static assets like images and icons
├── redux/              # Redux slices and store setup
├── styles/             # Global and component-specific styles
├── themes/             # Theme configuration for light/dark modes
├── utils/              # Helper functions for Firebase, and formatting.
├── views/              # High-level views for different pages or workflows
│   └── completeProfile/ # Complete profile page components and logic
└── README.md           # Documentation
```

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/) (v6 or later recommended).
- Install [npm](https://www.npmjs.com/).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/habasefa/tts.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd tts
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:

   ```bash

   npm run dev
   ```

5. **Access the application**:
   The application will be accessible at [http://localhost:3000](http://localhost:3000).
