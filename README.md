# Interactive Data Science & ML Roadmap Platform

<p align="center">
  <img src="assets/logo.png" alt="Interactive Data Science & ML Roadmap Logo" width="220" />
</p>

Welcome to the **Interactive Data Science & ML Roadmap**! This repository is a single-page interactive web application designed to guide students through the typical curriculum structure of Data Science and Machine Learning. 

It organizes the modules into 4 progressive tiers: **Foundation**, **Core**, **Advanced**, and **Specialization**, matching industry-ready standards.

---

## 🌟 Interactive Features

1.  **Glow Indicator Nodes**: Visual nodes with custom glow borders matching their completion state:
    *   `Done` (Green)
    *   `Next` (Orange)
    *   `Core Analytics` (Purple)
    *   `Advanced ML` (Red)
    *   `Specialization` (Blue)
2.  **Detail Side-Drawer**: Clicking any node slides out a details drawer displaying:
    *   **Theory**: Detailed overview of the topic and why it matters in Greek.
    *   **Analyst & AI Synergy**: How the topic connects to the role of a Data Analyst and how Generative AI can assist or automate the task.
    *   **Code Sandbox**: Clean, production-ready Python snippets (Pandas, Seaborn, statsmodels, SciPy, Keras, FastAPI, etc.) ready to be copied and run.
3.  **Built-in Interactive Quizzes**: Every single module contains a 2-question interactive multi-choice quiz with immediate correct/incorrect feedback to test student retention in real-time.

---

## 🚀 1-Click Hosting: Deploy to GitHub Pages

You can host this interactive roadmap live on the internet for free using **GitHub Pages** in under 10 seconds:

1.  Push this code to your public GitHub repository (`github.com/karidasd/data-science-interactive-roadmap`).
2.  On your GitHub repository webpage, click on **Settings** (top right tab).
3.  In the left sidebar, click on **Pages** (under the "Code and automation" section).
4.  Under **Build and deployment** $\rightarrow$ **Branch**, change `None` to **`main`** and keep `/ (root)` selected.
5.  Click **Save**.
6.  Wait 1 minute, and GitHub will display your live website link at the top:
    `https://karidasd.github.io/data-science-interactive-roadmap/`

You can now share this live link directly with your students!

---

## 🛠️ Local Development

To run the platform locally, simply clone the repository and open `index.html` in any web browser:
```bash
git clone https://github.com/karidasd/data-science-interactive-roadmap.git
cd data-science-interactive-roadmap
# Double-click index.html or open it in your browser
```
No servers or Python environments are required to run the frontend site!
