from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, auth, firestore

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("firebase-adminsdk.json")  # Make sure this file exists
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route("/")
def home():
    return "✅ Flask Backend Connected to Firebase"

@app.route("/api/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        print("📥 Received signup data:", data)

        # Check for required fields
        required_fields = ["email", "password", "firstName", "lastName", "college", "year", "department", "skillsToTeach", "skillsToLearn"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400

        # Create user in Firebase Authentication
        user = auth.create_user(
            email=data["email"],
            password=data["password"]
        )

        # Store full user profile in Firestore
        user_doc = {
            "uid": user.uid,
            "email": data["email"],
            "firstName": data.get("firstName"),
            "lastName": data.get("lastName"),
            "college": data.get("college"),
            "year": data.get("year"),
            "department": data.get("department"),
            "skillsToTeach": data.get("skillsToTeach"),
            "skillsToLearn": data.get("skillsToLearn"),
            "availability": data.get("availability", "not specified"),
            "created_at": firestore.SERVER_TIMESTAMP
        }

        db.collection("users").document(user.uid).set(user_doc)

        print("✅ User created successfully:", user.uid)
        return jsonify({"uid": user.uid, "message": "User created successfully"}), 200

    except Exception as e:
        print("❌ Signup error:", str(e))
        return jsonify({"error": str(e)}), 400

@app.route("/api/users", methods=["GET"])
def get_users():
    try:
        users = db.collection("users").stream()
        result = []
        for doc in users:
            data = doc.to_dict()
            data["uid"] = doc.id

            if "email" in data and "skillsToTeach" in data and "skillsToLearn" in data:
                result.append(data)

        return jsonify(result), 200

    except Exception as e:
        print("❌ Fetch users error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
