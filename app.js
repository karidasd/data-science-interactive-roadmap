// Database containing details, code, and quizzes for all 16 curriculum modules (English Edition)
// Upgraded: Quizzes feature 3-4 advanced technical questions per module.
const modulesData = {
    "preprocessing": {
        title: "Data Preprocessing & Cleaning",
        theory: "Data preprocessing is the first and most critical step in any data project. It involves handling missing values (nulls), removing duplicate rows, correcting data type anomalies, and filtering out outliers. Without clean data, any AI or machine learning model will produce faulty, unreliable outputs (Garbage In, Garbage Out).",
        analystAi: "Data Analysts use libraries like Pandas to inspect and tidy up datasets. Generative AI (like Claude or GPT) supercharges this by automatically analyzing null patterns, suggesting smart imputation (filling) rules, and generating reusable data-cleaning code scripts.",
        realWorldExample: "When users sign up on a website, they might type their city as 'Athens', 'athens', 'ATHENS', or 'Athns'. Preprocessing normalizes these entries so the system aggregates them as a single, consistent city count.",
        code: `# Data Cleaning Example with Pandas
import pandas as pd
import numpy as np

# Load dataset
df = pd.read_csv("data.csv")

# 1. Identify missing values
print(df.isnull().sum())

# 2. Impute missing numeric values with median
median_age = df['age'].median()
df['age'] = df['age'].fillna(median_age)

# 3. Drop rows with critical missing categorical values
df = df.dropna(subset=['customer_id'])

# 4. Remove duplicate rows
df = df.drop_duplicates()
print("Cleaned DataFrame shape:", df.shape)`,
        quiz: [
            {
                q: "If a column 'Salary' has a heavily right-skewed distribution with major outliers, which imputation method is mathematically most robust?",
                options: [
                    "Mean imputation - because it considers all values in the dataset.",
                    "Median imputation - because it is a positional statistic unaffected by extreme outliers.",
                    "Mode imputation - because it represents the salary most employees receive."
                ],
                correct: 1
            },
            {
                q: "What is the technical danger of applying One-Hot Encoding on a column like 'ZIP Code' with 5,000 unique values?",
                options: [
                    "It will cause severe underfitting because the model cannot read numeric zip codes.",
                    "It triggers the 'Curse of Dimensionality' by creating 5,000 sparse columns, drastically increasing memory and training time.",
                    "It automatically deletes rows containing null values in that column."
                ],
                correct: 1
            },
            {
                q: "Which Pandas code snippet removes rows where the target label 'Purchased' is null, while keeping nulls in other columns?",
                options: [
                    "df.dropna()",
                    "df.dropna(subset=['Purchased'])",
                    "df['Purchased'].fillna(method='ffill')"
                ],
                correct: 1
            },
            {
                q: "What is the difference between normalization (MinMax scaling) and standardization (Standard scaling)?",
                options: [
                    "Normalization scales features to a [0, 1] range; standardization scales features to have a mean of 0 and a standard deviation of 1.",
                    "Standardization scales features to a [0, 1] range; normalization scales features to have a mean of 0 and a standard deviation of 1.",
                    "They are mathematically identical and yield the exact same scaling results."
                ],
                correct: 0
            }
        ]
    },
    "eda": {
        title: "EDA (Exploratory Data Analysis)",
        theory: "Exploratory Data Analysis (EDA) is the phase where analysts 'listen' to the dataset. By calculating descriptive statistics (mean, median, standard deviation) and plotting visual charts, you understand value distributions, locate anomalies, and spot linear correlations between variables.",
        analystAi: "The Data Analyst designs the EDA strategy to address key business objectives. AI assists by instantly interpreting statistical summaries, explaining distribution skewness, and pointing out correlations that warrant deeper inspection.",
        realWorldExample: "A coffee chain analyzes customer transaction timestamps during EDA and discovers that iced coffee sales spike in July while hot chocolate peaks in December, allowing them to optimize seasonal inventory levels.",
        code: `# Descriptive Statistics & Correlations with Pandas
import pandas as pd

df = pd.read_csv("dataset.csv")

# 1. View basic statistical summaries
print("Summary Statistics:")
print(df.describe())

# 2. View data types and non-null counts
print("\nData Types:")
print(df.info())

# 3. Compute Pearson correlation matrix
numeric_df = df.select_dtypes(include=['number'])
correlations = numeric_df.corr()
print("\nCorrelation Matrix:")
print(correlations)`,
        quiz: [
            {
                q: "If a distribution has a mean of 85 and a median of 60, what can you mathematically infer about its skewness?",
                options: [
                    "It is symmetric (normal distribution).",
                    "It is right-skewed (positively skewed) because the mean is pulled higher by extreme right-tail values.",
                    "It is left-skewed (negatively skewed) because the median is lower."
                ],
                correct: 1
            },
            {
                q: "What does a Pearson correlation coefficient of -0.89 between variables X and Y indicate?",
                options: [
                    "There is virtually no correlation between X and Y.",
                    "There is a strong negative linear correlation; as X increases, Y decreases predictably.",
                    "A computational calculation error occurred, since correlation cannot be negative."
                ],
                correct: 1
            },
            {
                q: "Why is a box plot preferred over a simple bar chart of averages during EDA?",
                options: [
                    "It displays the distribution spread, median, quartiles, and identifies outliers, whereas a bar chart hides variability behind a single average.",
                    "It runs faster in Python memory.",
                    "It automatically trains classification models."
                ],
                correct: 0
            }
        ]
    },
    "statistics": {
        title: "Statistics for Data Science",
        theory: "Statistics provides the mathematical framework for making data-backed decisions. Key concepts include hypothesis testing, p-values (determining if a finding is statistically significant or random chance), and probability distributions (like the Normal Distribution).",
        analystAi: "Analysts rely heavily on statistical significance testing when evaluating A/B tests. AI helps by translating complex statistical outputs into plain business language and recommending the correct statistical test based on the data schema.",
        realWorldExample: "A company changes its checkout button color from blue to green. Analysts run a t-test to compute the p-value. If the p-value is below 0.05, they prove that the increase in sales was due to the color change, not random chance.",
        code: `# Hypothesis Testing (T-Test) Example with SciPy
import numpy as np
from scipy import stats

# Class A and Class B exam scores
class_A = np.array([85, 92, 78, 90, 88, 95, 80])
class_B = np.array([72, 80, 85, 74, 78, 82, 70])

# Perform two-sample independent T-Test
t_stat, p_val = stats.ttest_ind(class_A, class_B)

print(f"T-statistic: {t_stat:.4f}")
print(f"P-value: {p_val:.4f}")

if p_val < 0.05:
    print("Difference is statistically significant (p < 0.05).")
else:
    print("No statistically significant difference detected.")`,
        quiz: [
            {
                q: "In hypothesis testing, what is the Null Hypothesis (H0)?",
                options: [
                    "The assumption that there is no effect, no difference, or no relationship between the groups being tested.",
                    "The target prediction of the machine learning model.",
                    "The assumption that our sample data contains zero outliers."
                ],
                correct: 0
            },
            {
                q: "What is a Type I error in statistical inference?",
                options: [
                    "Failing to reject the null hypothesis when it is actually false (False Negative).",
                    "Rejecting the null hypothesis when it is actually true (False Positive).",
                    "A runtime compilation error in the Python SciPy library."
                ],
                correct: 1
            },
            {
                q: "What does the Central Limit Theorem (CLT) claim?",
                options: [
                    "The mean of any dataset must equal its median.",
                    "As sample size increases, the sampling distribution of the mean approaches a normal distribution, regardless of the population distribution shape.",
                    "All machine learning models eventually achieve 100% accuracy."
                ],
                correct: 1
            }
        ]
    },
    "visualization": {
        title: "Data Visualization",
        theory: "Data visualization turns raw numbers into visual stories. Using libraries like Matplotlib and Seaborn, you design scatter plots for correlations, bar charts for category comparisons, and heatmaps to visualize multi-variable correlation coefficients.",
        analystAi: "The Data Analyst designs clean charts to convey data insights to managers. AI assists by writing plotting scripts, adding aesthetic customizations, and suggesting appropriate chart styles for specific variables.",
        realWorldExample: "An investor views a 10-year Apple stock price line chart. Instead of parsing thousands of daily price rows, the chart instantly visualizes the long-term upward trajectory.",
        code: `# Data Visualization with Seaborn
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Load sample data
df = sns.load_dataset("iris")

# Plot scatter plot with regression line
plt.figure(figsize=(6, 4))
sns.regplot(data=df, x="sepal_length", y="sepal_width", color="indigo")

plt.title("Sepal Length vs. Sepal Width")
plt.xlabel("Sepal Length")
plt.ylabel("Sepal Width")
plt.grid(True, linestyle="--", alpha=0.6)
plt.tight_layout()

# Save plot
plt.savefig("iris_scatter.png", dpi=150)
plt.close()`,
        quiz: [
            {
                q: "To visualize the correlation matrix of 10 numeric features, which chart type is most appropriate?",
                options: [
                    "A grouped bar chart.",
                    "A Seaborn heatmap with annotated correlation coefficients.",
                    "A line chart showing cumulative features."
                ],
                correct: 1
            },
            {
                q: "What is the difference between Matplotlib and Seaborn?",
                options: [
                    "Matplotlib is a low-level plotting library; Seaborn is built on top of Matplotlib, providing a high-level interface and superior default aesthetics.",
                    "Seaborn runs on GPUs; Matplotlib runs on CPUs.",
                    "Matplotlib is only for SQL; Seaborn is only for CSVs."
                ],
                correct: 0
            },
            {
                q: "Which Seaborn function is best to display pairwise bivariate distributions across all numerical variables in a DataFrame at once?",
                options: [
                    "sns.jointplot()",
                    "sns.pairplot()",
                    "sns.barplot()"
                ],
                correct: 1
            }
        ]
    },
    "feature-engineering": {
        title: "Feature Engineering",
        theory: "Feature engineering is the process of transforming raw inputs into informative variables that help ML algorithms learn. Techniques include One-Hot Encoding (converting text categories to 1s and 0s), Feature Scaling (StandardScaler), and Dimensionality Reduction (PCA).",
        analystAi: "Analysts select variables based on business logic. AI suggests advanced mathematical transformations (like logarithmic transformations for highly skewed data) and writes scikit-learn preprocessing pipelines.",
        realWorldExample: "A transaction log contains the timestamp '2026-06-28'. Feature engineering extracts two new columns: 'Day_Of_Week: Sunday' and 'Is_Weekend: 1', because customer shopping behavior changes on weekends.",
        code: `# Encoding and Scaling with Scikit-Learn
import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# Sample Data
df = pd.DataFrame({
    'age': [25, 45, 35],
    'city': ['Athens', 'Patras', 'Athens']
})

# 1. Scale numeric feature (Standardization)
scaler = StandardScaler()
df['age_scaled'] = scaler.fit_transform(df[['age']])

# 2. Encode categorical feature (One-Hot Encoding)
encoder = OneHotEncoder(sparse_output=False)
city_encoded = encoder.fit_transform(df[['city']])
print("Scaled Age:")
print(df['age_scaled'].values)
print("\nEncoded Cities:")
print(city_encoded)`,
        quiz: [
            {
                q: "Why is feature scaling (like StandardScaler) essential prior to running algorithms like K-Means or Support Vector Machines (SVM)?",
                options: [
                    "Because these algorithms use distance metrics (like Euclidean distance); features on larger scales would otherwise dominate the model calculations.",
                    "Because scaling reduces the number of columns in the dataset.",
                    "To prevent underfitting on categorical labels."
                ],
                correct: 0
            },
            {
                q: "What is the primary objective of Principal Component Analysis (PCA)?",
                options: [
                    "To target and encode text variables into numeric integers.",
                    "To reduce dataset dimensionality (number of columns) while retaining as much variance as possible.",
                    "To calculate the p-value of regression coefficients."
                ],
                correct: 1
            },
            {
                q: "What danger does target leakage present during feature engineering?",
                options: [
                    "It causes the dataset to double in size.",
                    "It occurs when features include information from the target variable that would not be available at prediction time, causing overfitting.",
                    "It leads to memory leaks in pandas data frames."
                ],
                correct: 1
            }
        ]
    },
    "sql-pandas": {
        title: "SQL & Pandas Integration",
        theory: "SQL is the universal language of database servers, and Pandas is the primary tool for in-memory analysis in Python. Integrating them allows you to extract data via queries, join tables, group records, and perform analytics on large datasets.",
        analystAi: "Data Analysts use SQL to fetch data and Pandas to shape it. AI can instantly translate natural language requests ('find users with total spend > 500') into complex SQL queries or Pandas commands.",
        realWorldExample: "A company joins the 'Orders' database table with the 'Customers' table on a customer_id key to compute how much revenue was generated by users in Greece.",
        code: `# SQL & Pandas Merge and Aggregate Example
import pandas as pd
import sqlite3

# Create tables in local memory SQLite
conn = sqlite3.connect(":memory:")
df_users = pd.DataFrame({'id': [1, 2], 'name': ['Nikos', 'Anna']})
df_orders = pd.DataFrame({'user_id': [1, 1, 2], 'amount': [15.5, 30.0, 50.0]})

df_users.to_sql("users", conn, index=False)
df_orders.to_sql("orders", conn, index=False)

# Query utilizing JOIN and Group By
sql_query = """
SELECT u.name, SUM(o.amount) as total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name
"""
result = pd.read_sql_query(sql_query, conn)
print(result)
conn.close()`,
        quiz: [
            {
                q: "Which SQL join type returns all records from the left table, and matching records from the right table?",
                options: [
                    "INNER JOIN",
                    "LEFT JOIN (or LEFT OUTER JOIN)",
                    "FULL JOIN"
                ],
                correct: 1
            },
            {
                q: "Which Pandas function is mathematically equivalent to an SQL window function (e.g. partition by and aggregate)?",
                options: [
                    "df.groupby().transform()",
                    "df.merge()",
                    "df.pivot_table()"
                ],
                correct: 0
            },
            {
                q: "What is a Common Table Expression (CTE) in SQL?",
                options: [
                    "A temporary result set defined using a 'WITH' clause that makes queries more readable and modular.",
                    "An SQL command used to drop database schemas.",
                    "A tool for creating unique primary keys."
                ],
                correct: 0
            }
        ]
    },
    "credit-risk": {
        title: "Credit Risk ML Project",
        theory: "A cornerstone portfolio project for data professionals. The goal is to predict the probability of a borrower default. It uses classification algorithms like Logistic Regression, Random Forest, or XGBoost.",
        analystAi: "Analysts map predictions to business decisions (e.g., loss reduction). AI assists by recommending algorithms, optimizing parameters, and offering strategies (like SMOTE) to handle class imbalance.",
        realWorldExample: "A digital bank runs a Random Forest classifier in real-time when a user applies for a loan, approving or rejecting the application based on predicted default probability.",
        code: `# Binary Classification with Random Forest
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import numpy as np

# Mock features (Income, Debt Ratio) and target (Default 1/0)
X = np.random.rand(100, 2) * 100
y = np.random.choice([0, 1], size=100, p=[0.8, 0.2])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(X_train, y_train)

preds = model.predict(X_test)
print(classification_report(y_test, preds))`,
        quiz: [
            {
                q: "Why is accuracy a deceptive metric in credit default prediction where only 1% of applicants default?",
                options: [
                    "Because default cases cannot be predicted by numeric algorithms.",
                    "Because a dummy model predicting 'Non-Default' for everyone achieves 99% accuracy while failing to detect any defaults.",
                    "Because accuracy calculations are unstable in scikit-learn."
                ],
                correct: 1
            },
            {
                q: "What does the Recall (Sensitivity) metric represent in Credit Risk classification?",
                options: [
                    "The proportion of actual defaulters that the model successfully identified.",
                    "The proportion of predicted defaults that were actually real defaults.",
                    "The speed at which the model makes prediction calls."
                ],
                correct: 0
            },
            {
                q: "How does the SMOTE technique handle class imbalance in credit default datasets?",
                options: [
                    "By generating synthetic examples of the minority class (defaulters) to balance class distributions.",
                    "By deleting majority class records until classes are equal.",
                    "By adjusting model hyperparameters to penalize errors."
                ],
                correct: 0
            }
        ]
    },
    "email-targeting": {
        title: "Email Targeting & Segmentation",
        theory: "A data-driven marketing project. It scores customers using RFM metrics (Recency, Frequency, Monetary) and segments them into groups (VIPs, Lost, Casuals) using K-Means Clustering.",
        analystAi: "Analysts analyze clusters to target campaigns. AI helps by writing copy for marketing emails tailored to the specific traits of each customer cluster.",
        realWorldExample: "An e-commerce store identifies a cluster of 'Lost VIPs' (users who spent a lot but haven't visited in 6 months) and sends them a targeted 20% discount email to win them back.",
        code: `# K-Means Clustering for Customer Segmentation
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np

# Mock RFM Scores (Recency, Frequency, Monetary)
np.random.seed(42)
rfm_data = np.random.rand(100, 3) * 10

# Initialize and fit K-Means
kmeans = KMeans(n_clusters=3, random_state=42, n_init='auto')
clusters = kmeans.fit_predict(rfm_data)

df_customers = pd.DataFrame(rfm_data, columns=['Recency', 'Frequency', 'Monetary'])
df_customers['Cluster'] = clusters
print(df_customers.groupby('Cluster').mean())`,
        quiz: [
            {
                q: "How is the optimal number of clusters (K) determined mathematically in K-Means?",
                options: [
                    "By selecting K = number of features.",
                    "Using the Elbow Method or Silhouette Score to evaluate cluster cohesion vs. separation.",
                    "By dividing dataset rows by 100."
                ],
                correct: 1
            },
            {
                q: "Which distance metric is typically minimized inside the K-Means clustering algorithm?",
                options: [
                    "Manhattan Distance",
                    "Euclidean Distance (Sum of Squared Errors)",
                    "Cosine Distance"
                ],
                correct: 1
            },
            {
                q: "Why is RFM segmentation a popular choice for customer retention programs?",
                options: [
                    "It calculates exact future purchases.",
                    "It segment users based on transaction history (Recency, Frequency, Monetary) which directly reflects loyalty and lifetime value.",
                    "It automatically sends emails without human setup."
                ],
                correct: 1
            }
        ]
    },
    "time-series": {
        title: "Time Series Analysis",
        theory: "Time Series Analysis deals with data indexed in chronological order (e.g. daily sales). It uses models like ARIMA or Meta's Prophet to forecast future values by extracting trends, seasonality, and cyclic behaviors.",
        analystAi: "Analysts use forecasts for budgeting and demand planning. AI assists by detecting structural shifts in trends and writing automated summary reports about future projections.",
        realWorldExample: "An energy provider forecasts electricity consumption for the upcoming week based on historical load data and weather forecasts, adjusting generation to prevent power outages.",
        code: `# Simple Forecasting with Statsmodels (ARIMA)
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA

# Mock Time Series Data (monthly sales)
np.random.seed(42)
sales = np.sin(np.linspace(0, 20, 50)) * 10 + np.linspace(10, 30, 50) + np.random.normal(0, 2, 50)

# Fit ARIMA model (p=1, d=1, q=1)
model = ARIMA(sales, order=(1, 1, 1))
model_fit = model.fit()

# Forecast next 3 months
forecast = model_fit.forecast(steps=3)
print("Forecasted Sales for next 3 months:", forecast)`,
        quiz: [
            {
                q: "What does 'stationarity' mean in Time Series, and why is it required by models like ARIMA?",
                options: [
                    "It means values do not change over time.",
                    "It means statistical properties (mean, variance, covariance) are constant over time; models require this to make stable future projections.",
                    "It means the data has 100% linear correlation."
                ],
                correct: 1
            },
            {
                q: "What do the components (p, d, q) represent in an ARIMA(p, d, q) model parameter setting?",
                options: [
                    "Predictors, Decisions, Queries",
                    "Autoregressive terms (p), Differencing degree (d), and Moving Average terms (q).",
                    "Probability, Deviation, Quantity"
                ],
                correct: 1
            },
            {
                q: "How does Facebook (Meta) Prophet handle missing timestamps or holiday effects in time series?",
                options: [
                    "It crashes and returns a compilation exception.",
                    "It treats forecasting as an additive regression task, letting users plug in custom holiday parameters and handle irregular intervals natively.",
                    "It interpolates values using standard median scaling."
                ],
                correct: 1
            }
        ]
    },
    "nlp": {
        title: "NLP (Natural Language Processing)",
        theory: "Natural Language Processing (NLP) enables computers to read and understand text. It spans tasks like Sentiment Analysis, text classification, and semantic searches using Transformer architectures (like BERT).",
        analystAi: "Analysts extract insights from user reviews. AI (large language models) is itself an NLP engine, meaning it can classify thousands of customer tickets instantly without training.",
        realWorldExample: "Booking.com scans guest reviews, automatically labeling them as Positive or Negative and highlighting comments specifically regarding 'service', 'cleanliness', or 'location'.",
        code: `# Sentiment Analysis using Hugging Face Transformers
from transformers import pipeline

try:
    # Load sentiment analysis pipeline (downloads model automatically)
    classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")
    
    results = classifier([
        "This product is absolutely amazing, it saved me hours of work!",
        "The battery life is very poor and the screen arrived scratched."
    ])
    
    for res in results:
        print(f"Text Sentiment: {res['label']} (Confidence: {res['score']:.4f})")
except Exception as e:
    print("Please install transformers and pytorch/tensorflow to run. Error:", e)`,
        quiz: [
            {
                q: "What is the Self-Attention mechanism in Transformer models?",
                options: [
                    "A technique that allows the model to calculate connections between all words in a sentence, establishing context regardless of distance.",
                    "An optimizer used to speed up GPU backpropagation.",
                    "A preprocessing script that tokenizes text files."
                ],
                correct: 0
            },
            {
                q: "What represents the 'Tokenization' phase in natural language processing?",
                options: [
                    "Encrypted security key validation.",
                    "Splitting raw text sentences into smaller units like words, subwords, or characters (tokens) that can be mapped to numbers.",
                    "Calculating the TF-IDF score of a text document."
                ],
                correct: 1
            },
            {
                q: "How does TF-IDF score words in a document corpus?",
                options: [
                    "By counting all words equally.",
                    "By penalizing common words (like 'the', 'is') and rewarding rare words that are specific to a document.",
                    "Using a deep neural network backpropagation gradient."
                ],
                correct: 1
            }
        ]
    },
    "deep-learning": {
        title: "Deep Learning",
        theory: "Deep Learning is a subset of ML based on Artificial Neural Networks. Using libraries like PyTorch or TensorFlow/Keras, it excels at learning from unstructured data formats (e.g., images with CNNs, audio with RNNs).",
        analystAi: "Scientists design neural network layers for computer vision tasks. AI assists by writing neural layer configurations, setting weight initializations, and recommending optimizers (like Adam).",
        realWorldExample: "Apple's FaceID unlocking your phone, or self-driving cars (like Tesla) using neural networks to detect road signs, pedestrians, and lane boundaries in real-time.",
        code: `# Simple Neural Network with Keras
import numpy as np
try:
    from tensorflow import keras
    from tensorflow.keras import layers
    
    # Define sequential model
    model = keras.Sequential([
        layers.Dense(10, activation='relu', input_shape=(5,)),
        layers.Dense(1, activation='sigmoid')
    ])
    
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    print("Neural Network Architecture:")
    model.summary()
except ImportError:
    print("Please install tensorflow to run this code snippet.")`,
        quiz: [
            {
                q: "Why is the Backpropagation algorithm essential in neural network training?",
                options: [
                    "It calculates loss function gradients with respect to weights and biases, updating parameters backward to minimize predictions error.",
                    "It rescales dataset values prior to loading them.",
                    "It maps categories to one-hot columns."
                ],
                correct: 0
            },
            {
                q: "Why is the ReLU activation function commonly preferred over Sigmoid in deep hidden layers?",
                options: [
                    "Sigmoid is too slow to compute.",
                    "ReLU helps mitigate the 'vanishing gradient problem' because its derivative is 1 for positive values, preventing gradients from shrinking.",
                    "ReLU normalizes outputs to a [0, 1] range."
                ],
                correct: 1
            },
            {
                q: "Which optimizer combines adaptive learning rates for each parameter with momentum tracking?",
                options: [
                    "Stochastic Gradient Descent (SGD)",
                    "Adam Optimizer",
                    "Mean Squared Error"
                ],
                correct: 1
            }
        ]
    },
    "model-deployment": {
        title: "Model Deployment & MLOps",
        theory: "Training a model is just the beginning. Deployment means exposing it so other apps can consume it. This involves wrapping the model inside a REST API (using FastAPI) and deploying it within a Docker container.",
        analystAi: "Analysts connect BI dashboards to the model API. AI assists by writing Dockerfiles, server configs, and creating interactive demo web applications (using Streamlit).",
        realWorldExample: "Creating a web page where a user enters their income and gets an instant loan approval decision, powered by a deployed machine learning API running in the background.",
        code: `# Deploying a Model API with FastAPI
# Run with: uvicorn main:app --reload
try:
    from fastapi import FastAPI
    import pydantic
    
    app = FastAPI()
    
    class PredictRequest(pydantic.BaseModel):
        income: float
        debt_ratio: float
        
    @app.post("/predict")
    def predict_credit_risk(req: PredictRequest):
        # Imagine loading a trained model and predicting
        risk_score = (req.income * 0.1) - (req.debt_ratio * 0.5)
        decision = "Approved" if risk_score > 0 else "Rejected"
        return {"decision": decision, "score": float(risk_score)}
        
    print("FastAPI app configured successfully.")
except ImportError:
    print("Please install fastapi and uvicorn to deploy this API.")`,
        quiz: [
            {
                q: "What does the Uvicorn package do when deploying a Python FastAPI application?",
                options: [
                    "It translates python commands to SQL.",
                    "It is an ASGI web server implementation that runs and serves the FastAPI application.",
                    "It compiles the scikit-learn model parameters."
                ],
                correct: 1
            },
            {
                q: "In Docker, what is the conceptual difference between an Image and a Container?",
                options: [
                    "An Image is a read-only blueprint template; a Container is a live, executable instance of that image running in memory.",
                    "An Image runs on GPUs; a Container runs on CPUs.",
                    "There is no difference; they are synonymous terms."
                ],
                correct: 0
            },
            {
                q: "What represents Model Drift in production deployments?",
                options: [
                    "The server CPU usage increasing gradually.",
                    "The drop in model performance over time due to changes in real-world data patterns compared to training data.",
                    "Loss of git credentials on the production server."
                ],
                correct: 1
            }
        ]
    },
    "model-evaluation": {
        title: "Model Evaluation & Tuning",
        theory: "Evaluation validates the generalization capability of models. We utilize Cross-Validation to prevent overfitting, Hyperparameter Tuning (Optuna / GridSearchCV) to search parameters, and SHAP for explainable AI.",
        analystAi: "Analysts explain predictions to managers. AI helps by defining hyperparameter ranges, interpreting feature importances, and explaining SHAP outputs.",
        realWorldExample: "For a spam filter, we evaluate how many real emails were blocked (False Positives) vs. how much spam leaked through (False Negatives) to optimize the classification threshold.",
        code: `# Hyperparameter Tuning with GridSearchCV
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np

X = np.random.rand(100, 2)
y = np.random.choice([0, 1], size=100)

# Define grid of parameters to test
param_grid = {
    'n_estimators': [10, 50],
    'max_depth': [3, 5]
}

grid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=3)
grid_search.fit(X, y)

print("Best Parameters found:", grid_search.best_params_)
print("Best Cross-Validation Score:", grid_search.best_score_)`,
        quiz: [
            {
                q: "What is the main drawback of GridSearchCV compared to RandomizedSearchCV or Optuna?",
                options: [
                    "It is computationally expensive and slow because it exhaustively evaluates every possible parameter combination in the grid.",
                    "It yields lower accuracy scores.",
                    "It does not support cross-validation."
                ],
                correct: 0
            },
            {
                q: "What do SHAP (SHapley Additive exPlanations) values represent in Explainable AI (XAI)?",
                options: [
                    "The training time variance of decision trees.",
                    "The contribution of each individual feature to a specific model prediction, based on cooperative game theory.",
                    "The percentage of missing values filled during cleaning."
                ],
                correct: 1
            },
            {
                q: "What is overfitting, and how does a validation dataset help identify it?",
                options: [
                    "When the model performs well on training data but poorly on unseen validation data, indicating it memorized noise.",
                    "When the model runs out of system memory.",
                    "When the test predictions are identical to training inputs."
                ],
                correct: 0
            }
        ]
    },
    "bi": {
        title: "Business Intelligence & A/B Testing",
        theory: "Business Intelligence (BI) bridges analytical data and strategic actions. It involves setting up KPIs, launching interactive dashboards (Tableau, PowerBI), and running statistical A/B tests to measure impact.",
        analystAi: "The Data Analyst is the core BI resource. AI writes SQL queries for dashboard widgets and analyzes A/B test outputs to draft executive summaries for leadership.",
        realWorldExample: "A delivery app serves a red checkout button to 50% of users and a green button to 50% (A/B Test). After a week, analysts run a Z-test to see if the green button significantly increased conversions.",
        code: `# A/B Test Significance Calculation
import numpy as np
from statsmodels.stats.proportion import proportions_ztest

# A/B Test: Click-throughs for layout A and layout B
clicks_A, views_A = 120, 1000
clicks_B, views_B = 160, 1000

count = np.array([clicks_A, clicks_B])
nobs = np.array([views_A, views_B])

# Perform Z-Test for proportions
z_stat, p_val = proportions_ztest(count, nobs)

print(f"Z-statistic: {z_stat:.4f}")
print(f"P-value: {p_val:.4f}")
if p_val < 0.05:
    print("Change in layout B is statistically significant!")
else:
    print("No statistically significant difference detected.")`,
        quiz: [
            {
                q: "What is statistical power in an A/B test setup?",
                options: [
                    "The server load handling capacity.",
                    "The probability of correctly rejecting the null hypothesis when there is an actual difference (avoiding a Type II error).",
                    "The average conversion rate of group B."
                ],
                correct: 1
            },
            {
                q: "Why is a dashboard preferred over a static PDF report in BI?",
                options: [
                    "It allows stakeholders to filter, drill-down, and explore real-time metrics dynamically.",
                    "It has larger file sizes.",
                    "It runs machine learning algorithms automatically."
                ],
                correct: 0
            },
            {
                q: "How does the Minimum Detectable Effect (MDE) impact A/B test sample size calculation?",
                options: [
                    "A smaller MDE requires a much larger sample size to detect subtle conversion differences statistically.",
                    "A smaller MDE requires fewer samples.",
                    "MDE does not affect sample sizes."
                ],
                correct: 0
            }
        ]
    },
    "recommender": {
        title: "Recommender Systems",
        theory: "Recommender systems suggest items to users (like Netflix movies or Amazon products). Techniques include Collaborative Filtering (based on similar user behavior profiles) and Content-Based Filtering.",
        analystAi: "Analysts monitor recommendation conversion rates. AI assists by calculating semantic similarity embeddings for user-product matrix matching at scale.",
        realWorldExample: "Spotify generating a 'Discover Weekly' playlist for you by analyzing what songs other users listened to who share a similar taste profile to you.",
        code: `# Collaborative Filtering Concept (Cosine Similarity)
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# User ratings for 3 movies: [Movie_A, Movie_B, Movie_C]
user_1 = np.array([[5, 4, 1]]) # Likes action, dislikes romance
user_2 = np.array([[5, 5, 0]]) # Highly similar to user 1
user_3 = np.array([[1, 0, 5]]) # Dislikes action, likes romance

# Compute similarity between user 1 and others
sim_1_2 = cosine_similarity(user_1, user_2)[0][0]
sim_1_3 = cosine_similarity(user_1, user_3)[0][0]

print(f"Similarity User 1 & User 2: {sim_1_2:.4f} (High)")
print(f"Similarity User 1 & User 3: {sim_1_3:.4f} (Low)")`,
        quiz: [
            {
                q: "What does the 'Cold Start Problem' represent in Recommender Systems?",
                options: [
                    "The system freezing due to low server temperatures.",
                    "The difficulty in making recommendations for new users or items due to a lack of historical interaction data.",
                    "The latency delay when querying SQL databases."
                ],
                correct: 1
            },
            {
                q: "What is Matrix Factorization (like Singular Value Decomposition - SVD) in collaborative filtering?",
                options: [
                    "Decomposing the sparse user-item interaction matrix into lower-dimensional matrices representing latent user preferences and item features.",
                    "Multiplying all matrix values by a constant scale factor.",
                    "Dropping empty rows inside a rating grid."
                ],
                correct: 0
            },
            {
                q: "What characterizes Content-Based Filtering compared to Collaborative Filtering?",
                options: [
                    "It relies purely on similarity between item metadata attributes (genre, description) and a user's historical profile, ignoring other users.",
                    "It requires a neural network training loop.",
                    "It groups users by location."
                ],
                correct: 0
            }
        ]
    },
    "anomaly": {
        title: "Anomaly Detection",
        theory: "Anomaly Detection identifies patterns that deviate significantly from expected normal behavior. It is vital for Fraud Detection in credit card transactions, using algorithms like Isolation Forest.",
        analystAi: "Analysts investigate false positives to reduce user friction. AI supports by detecting complex fraud patterns and identifying outliers in multi-dimensional datasets.",
        realWorldExample: "A fintech bank blocks a debit card charge of $2,000 in Tokyo, because the user just bought a coffee in Athens 5 minutes prior (geographic anomaly).",
        code: `# Anomaly Detection with Isolation Forest
from sklearn.ensemble import IsolationForest
import numpy as np

# Generate 95 normal records and 5 anomalies
np.random.seed(42)
normal_data = np.random.normal(size=(95, 2))
anomalies = np.random.uniform(low=-4, high=4, size=(5, 2))
data = np.vstack([normal_data, anomalies])

# Fit Isolation Forest (contamination is the expected ratio of outliers)
model = IsolationForest(contamination=0.05, random_state=42)
preds = model.fit_predict(data) # returns -1 for anomalies, 1 for normal

print("Detected Anomalies (indices):", np.where(preds == -1)[0])`,
        quiz: [
            {
                q: "Why is traditional supervised classification challenging for fraud anomaly detection?",
                options: [
                    "Supervised models cannot process numerical transaction data.",
                    "Fraud events are highly rare (imbalanced) and constantly change, making it difficult for models to generalize from labels.",
                    "Fraud datasets cannot be imported into SQL databases."
                ],
                correct: 1
            },
            {
                q: "How does the Isolation Forest algorithm isolate anomalous data points?",
                options: [
                    "By constructing random decision trees; anomalies are isolated closer to the root (shorter average path length) since they are outlying.",
                    "By grouping anomalies into K clusters.",
                    "By sorting data columns in descending order."
                ],
                correct: 0
            },
            {
                q: "What represents the 'contamination' parameter in scikit-learn's IsolationForest?",
                options: [
                    "The percentage of memory leaks in the running container.",
                    "The expected proportion of outliers/anomalies in the dataset, which sets the threshold for anomaly classification.",
                    "The database connection timeout limit."
                ],
                correct: 1
            }
        ]
    }
};

