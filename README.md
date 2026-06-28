# Interactive Data Science & ML Roadmap Platform

<p align="center">
  <img src="assets/logo.png" alt="Interactive Data Science & ML Roadmap Logo" width="220" /><br><br>
  <a href="https://karidasd.github.io/data-science-interactive-roadmap/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Website-Open_Roadmap-blueviolet?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Website" />
  </a>
</p>

👉 **[Δείτε την Ιστοσελίδα Live εδώ! (Live Interactive Website)](https://karidasd.github.io/data-science-interactive-roadmap/)**

Welcome to the **Interactive Data Science & ML Roadmap**! This repository is a ready-to-deploy **Interactive Learning Management System (LMS) web application** designed to guide students through the progressive curriculum of Data Science and Machine Learning. 

It organizes the topics into 4 progressive tiers: **Foundation**, **Core**, **Advanced**, and **Specialization**.

---

## 🎮 Gamified Learning Flow (LMS Mode)

Instead of a static chart, this platform behaves like an interactive course:

1.  **State-Driven Nodes**: Visual nodes with custom glow borders matching their state:
    *   `Locked (🔒)`: Grayed out and disabled. Clicking a locked node displays a floating toast indicating the exact prerequisites needed to unlock it.
    *   `Active (●)`: Pulsing neon border matching the tier color, indicating the current module. The student can click it to study and take the quiz.
    *   `Completed (✓)`: Solid green background indicating success.
2.  **Directed Acyclic Graph (DAG) Unlocking**: Unlocking is dependent on a strict prerequisite tree:
    *   *Data Preprocessing* is unlocked by default.
    *   Passing the *Data Preprocessing* quiz unlocks *EDA*.
    *   Passing the *EDA* quiz unlocks *Statistics*.
    *   Passing *Statistics* unlocks the entire **Core Tier** (*Data Visualization*, *Feature Engineering*, and *SQL & Pandas*).
    *   Completing all Core modules unlocks the Projects (*Credit Risk ML* and *Email Targeting*), and so on.
3.  **Local Storage Persistence**: Student progress is automatically saved to the browser's `localStorage`. Refreshing the tab or closing the window does not erase their progress.
4.  **Interactive Progress Reset**: Added a **Reset Progress** button in the header that resets the progress bar and locks all dependent nodes, allowing students to retake the course.

---

## 🧠 Advanced Quiz Database

Every single one of the 16 curriculum modules contains **3 to 4 advanced, highly technical questions** (multiple-choice). These test actual data science engineering capabilities, including:

*   **Data Preprocessing**: Outliers handling (mean vs. median), Zip Code dimensions (Curse of Dimensionality), pandas `dropna` subset syntax, normalization vs. standardization.
*   **EDA**: Positive/negative skewness ratios (mean vs. median), negative Pearson correlation coefficients, box plots vs. bar charts.
*   **Statistics**: Null Hypotheses, Type I errors (False Positives), Central Limit Theorem.
*   **Data Visualization**: Correlation matrix plot selectors (Seaborn heatmaps), high-level vs. low-level libraries (Seaborn vs. Matplotlib), pairwise bivariate distributions (`sns.pairplot`).
*   **Feature Engineering**: Feature scaling necessity for distance algorithms (K-Means/SVM), Principal Component Analysis (PCA) targets, Target Leakage dangers.
*   **SQL & Pandas**: Left joins vs. inner joins, pandas equivalents to window functions (`groupby().transform()`), SQL Common Table Expressions (CTEs).
*   **Credit Risk ML**: Imbalance metric selection (F1-score/Recall vs. Accuracy), Recall definitions, synthetic minority sampling (SMOTE).
*   **Email Targeting**: Optimal cluster selections (Elbow Method / Silhouette Score), distance minimization (Euclidean SSE), RFM segmentation logic.
*   **Time Series**: Stationarity requirements (mean/variance over time), ARIMA parameter components (p, d, q), holiday/timestamp flexibility (Meta Prophet).
*   **NLP**: Transformer Self-Attention, Tokenization steps, TF-IDF term scoring.
*   **Deep Learning**: Backpropagation mathematical objectives, ReLU hidden layer activation derivatives vs. Sigmoid, Adam adaptive optimizers.
*   **Model Deployment**: ASGI server runtimes (Uvicorn), Docker Images vs. Containers, Model drift issues.
*   **Model Evaluation**: GridSearchCV constraints vs. RandomizedSearchCV/Optuna, Game theory local feature importances (SHAP values), Overfitting validation profiles.
*   **Business Intelligence**: Statistical power definitions, dashboard vs. static reports, Minimum Detectable Effect (MDE) impact on sample sizes.
*   **Recommender Systems**: Cold start conditions, SVD matrix factorizations, Content-based metadata mappings.
*   **Anomaly Detection**: Supervised class imbalance issues, Isolation Forest root path lengths, Contamination parameters.

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

---

## 🛠️ Local Development

To run the platform locally, simply clone the repository and open `index.html` in any web browser:
```bash
git clone https://github.com/karidasd/data-science-interactive-roadmap.git
cd data-science-interactive-roadmap
# Double-click index.html or open it in your browser
```
No servers or Python environments are required to run the frontend site!
