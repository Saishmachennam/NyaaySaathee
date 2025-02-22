import os
import requests
import pandas as pd
import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS
from dotenv import load_dotenv


# Load API Key
load_dotenv()
API_KEY = os.getenv("GOOGLE_AI_API_KEY")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load CSV data
advocates_df = pd.read_csv("advocates_5000.csv")
cases_df = pd.read_csv("Large_Legal_Cases_Data.csv")

# Load spaCy NLP model for location extraction
nlp = spacy.load("en_core_web_sm")

def extract_location(text):
    """Extract location (city/state) from the given text using spaCy's Named Entity Recognition (NER)."""
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ in ["GPE", "LOC"]:  # GPE (Geopolitical Entity) and LOC (Location)
            return ent.text
    return None

def query_google_ai(prompt):
    """Query Google AI API for a chatbot response."""
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
    headers = {"Content-Type": "application/json"}
    params = {"key": API_KEY}
    data = {"contents": [{"parts": [{"text": prompt}]}]}

    response = requests.post(url, headers=headers, json=data, params=params)
    return response.json()

def classify_case_and_suggest(prompt):
    """Find case category, applicable acts, and suggest lawyers."""
    prompt_lower = prompt.lower()

    # Identify case category
    case_category = None
    for category in cases_df["Case_Category"].unique():
        if any(word in prompt_lower for word in category.lower().split()):
            case_category = category
            break

    if not case_category:
        return "I couldn't determine the legal category. Please provide more details."

    # Get relevant acts
    relevant_acts = cases_df[cases_df["Case_Category"] == case_category]["ACTS"].unique().tolist()

    return f"Your case falls under **{case_category}**.\n\nApplicable Acts:\n" + "\n".join(relevant_acts)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message", "")

        # Generate AI response
        ai_response = query_google_ai(user_message)
        ai_text_response = ai_response["candidates"][0]["content"]["parts"][0]["text"]

        # Check if it's legal-related and classify case
        legal_info = classify_case_and_suggest(user_message)

        response = f"{ai_text_response}\n\n{legal_info}"
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"}), 400

if __name__ == "__main__":
    app.run(debug=True)