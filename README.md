# ArticleHole - Modern Angular Blog System

ArticleHole is a comprehensive blogging platform built using the **Angular** framework, providing a smooth and sophisticated user experience with modern features like dark mode, article management, and a fully responsive design.

## 🚀 Key Features

### 1. **Premium UI/UX**
- **Modern Design**: An attractive user interface based on harmonious colors and comfortable visual distribution.
- **Smooth Interactions**: Soft transitions during navigation and interactive micro-interactions upon scrolling.
- **Dark & Light Mode**: Full support for theme switching (Dark/Light Mode) with user preference persistence.

### 2. **Content Management**
- **Article Display**: Grid view for technical articles with author details and dates.
- **Article Editor**: An easy-to-use interface for adding new articles or editing existing ones.
- **Fallback Image System**: Intelligent handling of missing image links, where aesthetic images from Unsplash are automatically displayed as alternatives.

### 3. **Tech & Performance**
- **Angular 21**: Leveraging the latest framework technologies to ensure fast loading speeds and interface responsiveness.
- **Responsive Design**: Full compatibility with all screen sizes (Mobile, Tablet, Desktop).
- **SEO Optimized**: Improving content visibility in search engines through dynamic titles and descriptions for each page.
- **Mock Backend**: Using `json-server` to provide a complete local full-stack experience.

### 4. **Additional Pages**
- **About Page**: An introductory page with a modern design.
- **Membership System (UI)**: Login and sign-up interfaces ready for integration.

---

## 🛠️ Technologies Used

- **Frontend**: Angular 21
- **Styling**: Vanilla CSS (Modern CSS)
- **Backend (Mock)**: JSON Server
- **State & Data**: RxJS & Angular Services

---

## 🏃 How to Run

To start working on the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Mock Server (API)**:
   ```bash
   npm run api
   ```
   *The server will run on port 3000.*

3. **Run the Angular Application**:
   ```bash
   npm start
   ```
   *Open your browser at `http://localhost:4200`.*

---

## 📁 Project Structure

- `src/app/articles`: Components for displaying articles and their details.
- `src/app/editor`: Components for adding and editing articles.
- `src/app/auth`: Components for login and registration.
- `src/app/about`: The site's introductory page.
- `db.json`: The mock database file.

---

This project was developed as part of a journey to learn modern web technologies.
