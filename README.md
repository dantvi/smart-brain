# Smart Brain Frontend - Face Detection App

Smart Brain is a web-based face detection application that uses AI to identify faces in user-submitted images. This project is part of the Complete Web Developer Course by Zero To Mastery and demonstrates full-stack development skills, including React for the frontend and Node.js with a MySQL database (running in Docker) for the backend. For backend details, see the [backend repository](https://github.com/dantvi/smart-brain-api). 

## Table of contents

- [Smart Brain Frontend - Face Detection App](#smart-brain-frontend---face-detection-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Other Tools](#other-tools)
    - [How It Works](#how-it-works)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Setup Instructions](#setup-instructions)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

Smart Brain Frontend lets you:
- Detect Multiple Faces: Enter an image URL and the app highlights all faces detected by an AI model.
- JWT-based Authentication: Secure registration and login flows with JSON Web Tokens.
- Track Submissions: See how many images you have processed.
- Interactive Design: Clean UI with animations and responsive elements.

### Screenshot

![](./screenshot.png)

### Links

- Frontend: [GitHub Repository](https://github.com/dantvi/smart-brain)
- Backend API: [GitHub Repository](https://github.com/dantvi/smart-brain-api)
- Live Site URL: [DT Code](https://smart-brain.dtcode.se/)

### Built with

#### Frontend
- React — UI framework
- Tachyons — Utility-first CSS framework
- Particles-bg — Animated background
- JWT in localStorage — For secure requests
#### Backend
- Node.js & Express — API server
- MySQL — User and activity data, run in Docker
- Clarifai API — AI face detection
#### Other Tools
- RESTful API — Client-server communication
- Docker Compose — Local database containerization

### How It Works

- Authentication with JWT:
  - Users register or sign in with email and password.
  - A JWT is received on sign-in and stored in localStorage.
  - Protected requests like /image require a valid token.
- Face Detection:
  - Users input an image URL.
  - The frontend sends this to the backend, which calls Clarifai’s API.
  - All detected face boxes are displayed over the image, supporting multiple faces in the same photo.
- Submission Tracking:
  - Each detection increments the user's count.
  - Users can track their total processed images.

### What I learned

Key lessons from this project:
- Implementing JWT-based authentication with localStorage in React.
- Protecting routes and API calls with tokens.
- Integrating a third-party AI API (Clarifai) with a custom backend.
- Running a local database with Docker for easy setup and portability.
- Creating a clean, reusable React component structure.

Example: FaceRecognition component

```jsx
import './face-recognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  </div>
);

export default FaceRecognition;
```

### Continued development

Next improvements:
- Allow direct image uploads (not just URLs).
- Refine UI/UX with modern styling.
- Auto-logout on token expiry.
- Migrate to Context API for cleaner auth state handling.

### Setup Instructions

1. Clone the repository: 
```bash
git clone https://github.com/dantvi/smart-brain.git
cd smart-brain
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env to run on a custom port:
```bash
PORT=3001
```
4. Start the development server: 
```bash
npm run dev
```

Note: Make sure your backend API is running on http://localhost:3000 with the MySQL database started via Docker Compose.

### Useful resources

- [React Docs](https://react.dev/learn)
- [Clarifai API Docs](https://docs.clarifai.com/)
- [Particles-bg on NPM](https://www.npmjs.com/package/particles-bg)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [Tachyons Docs](https://tachyons.io/docs/)
- [Docker Docs](https://docs.docker.com/)

## Author

- GitHub - [@dantvi](https://github.com/dantvi)
- LinkedIn - [@danieltving](https://www.linkedin.com/in/danieltving/)

## Acknowledgments

Special thanks to Zero To Mastery and Andrei Neagoie for building a great foundation in full-stack web development. Also, huge appreciation to MDN Web Docs and Stack Overflow for daily problem-solving!
