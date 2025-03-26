# 🏡 Loan Portfolio Management Dashboard

A clean, responsive frontend dashboard built in React.js to manage loan data, upload loan documents, and filter/search records efficiently.

---

## ✨ Features

- Sidebar navigation
- Portfolio listing with:
  - Search bar (with clear button)
  - Filter buttons (More Filters opens modal)
  - Row highlight on new entries
- Data Upload section to add new loan data
- Upload modal form (document name/type + file)
- Toast notification on successful upload
- Highlight animation for new row
- Active filter styling

---

## 🧰 Tech Stack

- Frontend: React.js (Vite)
- CSS: Vanilla CSS
- State Management: React useState, useEffect
- Deployment: Render

---

## 🗂 Folder Structure

```
📁 src
 ┣ 📂 components
 ┃ ┣ 📄 Sidebar.jsx
 ┃ ┣ 📄 Filters.jsx
 ┃ ┣ 📄 PortfolioTable.jsx
 ┃ ┣ 📄 UploadForm.jsx
 ┃ ┗ 📄 UploadModal.jsx
 ┣ 📄 main.jsx
 ┣ 📄 index.css
 ┗ 📄 index.html
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/loan-portfolio-ui.git
cd loan-portfolio-ui
npm install
npm run dev
```

---

## 🌐 How to Deploy to Render

1. Push your code to a GitHub repo
2. Go to [https://render.com](https://render.com) and sign in
3. Click **New Web Service** > **Connect to GitHub**
4. Select your repo
5. Set:
   - **Build Command:** `npm run build`
   - **Start Command:** `serve -s dist`
6. Render will auto-build and give you a live URL!

> 💡 Need to install `serve`? Run `npm install -g serve`

---

## 🛠 Future Enhancements

- Column sorting
- Pagination
- User login/auth
- Backend integration (Firebase / Express.js)

---

## 👤 Author

**Name:** Your Name  
**ID:** Your College ID  
**Submission:** [Date]
