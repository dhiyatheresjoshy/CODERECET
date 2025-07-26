from flask import Blueprint, request, jsonify
from app.firebase_config import db

bp = Blueprint('auth', _name_, url_prefix='/api/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')

    # Check if user exists
    users_ref = db.collection('users')
    existing_user = users_ref.where('email', '==', email).get()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 409

    # Add new user
    users_ref.add(data)
    return jsonify({'message': 'User registered successfully'}), 201