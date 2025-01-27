# CodePen Editor Clone

This is a **CodePen Editor Clone** built using **React** and **Firebase**. The app allows users to sign up and log in using Google or GitHub, edit HTML, CSS, and JavaScript code in a real-time code editor, and preview the output instantly. It aims to replicate some of the core functionalities of the popular **CodePen** editor.

[Live Demo](https://code-pen-clone-react-aniket.vercel.app/)

## Features

### 1. **User Authentication with Firebase**
   - Users can sign up and log in using **Google** or **GitHub** accounts via Firebase authentication.
   - Firebase handles the authentication process and provides secure sign-in for users.

### 2. **Real-Time Code Editing**
   - The app includes a powerful **CodeMirror** editor with language-specific syntax highlighting for HTML, CSS, and JavaScript.
   - Real-time code editing in a split view with separate editors for HTML, CSS, and JavaScript.
   - Instantly preview the output of your code (HTML, CSS, and JS) in a live window.

### 3. **Code Copy to Clipboard**
   - You can copy the code from each editor (HTML, CSS, or JavaScript) to the clipboard using the copy button.
   - A **"Copied!"** notification will appear to confirm when the code has been copied successfully to the clipboard.

### 4. **Responsive Design**
   - The editor is fully responsive and adapts to different screen sizes.
   - It works seamlessly across desktop and mobile devices, allowing users to edit code and preview the output on the go.

### 5. **User Profile & Logout**
   - After logging in, the user's profile picture and name are displayed in the **navbar**.
   - Users can log out easily, which removes their authentication credentials from local storage.

### 6. **Real-Time Output Preview**
   - Users can see the output of their code instantly on the right side of the editor.
   - The preview automatically updates as users make changes to the code.

### 7. **Persistent User Session**
   - User data such as the display name and profile photo is stored in **localStorage** so that the session persists even after page reloads.
   - The app also checks whether a user is logged in on load, and redirects them to the login page if they are not authenticated.

### 8. **Chatbot Integration Using Gemini API**
   - A **Chatbot** powered by the **Gemini API** is integrated to provide real-time coding assistance.
   - Users can ask coding-related questions, and the bot will respond with helpful suggestions, coding tips, or troubleshooting advice.
   - The chatbot uses **Axios** to fetch responses from the Gemini API, which processes the input and provides relevant suggestions.
   - This feature enhances the user experience by offering a virtual assistant while coding, making it easier to get help instantly.

## Technologies Used

- **React.js** – JavaScript library for building user interfaces.
- **Firebase Authentication** – For handling user authentication with Google and GitHub.
- **CodeMirror** – A versatile text editor that provides syntax highlighting for HTML, CSS, and JavaScript.
- **React Router** – To handle navigation between the login page and the main editor page.
- **TailwindCSS** – For utility-first CSS styling, making it easy to design responsive and modern UIs.
- **React Icons** – To add icons, such as the copy icon used in the code editors.
- **Gemini API** – For integrating AI-powered chatbot functionality.
- **Axios** – For making HTTP requests to the Gemini API and handling responses.


