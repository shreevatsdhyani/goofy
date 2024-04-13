from flask import Flask, request, jsonify
from flask_cors import CORS
import searcheng

app = Flask(__name__)
CORS(app)
@app.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('query')
    num_tracks = int(request.args.get('num_tracks', 5))
    return jsonify(searcheng.search(query,num_tracks))

if __name__ == '__main__':
    app.run(debug=True)
