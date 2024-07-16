from flask import Flask
from flask_cors import CORS #this is used for cross origin requests as they are blocked by the browser.
import pymysql

app = Flask(__name__)
CORS(app)

@app.route("/api/recommendations", methods=["GET"])
def get_recommendations():
    db = pymysql.connect(
        host="localhost", user="root", password="jignesh",db="My_Portfolio", autocommit=True
        )
    cursor = db.cursor()

    query = "SELECT * FROM recommendations WHERE onShowcase=True;"
    cursor.execute(query)
    recommendations = cursor.fetchall()

    results = []
    for recommendation in recommendations:
        recommendation_obj = {
            "id" : recommendation[0],
            "name": recommendation[1],
            "email": recommendation[2],
            "company": recommendation[3],
            "designation": recommendation[4],
            "message": recommendation[5],
        }
        results.append(recommendation_obj)
    
    cursor.close()
    db.close()
    return {"isSuccessful":True, "results": results}