from flask import Flask, jsonify
from flask_pymongo import PyMongo
from routes.tracker_routes import tracker_bp
from routes.todo_routes import todo_bp
from routes.reports_routes import reports_bp

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/focusflow"
mongo = PyMongo(app)

# Attach mongo and db to app context
app.mongo = mongo
app.db = mongo.db

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "API working!"})

# Register blueprint
app.register_blueprint(tracker_bp, url_prefix="/api/tracker")
app.register_blueprint(todo_bp)
app.register_blueprint(reports_bp, url_prefix='/api/reports')

if __name__ == '__main__':
    print("Available Routes:")
    for rule in app.url_map.iter_rules():
        print(rule)
    app.run(debug=True)












