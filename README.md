# Gemini-Pi Chatbot 🌟

A full-stack AI chatbot built using **React**, **Google Gemini API**, and hosted on **Vercel**.

> 🔥 Live Demo: [Gemini-Pi Chatbot](https://gemini-pi-eight.vercel.app/)

![image](https://github.com/user-attachments/assets/8de290c2-d0b6-49ba-94ad-8b4e61f2f605)

---

## 🛠 Features

- Chat with Google's **Gemini 1.5 Flash** Model.
- See and click your **Recent Chats**.
- Expand/collapse **Sidebar**.
- **New Chat** button to reset the conversation.
- **Responsive** and clean UI.
- Powered by **Google Generative AI** SDK.

---

## 📁 Project Structure

```bash
├── public/
│   └── assets/          # All image assets
├── src/
│   ├── assets/          # JS export file for assets
│   ├── components/
│   │   ├── Sidebar.jsx  # Sidebar with Recent Chats
│   │   ├── Main.jsx     # Main chat area
│   ├── context/
│   │   └── Context.jsx  # Global State Management
│   ├── App.js           # Main App Router
│   └── index.js         # App entry point
├── README.md            # Project Info
├── package.json         # Dependencies and scripts
└── vercel.json          # (optional) Vercel settings
```

---

## ⚙️ Tech Stack

- **Frontend:** React.js, Context API
- **AI Model:** Google Gemini 1.5 (via Generative AI SDK)
- **Hosting:** Vercel
- **Styling:** CSS

---

## 🚀 Getting Started Locally

1. **Clone** the repository:

```bash
git clone https://github.com/your-username/gemini-pi.git
cd gemini-pi
```

2. **Install** dependencies:

```bash
npm install
```

3. **Setup API Key:**

Create a `.env` file in the root:

```
REACT_APP_GOOGLE_API_KEY=your-google-generative-ai-key-here
```

4. **Start** the server:

```bash
npm start
```

The app will be running on `http://localhost:3000`

---

## 🌍 Deployment

- Push your project to GitHub.
- Connect the GitHub repo to [Vercel](https://vercel.com/).
- Add your environment variable `REACT_APP_GOOGLE_API_KEY` in Vercel Dashboard ➔ Project Settings ➔ Environment Variables.
- Deploy and get a **public link**.

---

## 🤔 Issues / Suggestions?

Feel free to open an issue or contribute to this project! 🚀




