# -*- coding: utf-8 -*-
from flask import request, Flask, render_template, redirect, url_for,session     
import time,datetime
app = Flask(__name__)                                                      
                                                 


app.secret_key = 'test_program'


                  

@app.route('/', methods=['POST', 'GET'])                          
def index():                                                                                      
    return render_template('index.html')  






if __name__ == '__main__':                                                 
    app.run('0.0.0.0', 8889,debug=True) 



