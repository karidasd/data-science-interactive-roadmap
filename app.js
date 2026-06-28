// Database containing details, code, and quizzes for all 16 curriculum modules
const modulesData = {
    "preprocessing": {
        title: "Data Preprocessing & Cleaning",
        theory: "Η προετοιμασία δεδομένων είναι το πρώτο και πιο κρίσιμο βήμα. Περιλαμβάνει τη διαχείριση ελλιπών τιμών (nulls), την αφαίρεση διπλότυπων εγγραφών, τη διόρθωση λαθών στους τύπους δεδομένων και το φιλτράρισμα ακραίων τιμών (outliers). Χωρίς καθαρά δεδομένα, οποιοδήποτε μοντέλο AI θα παράγει λανθασμένα αποτελέσματα (Garbage In, Garbage Out).",
        analystAi: "Ο Data Analyst χρησιμοποιεί βιβλιοθήκες όπως η Pandas για να καθαρίσει δεδομένα. Το AI (όπως ο Claude) μπορεί να αυτοματοποιήσει αυτή τη διαδικασία αναγνωρίζοντας μοτίβα ελλιπών τιμών, προτείνοντας έξυπνες μεθόδους συμπλήρωσης (imputation) και γράφοντας έτοιμο κώδικα καθαρισμού.",
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
                q: "Τι σημαίνει η φράση 'Garbage In, Garbage Out' στο Data Science;",
                options: [
                    "Αν τα δεδομένα εισόδου είναι κακής ποιότητας, τα αποτελέσματα του μοντέλου θα είναι επίσης λανθασμένα.",
                    "Τα μοντέλα AI διαγράφουν αυτόματα τα άχρηστα δεδομένα.",
                    "Η καθαριότητα των δεδομένων πρέπει να γίνεται μόνο στο τέλος του project."
                ],
                correct: 0
            },
            {
                q: "Ποια μέθοδος της Pandas χρησιμοποιείται για τη συμπλήρωση ελλιπών τιμών;",
                options: [
                    "df.dropna()",
                    "df.fillna()",
                    "df.drop_duplicates()"
                ],
                correct: 1
            }
        ]
    },
    "eda": {
        title: "EDA (Exploratory Data Analysis)",
        theory: "Η διερευνητική ανάλυση δεδομένων (EDA) είναι η διαδικασία κατά την οποία ο αναλυτής 'ακούει' τα δεδομένα. Χρησιμοποιεί περιγραφική στατιστική (μέσος όρος, διάμεσος, τυπική απόκλιση) και γραφήματα για να κατανοήσει την κατανομή των τιμών, να εντοπίσει ανωμαλίες και να βρει κρυμμένες συσχετίσεις μεταξύ των μεταβλητών.",
        analystAi: "Ο Data Analyst σχεδιάζει τη στρατηγική EDA για να απαντήσει σε επιχειρηματικά ερωτήματα. Το AI βοηθάει ερμηνεύοντας άμεσα τις στατιστικές κατανομές και προτείνοντας ποιες συσχετίσεις αξίζει να διερευνηθούν περαιτέρω.",
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
                q: "Ποιο είναι το κύριο όφελος της διερευνητικής ανάλυσης δεδομένων (EDA);",
                options: [
                    "Η αυτόματη εκπαίδευση μοντέλων Deep Learning.",
                    "Η κατανόηση της δομής, των κατανομών και των συσχετίσεων των δεδομένων πριν τη μοντελοποίηση.",
                    "Η αποθήκευση των δεδομένων σε SQL βάσεις."
                ],
                correct: 1
            },
            {
                q: "Ποια εντολή της Pandas επιστρέφει το μέσο όρο, την τυπική απόκλιση και τα τεταρτημόρια των αριθμητικών στηλών;",
                options: [
                    "df.info()",
                    "df.head()",
                    "df.describe()"
                ],
                correct: 2
            }
        ]
    },
    "statistics": {
        title: "Στατιστική για Data Science",
        theory: "Η στατιστική παρέχει τα μαθηματικά θεμέλια για τη λήψη αποφάσεων. Περιλαμβάνει τον έλεγχο υποθέσεων (hypothesis testing), τον υπολογισμό των p-values για να δούμε αν ένα εύρημα είναι στατιστικά σημαντικό και την κατανόηση των κατανομών (π.χ. κανονική κατανομή).",
        analystAi: "Οι Data Analysts χρησιμοποιούν στατιστικούς ελέγχους (π.χ. t-test, chi-square) για A/B testing. Το AI βοηθάει εξηγώντας περίπλοκες στατιστικές έννοιες και προτείνοντας τον κατάλληλο έλεγχο ανάλογα με τον τύπο των δεδομένων.",
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
    print("Η διαφορά είναι στατιστικά σημαντική (p < 0.05).")
else:
    print("Δεν υπάρχει στατιστικά σημαντική διαφορά.")`,
        quiz: [
            {
                q: "Τι σημαίνει συνήθως όταν το p-value είναι μικρότερο από 0.05;",
                options: [
                    "Το εύρημα είναι στατιστικά σημαντικό και απορρίπτουμε τη μηδενική υπόθεση.",
                    "Το μοντέλο AI έχει 95% ακρίβεια.",
                    "Υπάρχει μεγάλο σφάλμα στα δεδομένα εισόδου."
                ],
                correct: 0
            },
            {
                q: "Ποιο Python πακέτο χρησιμοποιείται ευρέως για επιστημονικούς και στατιστικούς υπολογισμούς (π.χ. t-test);",
                options: [
                    "matplotlib",
                    "SciPy",
                    "OS"
                ],
                correct: 1
            }
        ]
    },
    "visualization": {
        title: "Data Visualization",
        theory: "Η οπτικοποίηση μετατρέπει τους ξερούς αριθμούς σε ιστορίες. Με εργαλεία όπως η Matplotlib και η Seaborn, σχεδιάζουμε scatter plots για συσχετίσεις, bar charts για συγκρίσεις κατηγοριών και correlation heatmaps για εύρεση γραμμικών σχέσεων.",
        analystAi: "Ο Data Analyst σχεδιάζει καθαρά διαγράμματα για να επικοινωνήσει insights στους stakeholders. Το AI βοηθάει γράφοντας γρήγορα κώδικα μορφοποίησης (formatting) και προτείνοντας χρωματικές παλέτες υψηλής αντίθεσης.",
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
                q: "Ποιο γράφημα είναι το πλέον κατάλληλο για την οπτικοποίηση της γραμμικής συσχέτισης μεταξύ δύο αριθμητικών στηλών;",
                options: [
                    "Bar Chart (Ραβδόγραμμα)",
                    "Scatter Plot (Διάγραμμα Διασποράς)",
                    "Pie Chart (Κυκλικό Διάγραμμα)"
                ],
                correct: 1
            },
            {
                q: "Σε ποια βιβλιοθήκη της Python ανήκει η συνάρτηση heatmap();",
                options: [
                    "Seaborn",
                    "Pandas",
                    "SQL"
                ],
                correct: 0
            }
        ]
    },
    "feature-engineering": {
        title: "Feature Engineering",
        theory: "Το Feature Engineering περιλαμβάνει τη δημιουργία νέων μεταβλητών ή τον μετασχηματισμό των υπαρχουσών για να βοηθηθεί ο αλγόριθμος ML. Παραδείγματα: One-Hot Encoding (για κατηγορικές μεταβλητές), MinMax Scaling (για κανονικοποίηση τιμών) και PCA (για μείωση διαστάσεων).",
        analystAi: "Ο Data Analyst επιλέγει τις κατάλληλες μεταβλητές βάσει business logic. Το AI βοηθάει προτείνοντας μαθηματικούς μετασχηματισμούς (π.χ. log transformation για skewed distributions) και γράφοντας κώδικα scikit-learn.",
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
                q: "Τι επιτυγχάνει το One-Hot Encoding;",
                options: [
                    "Μετατρέπει κατηγορικές μεταβλητές σε δυαδικές στήλες (0 και 1) ώστε να τις επεξεργαστεί το μοντέλο.",
                    "Κανονικοποιεί τις τιμές στο εύρος 0 έως 1.",
                    "Αφαιρεί τις ελλιπείς τιμές από το dataset."
                ],
                correct: 0
            },
            {
                q: "Πότε χρησιμοποιούμε το StandardScaler;",
                options: [
                    "Όταν θέλουμε να διαγράψουμε διπλότυπες γραμμές.",
                    "Όταν θέλουμε να φέρουμε τις αριθμητικές μεταβλητές στην ίδια κλίμακα με μέση τιμή 0 και τυπική απόκλιση 1.",
                    "Για να συνδεθούμε σε βάση δεδομένων SQL."
                ],
                correct: 1
            }
        ]
    },
    "sql-pandas": {
        title: "SQL & Pandas Integration",
        theory: "Η SQL είναι η γλώσσα των βάσεων δεδομένων και η Pandas είναι η γλώσσα της ανάλυσης στη μνήμη. Ο συνδυασμός τους επιτρέπει το φιλτράρισμα, τις ομαδοποιήσεις (groupby), τις συνενώσεις (merges/joins) και τη χρήση παραθυρικών συναρτήσεων (window functions) σε εκατομμύρια γραμμές δεδομένων.",
        analystAi: "Ο Data Analyst συνδυάζει SQL για την άντληση και Pandas για τον μετασχηματισμό. Το AI μπορεί να μεταφράσει άμεσα ερωτήματα φυσικής γλώσσας σε πολύπλοκα SQL Queries με CTEs ή σε Pandas κώδικα.",
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
                q: "Ποια SQL εντολή χρησιμοποιείται για να συνδέσουμε δεδομένα από δύο διαφορετικούς πίνακες βάσει κοινού κλειδιού;",
                options: [
                    "GROUP BY",
                    "JOIN",
                    "ORDER BY"
                ],
                correct: 1
            },
            {
                q: "Ποια μέθοδος της Pandas είναι ισοδύναμη με το SQL JOIN;",
                options: [
                    "pd.concat()",
                    "df.groupby()",
                    "pd.merge()"
                ],
                correct: 2
            }
        ]
    },
    "credit-risk": {
        title: "Credit Risk ML Project",
        theory: "Ένα κλασικό portfolio project για Data Scientists. Σκοπός είναι η πρόβλεψη της πιθανότητας αθέτησης πληρωμής ενός δανείου (Credit Default). Χρησιμοποιεί αλγορίθμους classification όπως Logistic Regression, Random Forest ή XGBoost.",
        analystAi: "Ο Analyst αξιολογεί τις επιχειρηματικές επιπτώσεις (π.χ. μείωση ζημιών). Το AI βοηθάει προτείνοντας μεθόδους για την αντιμετώπιση της ανισορροπίας των κλάσεων (class imbalance) και βελτιστοποιώντας τις υπερπαραμέτρους.",
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
                q: "Ποια μετρική είναι πιο σημαντική σε ένα imbalanced Credit Risk project όπου οι default πελάτες είναι ελάχιστοι;",
                options: [
                    "Ακρίβεια (Accuracy) - γιατί δείχνει το ποσοστό των σωστών προβλέψεων.",
                    "F1-Score / Recall για την κλάση 1 (Default) - για να μη χάσουμε τους πελάτες υψηλού ρίσκου.",
                    "Mean Squared Error (MSE)."
                ],
                correct: 1
            },
            {
                q: "Ποιος από τους παρακάτω αλγορίθμους είναι κατάλληλος για Credit Risk Binary Classification;",
                options: [
                    "K-Means",
                    "XGBoost Classifier",
                    "Linear Regression"
                ],
                correct: 1
            }
        ]
    },
    "email-targeting": {
        title: "Email Targeting & Segmentation",
        theory: "Ένα data-driven project μάρκετινγκ. Χρησιμοποιεί τη μεθοδολογία RFM (Recency, Frequency, Monetary) για να βαθμολογήσει τους πελάτες και τον αλγόριθμο K-Means Clustering για να τους ομαδοποιήσει σε clusters (π.χ. VIPs, Χαμένοι, Ευκαιριακοί).",
        analystAi: "Ο Data Analyst αναλύει τα clusters για να προτείνει καμπάνιες email. Το AI βοηθάει δημιουργώντας προσωποποιημένα κείμενα (email copies) προσαρμοσμένα στις ανάγκες του κάθε cluster πελατών.",
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
                q: "Τι αντιπροσωπεύουν τα αρχικά RFM στο Customer Segmentation;",
                options: [
                    "Random, Forest, Model",
                    "Recency (Πρόσφατη αγορά), Frequency (Συχνότητα), Monetary (Χρηματική αξία)",
                    "Rate, Fraction, Median"
                ],
                correct: 1
            },
            {
                q: "Ο K-Means ανήκει σε ποια κατηγορία Μηχανικής Μάθησης;",
                options: [
                    "Supervised Learning (Επιβλεπόμενη Μάθηση)",
                    "Unsupervised Learning (Μη Επιβλεπόμενη Μάθηση)",
                    "Reinforcement Learning"
                ],
                correct: 1
            }
        ]
    },
    "time-series": {
        title: "Time Series Analysis",
        theory: "Η ανάλυση χρονοσειρών (Time Series) μελετά δεδομένα που έχουν καταγραφεί σε διαδοχικές χρονικές στιγμές (π.χ. ημερήσιες πωλήσεις). Χρησιμοποιεί μοντέλα όπως το ARIMA ή το Prophet της Meta για την πρόβλεψη μελλοντικών τιμών (forecasting) λαμβάνοντας υπόψη την εποχικότητα (seasonality) και την τάση (trend).",
        analystAi: "Ο Analyst χρησιμοποιεί το forecasting για προϋπολογισμούς και αποθέματα. Το AI βοηθάει στην ανίχνευση ξαφνικών αλλαγών στην τάση (trend shifts) και στη σύνταξη επεξηγήσεων για τις προβλέψεις.",
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
                q: "Τι είναι η εποχικότητα (seasonality) σε μια χρονοσειρά;",
                options: [
                    "Η μακροπρόθεσμη ανοδική ή καθοδική κατεύθυνση των δεδομένων.",
                    "Επαναλαμβανόμενες διακυμάνσεις που συμβαίνουν σε συγκεκριμένα χρονικά διαστήματα (π.χ. αυξημένες πωλήσεις κάθε Δεκέμβριο).",
                    "Το τυχαίο σφάλμα στις μετρήσεις."
                ],
                correct: 1
            },
            {
                q: "Ποιο διάσημο open-source εργαλείο για Time Series Forecasting αναπτύχθηκε από τη Meta (Facebook);",
                options: [
                    "TensorFlow",
                    "Prophet",
                    "Pandas"
                ],
                correct: 1
            }
        ]
    },
    "nlp": {
        title: "NLP (Natural Language Processing)",
        theory: "Η επεξεργασία φυσικής γλώσσας (NLP) επιτρέπει στους υπολογιστές να κατανοούν το γραπτό κείμενο. Περιλαμβάνει εργασίες όπως Sentiment Analysis (ανάλυση συναισθήματος), Text Classification και τη χρήση προεκπαιδευμένων μοντέλων Transformer (όπως το BERT) για σημασιολογική κατανόηση.",
        analystAi: "Ο Data Analyst αναλύει κριτικές πελατών ή tweets. Το AI (LLM) είναι το ίδιο ένα προϊόν NLP, οπότε μπορεί να χρησιμοποιηθεί για να ταξινομήσει αυτόματα χιλιάδες κριτήρια με μηδενικό κώδικα (Zero-shot classification).",
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
                q: "Τι είναι το Sentiment Analysis;",
                options: [
                    "Η διαδικασία αυτόματης μετάφρασης κειμένου σε άλλη γλώσσα.",
                    "Η αναγνώριση και ταξινόμηση του συναισθηματικού τόνου ενός κειμένου (θετικός, αρνητικός, ουδέτερος).",
                    "Η μετατροπή φωνής σε γραπτό κείμενο."
                ],
                correct: 1
            },
            {
                q: "Ποια αρχιτεκτονική βαθιάς μάθησης έφερε επανάσταση στο NLP και αποτελεί τη βάση των σημερινών LLMs (όπως το Claude και το GPT);",
                options: [
                    "Convolutional Neural Networks (CNN)",
                    "Transformers",
                    "Linear Regression"
                ],
                correct: 1
            }
        ]
    },
    "deep-learning": {
        title: "Deep Learning (Βαθιά Μάθηση)",
        theory: "Η Βαθιά Μάθηση (Deep Learning) είναι υποκατηγορία του ML που χρησιμοποιεί Πολυεπίπεδα Νευρωνικά Δίκτυα (Artificial Neural Networks). Χρησιμοποιεί βιβλιοθήκες όπως η PyTorch ή η Keras/TensorFlow. Είναι ιδανική για μη δομημένα δεδομένα (unstructured data) όπως εικόνες (CNNs) και ήχο.",
        analystAi: "Οι Data Scientists χρησιμοποιούν Deep Learning για Computer Vision ή περίπλοκες προβλέψεις. Το AI βοηθάει γράφοντας την αρχιτεκτονική του δικτύου (layers) και προτείνοντας βέλτιστους optimizers (π.χ. Adam).",
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
                q: "Ποιος τύπος νευρωνικού δικτύου είναι ο πλέον κατάλληλος για επεξεργασία εικόνας (Computer Vision);",
                options: [
                    "Recurrent Neural Networks (RNN)",
                    "Convolutional Neural Networks (CNN)",
                    "Simple Linear Perceptron"
                ],
                correct: 1
            },
            {
                q: "Ποια είναι η βασική διαφορά του Deep Learning από το κλασικό Machine Learning;",
                options: [
                    "Το Deep Learning δεν απαιτεί καθαρισμό δεδομένων.",
                    "Το Deep Learning χρησιμοποιεί βαθιές αρχιτεκτονικές νευρωνικών δικτύων και μπορεί να κάνει αυτόματα feature extraction από μη δομημένα δεδομένα.",
                    "Το Deep Learning τρέχει μόνο σε SQL βάσεις."
                ],
                correct: 1
            }
        ]
    },
    "model-deployment": {
        title: "Model Deployment & MLOps",
        theory: "Η εκπαίδευση ενός μοντέλου είναι μόνο η αρχή. Model Deployment σημαίνει να κάνουμε το μοντέλο προσβάσιμο σε άλλες εφαρμογές. Συνήθως το 'πακετάρουμε' σε ένα API (χρησιμοποιώντας FastAPI) και το τρέχουμε μέσα σε ένα Docker container για φορητότητα.",
        analystAi: "Ο Data Analyst συνδέει BI εργαλεία (Tableau/PowerBI) με το API του μοντέλου. Το AI βοηθάει γράφοντας τα Dockerfiles, τις ρυθμίσεις του server και δημιουργώντας Web Apps (π.χ. με Streamlit) για παρουσίαση.",
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
                q: "Τι είναι το FastAPI;",
                options: [
                    "Μια βάση δεδομένων SQL.",
                    "Ένα σύγχρονο, γρήγορο framework για τη δημιουργία REST APIs σε Python.",
                    "Ένας αλγόριθμος ταξινόμησης (classification)."
                ],
                correct: 1
            },
            {
                q: "Ποιο είναι το κύριο όφελος της χρήσης του Docker στο Model Deployment;",
                options: [
                    "Εξασφαλίζει ότι το μοντέλο θα τρέχει στο ίδιο απομονωμένο περιβάλλον (container) ανεξάρτητα από το λειτουργικό σύστημα του server.",
                    "Αυξάνει την ακρίβεια (accuracy) του μοντέλου ML.",
                    "Διαγράφει αυτόματα τις ελλιπείς τιμές."
                ],
                correct: 0
            }
        ]
    },
    "model-evaluation": {
        title: "Model Evaluation & Tuning",
        theory: "Η αξιολόγηση περιλαμβάνει τον έλεγχο της ικανότητας γενίκευσης του μοντέλου. Χρησιμοποιούμε Cross-Validation για αποφυγή overfitting, το Hyperparameter Tuning (μέσω Optuna ή GridSearchCV) για εύρεση βέλτιστων παραμέτρων και το SHAP για ερμηνευσιμότητα (Explainable AI).",
        analystAi: "Ο Data Analyst εξηγεί γιατί το μοντέλο πήρε μια απόφαση (χρησιμοποιώντας SHAP values). Το AI βοηθάει προτείνοντας στρατηγικές βελτιστοποίησης (tuning spaces) και εξηγώντας τη σημασία των feature importances.",
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
                q: "Τι επιτυγχάνει η μέθοδος K-Fold Cross-Validation;",
                options: [
                    "Χωρίζει τα δεδομένα σε K μέρη, εκπαιδεύει το μοντέλο K φορές και αξιολογεί τη γενίκευση, αποτρέποντας το overfitting.",
                    "Εκπαιδεύει K διαφορετικούς αλγορίθμους ταυτόχρονα.",
                    "Αυξάνει το μέγεθος του dataset κατά K φορές."
                ],
                correct: 0
            },
            {
                q: "Ποια βιβλιοθήκη Python χρησιμοποιείται για την ερμηνεία των αποφάσεων ενός μοντέλου (Explainable AI);",
                options: [
                    "SciPy",
                    "SHAP",
                    "Docker"
                ],
                correct: 1
            }
        ]
    },
    "bi": {
        title: "Business Intelligence & A/B Testing",
        theory: "Η Επιχειρηματική Ευφυΐα (BI) συνδέει τα δεδομένα με τη λήψη αποφάσεων. Περιλαμβάνει τη δημιουργία KPIs, διαδραστικών dashboards (Tableau, PowerBI, Streamlit) και το σχεδιασμό πειραμάτων A/B Testing για τη μέτρηση της επίδρασης μιας αλλαγής.",
        analystAi: "Ο Data Analyst είναι ο συνδετικός κρίκος BI και διοίκησης. Το AI βοηθάει γράφοντας SQL queries για dashboards και αναλύοντας τα αποτελέσματα των A/B tests για να γράψει executive summaries.",
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
    print("Η αλλαγή στο layout B έφερε στατιστικά σημαντική βελτίωση!")
else:
    print("Η διαφορά δεν είναι στατιστικά σημαντική.")`,
        quiz: [
            {
                q: "Ποιος είναι ο κύριος σκοπός ενός πειράματος A/B Testing;",
                options: [
                    "Η εκπαίδευση νευρωνικών δικτύων.",
                    "Η σύγκριση δύο εκδόσεων (A και B) για τη μέτρηση της στατιστικά σημαντικής διαφοράς σε ένα KPI (π.χ. conversion rate).",
                    "Η δημιουργία αντιγράφων ασφαλείας της βάσης."
                ],
                correct: 1
            },
            {
                q: "Ποιο εργαλείο BI χρησιμοποιείται ευρέως για drag-and-drop οπτικοποιήσεις και dashboards;",
                options: [
                    "FastAPI",
                    "Tableau / PowerBI",
                    "Scipy"
                ],
                correct: 1
            }
        ]
    },
    "recommender": {
        title: "Recommender Systems",
        theory: "Τα συστήματα συστάσεων (Recommender Systems) προτείνουν προϊόντα ή περιεχόμενο στους χρήστες (όπως το Netflix ή το Amazon). Χρησιμοποιούν μεθόδους όπως Collaborative Filtering (συνεργατικό φιλτράρισμα βάσει κοινών προτιμήσεων χρηστών) και Content-Based Filtering.",
        analystAi: "Ο Analyst μετράει το Conversion Rate των προτάσεων. Το AI βοηθάει δημιουργώντας embeddings (διανύσματα) χρηστών και προϊόντων για να υπολογίσει τη σημασιολογική ομοιότητα σε δισεκατομμύρια εγγραφές.",
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

print(f"Similarity User 1 & User 2: {sim_1_2:.4f} (Υψηλή)")
print(f"Similarity User 1 & User 3: {sim_1_3:.4f} (Χαμηλή)")`,
        quiz: [
            {
                q: "Πώς λειτουργεί το Collaborative Filtering;",
                options: [
                    "Κάνει προτάσεις σε έναν χρήστη βασιζόμενο στις προτιμήσεις άλλων παρόμοιων χρηστών.",
                    "Προτείνει προϊόντα τυχαία.",
                    "Αναλύει μόνο τα τεχνικά χαρακτηριστικά του προϊόντος χωρίς να κοιτάει άλλους χρήστες."
                ],
                correct: 0
            },
            {
                q: "Ποια μαθηματική μετρική χρησιμοποιείται συχνά για να μετρηθεί η ομοιότητα προτιμήσεων μεταξύ δύο χρηστών;",
                options: [
                    "Mean Absolute Error (MAE)",
                    "Cosine Similarity (Ομοιότητα Συνημιτόνου)",
                    "P-value"
                ],
                correct: 1
            }
        ]
    },
    "anomaly": {
        title: "Anomaly Detection",
        theory: "Η ανίχνευση ανωμαλιών (Anomaly Detection) εντοπίζει μοτίβα που αποκλίνουν σημαντικά από τη φυσιολογική συμπεριφορά. Χρησιμοποιείται κυρίως για ανίχνευση απάτης (Fraud Detection) σε τραπεζικές συναλλαγές, χρησιμοποιώντας αλγορίθμους όπως το Isolation Forest.",
        analystAi: "Ο Data Analyst αναλύει τα ψευδώς θετικά αποτελέσματα (false positives) για να μειώσει την ενόχληση των πελατών. Το AI βοηθάει ανιχνεύοντας σε πραγματικό χρόνο περίπλοκες, μεταβαλλόμενες τακτικές απάτης.",
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
                q: "Ποια είναι η βασική αρχή λειτουργίας του αλγορίθμου Isolation Forest;",
                options: [
                    "Απομονώνει τις ανωμαλίες επειδή απαιτούνται λιγότερες τυχαίες διαιρέσεις (splits) για να διαχωριστούν από τα φυσιολογικά δεδομένα.",
                    "Εκπαιδεύει ένα βαθύ νευρωνικό δίκτυο με εικόνες.",
                    "Υπολογίζει το p-value κάθε στήλης."
                ],
                correct: 0
            },
            {
                q: "Σε ποια περίπτωση είναι κρίσιμη η χρήση Anomaly Detection;",
                options: [
                    "Στο Customer Segmentation.",
                    "Στην ανίχνευση κλοπής πιστωτικών καρτών (Fraud Detection) και κυβερνοεπιθέσεων.",
                    "Στη δημιουργία standard Excel πινάκων."
                ],
                correct: 1
            }
        ]
    }
};

// DOM references
const roadmapNodes = document.querySelectorAll(".roadmap-node");
const detailDrawer = document.getElementById("detail-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const closeDrawerBtn = document.getElementById("close-drawer-btn");

const drawerTitle = document.getElementById("drawer-title");
const theoryDesc = document.getElementById("theory-desc");
const analystAiDesc = document.getElementById("analyst-ai-desc");
const codeBlock = document.getElementById("code-block");
const copyCodeBtn = document.getElementById("copy-code-btn");

const subtabButtons = document.querySelectorAll(".drawer-tab-btn");
const subtabPanels = document.querySelectorAll(".drawer-tab-panel");

// Quiz DOM Elements
const quizQuestionBox = document.getElementById("quiz-question-box");
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const quizFeedbackBox = document.getElementById("quiz-feedback-box");

let activeModuleKey = "";

// Initialize App
function init() {
    setupEventListeners();
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
        quizQuestionBox.innerHTML = "<p>Δεν υπάρχει διαθέσιμο κουίζ για αυτό το μάθημα.</p>";
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
        quizFeedbackBox.innerText = "Παρακαλώ απαντήστε σε όλες τις ερωτήσεις πριν την υποβολή.";
        quizFeedbackBox.className = "quiz-feedback incorrect";
        quizFeedbackBox.style.display = "block";
        return;
    }

    if (allCorrect) {
        quizFeedbackBox.innerText = "Συγχαρητήρια! Όλες οι απαντήσεις είναι σωστές! 🎉";
        quizFeedbackBox.className = "quiz-feedback correct";
    } else {
        quizFeedbackBox.innerText = "Κάποιες απαντήσεις είναι λανθασμένες. Ξαναπροσπάθησε!";
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
            openDrawer(moduleKey);
        });
    });

    // Close button / overlay click
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

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
                copyCodeBtn.innerHTML = `<i class="fa-solid fa-check"></i> Αντιγράφηκε!`;
                setTimeout(() => {
                    copyCodeBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Αντιγραφή`;
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
