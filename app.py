from flask import (Flask, render_template, request,
                   jsonify, send_from_directory, Response)
from rdflib import Graph, Literal, RDF, URIRef, Namespace, BNode  # basic RDF handling
from rdflib.namespace import FOAF, XSD, RDFS  # most common namespaces

app = Flask(__name__,
            static_folder='client/build', static_url_path='')

g = Graph()
g.parse('rent.ttl', format='turtle')


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/api/prices")
def prices():
    type = request.args.get('type')
    code = request.args.get('code')

    qpart0 = """
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    select distinct ?stat ?value where {  
    """
    qpart1 = '    ?s <http://example.org/{}/> ?o. '.format(type)
    qpart2 = """     
        ?o <http://example.org/stat/> ?stat .
    """
    qpart3 = '    ?o <http://example.org/AreaCode/> "{}". '.format(code)
    qpart4 = """        
        ?o rdf:value ?value    
    } 
    """
    query = qpart0 + qpart1 + qpart2 + qpart3 + qpart4
    print(query)

    results = g.query(query)

    toPass = []
    for row in results:
        toPass.append((row.stat, row.value))
    return jsonify(toPass)


if __name__ == '__main__':
    app.run()