// Directed Acyclic Graph (DAG) Prerequisites definition
const prerequisites = {
    "preprocessing": [],
    "eda": ["preprocessing"],
    "statistics": ["eda"],
    "visualization": ["statistics"],
    "feature-engineering": ["statistics"],
    "sql-pandas": ["statistics"],
    "credit-risk": ["visualization", "feature-engineering", "sql-pandas"],
    "email-targeting": ["visualization", "feature-engineering", "sql-pandas"],
    "time-series": ["credit-risk", "email-targeting"],
    "nlp": ["credit-risk", "email-targeting"],
    "deep-learning": ["credit-risk", "email-targeting"],
    "model-deployment": ["time-series", "nlp", "deep-learning"],
    "model-evaluation": ["time-series", "nlp", "deep-learning"],
    "bi": ["model-deployment", "model-evaluation"],
    "recommender": ["model-deployment", "model-evaluation"],
    "anomaly": ["model-deployment", "model-evaluation"]
};

// State store
let completedModules = [];
let activeModuleKey = "";

// DOM references
const roadmapNodes = document.querySelectorAll(".roadmap-node");
const detailDrawer = document.getElementById("detail-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const resetProgressBtn = document.getElementById("reset-progress-btn");

const drawerTitle = document.getElementById("drawer-title");
const theoryDesc = document.getElementById("theory-desc");
const analystAiDesc = document.getElementById("analyst-ai-desc");
const realWorldExampleDesc = document.getElementById("real-world-example-desc");
const codeBlock = document.getElementById("code-block");
const copyCodeBtn = document.getElementById("copy-code-btn");

const subtabButtons = document.querySelectorAll(".drawer-tab-btn");
const subtabPanels = document.querySelectorAll(".drawer-tab-panel");

// Quiz DOM Elements
const quizQuestionBox = document.getElementById("quiz-question-box");
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const quizFeedbackBox = document.getElementById("quiz-feedback-box");

// Toast elements
const toastContainer = document.getElementById("toast-container");

// Initialize App
function init() {
    loadProgress();
    updateNodeStates();
    setupEventListeners();
}

// Load from LocalStorage
function loadProgress() {
    try {
        const stored = localStorage.getItem("completedModules");
        completedModules = stored ? JSON.parse(stored) : [];
    } catch (e) {
        completedModules = [];
    }
}

// Save to LocalStorage
function saveProgress() {
    try {
        localStorage.setItem("completedModules", JSON.stringify(completedModules));
    } catch (e) {
        console.error("Failed to save progress:", e);
    }
}

// Reset Progress
function resetProgress() {
    completedModules = [];
    saveProgress();
    updateNodeStates();
    closeDrawer();
    showToast("Progress has been reset. Starting over!", "success");
}

// Calculate node states (locked, active, completed) and update DOM classes/badges
function updateNodeStates() {
    roadmapNodes.forEach(node => {
        const moduleKey = node.getAttribute("data-module");
        const badgeContainer = node.querySelector(".status-badge-container");

        // Clear existing state classes
        node.classList.remove("node-locked", "node-active", "node-completed");

        if (completedModules.includes(moduleKey)) {
            // Completed state
            node.classList.add("node-completed");
            badgeContainer.innerHTML = `<span class="status-badge"><i class="fa-solid fa-check"></i> Completed</span>`;
        } else {
            // Check prerequisites
            const reqs = prerequisites[moduleKey] || [];
            const unlocked = reqs.every(prereq => completedModules.includes(prereq));

            if (unlocked) {
                // Active state
                node.classList.add("node-active");
                badgeContainer.innerHTML = `<span class="status-badge"><i class="fa-solid fa-play"></i> Active</span>`;
            } else {
                // Locked state
                node.classList.add("node-locked");
                badgeContainer.innerHTML = `<span class="status-badge"><i class="fa-solid fa-lock"></i> Locked</span>`;
            }
        }
    });
}

// Show custom toast alert
function showToast(message, type = "warning") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-triangle-exclamation";
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Get missing prerequisite titles
function getMissingPrerequisites(moduleKey) {
    const reqs = prerequisites[moduleKey] || [];
    return reqs
        .filter(prereq => !completedModules.includes(prereq))
        .map(prereq => modulesData[prereq]?.title || prereq);
}

// Open detail drawer for a module
function openDrawer(moduleKey) {
    activeModuleKey = moduleKey;
    const data = modulesData[moduleKey];
    if (!data) return;

    // Reset subtabs (default to theory)
    switchSubtab("theory");

    // Populate data
    drawerTitle.innerText = data.title;
    theoryDesc.innerText = data.theory;
    analystAiDesc.innerText = data.analystAi;
    realWorldExampleDesc.innerText = data.realWorldExample;
    codeBlock.innerText = data.code;

    // Render Quiz
    renderQuiz(data.quiz);

    // Open drawer classes
    detailDrawer.classList.add("open");
    drawerOverlay.classList.add("open");
}

// Close detail drawer
function closeDrawer() {
    detailDrawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
    activeModuleKey = "";
}

// Switch drawer sub-tabs (theory, code, quiz)
function switchSubtab(subtabKey) {
    subtabButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-subtab") === subtabKey) {
            btn.classList.add("active");
        }
    });

    subtabPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `subtab-${subtabKey}`) {
            panel.classList.add("active");
        }
    });
}

