**🤖 AI Code Explainer
**
An AI-powered web application that explains programming code in simple terms for beginners.
Built using HTML, CSS, JavaScript, Node.js, and Groq AI API.

✨ Features

📄 Paste any code and get a simple explanation

⚡ Fast AI responses using Groq API

🌐 Web-based UI (no installation needed for users)

🔐 API key stored safely using environment variables

☁️ Deployed on Vercel (serverless backend)

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js (Vercel Serverless Function)

AI Model: Groq (LLaMA 3.1)

Hosting: Vercel

📁 Project Structure
ai-code-explainer/
│
├── public/
│   └── index.html
│
├── api/
│   └── explain.js
│
├── package.json
├── README.md
└── .gitignore

🚀 How It Works

User enters code in the text area.

Frontend sends the code to /api/explain.

Backend sends the prompt to Groq AI.

AI returns a beginner-friendly explanation.

Explanation is displayed on the webpage.

🔧 Setup Locally
1️⃣ Clone the repository
git clone https://github.com/pavanmgowda20/ai-code-explainer.git
cd ai-code-explainer

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create a file named .env in the root folder:

GROQ_API_KEY=your_groq_api_key_here

4️⃣ Run locally (optional with Express version)
node server.js


Then open:

http://localhost:3000

🌍 Deployment

This project is deployed using Vercel.

Steps:

Push project to GitHub

Import project into Vercel

Add Environment Variable:

GROQ_API_KEY = your_api_key


Deploy 🎉

🧠 Example

Input:

let a = 5;
let b = 10;
console.log(a + b);


Output:

This code creates two variables and prints their sum to the console.

🔐 Security

API key is stored in .env

.env is ignored using .gitignore

Never expose API keys in public repositories

📌 Future Improvements

Add dark mode 🌙

Add code syntax highlighting

Add file upload

Add copy-to-clipboard feature

Add history of explanations

👨‍💻 Author

Pavan M Gowda
GitHub: https://github.com/pavanmgowda20

⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
