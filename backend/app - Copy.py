from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), 'classifica.db')

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS classifica (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            punteggio INTEGER NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()  # <--- AGGIUNGI QUESTA RIGA QUI

@app.route('/api/classifica', methods=['GET'])
def get_classifica():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT nome, punteggio FROM classifica')
    rows = c.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/leaderboard')
def get_leaderboard():
    data = [
        {
            "tournament": "Sidesword Open",
            "results": [
                {"initials": "AF", "medal": "🥇", "name": "Alvina Frassi", "flag": "🇮🇹", "id": "12123"},
                {"initials": "FD", "medal": "🥈", "name": "Fabrizio Danese", "flag": "🇮🇹", "id": "12123"},
                {"initials": "MC", "medal": "🥉", "name": "Massimiliano Cappello", "flag": "🇮🇹", "id": "12123"}
            ]
        },
        {
            "tournament": "Longsword Open",
            "results": [
                {"initials": "AF", "medal": "🥇", "name": "Alvina Frassi", "flag": "🇮🇹", "id": "12123"},
                {"initials": "FD", "medal": "🥈", "name": "Fabrizio Danese", "flag": "🇮🇹", "id": "12123"},
                {"initials": "MC", "medal": "🥉", "name": "Massimiliano Cappello", "flag": "🇮🇹", "id": "12123"}
            ]
        }
        # Puoi aggiungere altri tornei qui
    ]
    return jsonify(data)


@app.route('/api/classifica', methods=['POST'])
def save_classifica():
    try:
        data = request.json
        print("📥 Dati ricevuti dal client:", data)

        if not isinstance(data, list):
            return jsonify({'status': 'error', 'message': 'Formato non valido'}), 400

        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute('DELETE FROM classifica')

        for row in data:
            if isinstance(row, list) and len(row) == 2:
                nome = str(row[0]).strip()
                try:
                    punteggio = int(row[1])
                except (ValueError, TypeError):
                    punteggio = 0  # default in caso di errore
                c.execute('INSERT INTO classifica (nome, punteggio) VALUES (?, ?)', (nome, punteggio))

        conn.commit()
        conn.close()
        return jsonify({'status': 'ok'})

    except Exception as e:
        print("❌ Errore durante il salvataggio:", e)
        return jsonify({'status': 'error', 'message': str(e)}), 500


#if __name__ == '__main__':
#    init_db()
#    app.run()