// Render Quiz questions HTML
function renderQuiz(quizList) {
    quizQuestionBox.innerHTML = "";
    quizFeedbackBox.style.display = "none";
    quizFeedbackBox.className = "quiz-feedback";

    if (!quizList || quizList.length === 0) {
        quizQuestionBox.innerHTML = "<p>No practice quiz available for this module.</p>";
        submitQuizBtn.style.display = "none";
        return;
    }

    submitQuizBtn.style.display = "block";

    quizList.forEach((qItem, qIdx) => {
        let optionsHtml = "";
        qItem.options.forEach((opt, optIdx) => {
            optionsHtml += `
                <label class="quiz-option">
                    <input type="radio" name="question-${qIdx}" value="${optIdx}">
                    <span>${opt}</span>
                </label>
            `;
        });

        const qHtml = `
            <div class="quiz-question" data-correct="${qItem.correct}">
                <p class="quiz-question-title">${qIdx + 1}. ${qItem.q}</p>
                <div class="quiz-option-list">
                    ${optionsHtml}
                </div>
            </div>
        `;
        quizQuestionBox.insertAdjacentHTML("beforeend", qHtml);
    });
}

// Validate Quiz Answers
function validateQuiz() {
    const questions = quizQuestionBox.querySelectorAll(".quiz-question");
    let allCorrect = true;
    let answeredCount = 0;

    questions.forEach((qNode, qIdx) => {
        const correctIdx = parseInt(qNode.getAttribute("data-correct"));
        const selectedRadio = qNode.querySelector(`input[name="question-${qIdx}"]:checked`);

        if (selectedRadio) {
            answeredCount++;
            const selectedIdx = parseInt(selectedRadio.value);
            if (selectedIdx !== correctIdx) {
                allCorrect = false;
            }
        } else {
            allCorrect = false;
        }
    });

    if (answeredCount < questions.length) {
        quizFeedbackBox.innerText = "Please answer all questions before submitting.";
        quizFeedbackBox.className = "quiz-feedback incorrect";
        quizFeedbackBox.style.display = "block";
        return;
    }

    if (allCorrect) {
        quizFeedbackBox.innerText = "Congratulations! All answers are correct! 🎉";
        quizFeedbackBox.className = "quiz-feedback correct";
        
        // Save progress if not already completed
        if (!completedModules.includes(activeModuleKey)) {
            completedModules.push(activeModuleKey);
            saveProgress();
            updateNodeStates();
            showToast(`Unlocked next level: completed ${modulesData[activeModuleKey].title}!`, "success");
            
            // Close drawer after short delay to let user see success message
            setTimeout(() => {
                closeDrawer();
            }, 1500);
        }
    } else {
        quizFeedbackBox.innerText = "Some answers are incorrect. Try again!";
        quizFeedbackBox.className = "quiz-feedback incorrect";
    }
    quizFeedbackBox.style.display = "block";
}

// Setup Event Listeners
function setupEventListeners() {
    // Node click handler
    roadmapNodes.forEach(node => {
        node.addEventListener("click", () => {
            const moduleKey = node.getAttribute("data-module");
            
            // Check if locked
            if (node.classList.contains("node-locked")) {
                const missing = getMissingPrerequisites(moduleKey);
                showToast(`Locked! Complete prerequisites first: ${missing.join(", ")}`, "warning");
                return;
            }
            
            openDrawer(moduleKey);
        });
    });

    // Close button / overlay click
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

    // Reset progress button click
    if (resetProgressBtn) resetProgressBtn.addEventListener("click", resetProgress);

    // Sub-tab switching
    subtabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const subtabKey = btn.getAttribute("data-subtab");
            switchSubtab(subtabKey);
        });
    });

    // Copy Code Block
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                copyCodeBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                setTimeout(() => {
                    copyCodeBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Code`;
                }, 2000);
            });
        });
    }

    // Submit Quiz
    if (submitQuizBtn) {
        submitQuizBtn.addEventListener("click", validateQuiz);
    }
}

// Start
window.addEventListener("DOMContentLoaded", init);
