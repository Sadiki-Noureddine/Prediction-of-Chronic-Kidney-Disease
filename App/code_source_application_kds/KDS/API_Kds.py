from flask import Flask, request, redirect, url_for, flash, jsonify
import warnings
warnings.filterwarnings('ignore')
import json
import pickle as p
import pandas as pd
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


filename = 'model_random_new.pkl'

loaded_model = p.load(open(filename, 'rb'))

#cette fonction fait l'écoute à des requettes http envoyé par la méthode Post
@app.route("/api/kidney_disease", methods=['POST'])
def predict():
    #la récopération des ndonnés envoyé par l'utlisation par json 
    content = request.get_json() 
    #adapter les donnés récuperés à le format de prédection de notre modéle 
    case = [
        content["age"],
        content["blood_pressure"],
        content["specific_gravity"],
        content["albumin"],
        content["sugar"],
        content["red_blood_cells"],
        content["pus_cell"],
        content["pus_cell_clumps"],
        content["bacteria"],
        content["blood_glucose_random"],
        content["blood_urea"],
        content["serum_creatinine"],
        content["sodium"],
        content["potassium"],
        content["white_blood_cell_count"],
        content["red_blood_cell_count"],
        content["hypertension"],
        content["diabetes_mellitus"],
        content["coronary_artery_disease"],
        content["appetite"],
        content["pedal_edema"],
        content["anemia"]
    ]
    
    #la préparation de réponse http qui contient la réponce de résultat de prédection 
    result = {'result': int(loaded_model.predict([case])[0])}
    print(result)
    return jsonify(result)

# cette fonction ci dessous nous permet de lancer application 
if __name__ == '__main__':
    
    app.run(debug=True)
    

