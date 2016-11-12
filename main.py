# -*- coding: utf-8 -*-
from flask import request, Flask, render_template, redirect, url_for,session     
import time,datetime
app = Flask(__name__)  
from docx import Document
from docx.shared import Inches                                                    
                                                 


app.secret_key = 'test_program'


                  

@app.route('/', methods=['POST', 'GET'])                          
def index():                                                                                      
    return render_template('index.html')  

@app.route('/search', methods=['POST', 'GET'])                          
def search(): 
	import xlrd,os,json
	search_result = []
	try:
		file = xlrd.open_workbook('./crawl_output_YS.xls')
		sheet= file.sheets()[0]
		nrows=sheet.nrows
		ncols = sheet.ncols
		for rownum in range(1,sheet.nrows):
			temp = [sheet.cell(rownum,0).value,sheet.cell(rownum,4).value,sheet.cell(rownum,6).value,sheet.cell(rownum,8).value]
			search_result.append(temp)
	except:
		pass
	print search_result
	return json.dumps(search_result)




if __name__ == '__main__':                                                 
    app.run('0.0.0.0', 8889,debug=True) 



