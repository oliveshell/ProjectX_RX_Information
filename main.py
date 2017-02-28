# -*- coding: utf-8 -*-
from flask import request, Flask, render_template, redirect, url_for,session     
import time,datetime
app = Flask(__name__)  
#from docx import Document
#from docx.shared import Inches                                                    
import weibo_spider_search as spider                                             
import py2wordtest as wordutil

app.secret_key = 'rongxun_program'


                  

@app.route('/', methods=['POST', 'GET'])                          
def index():                                                                                      
    return render_template('index.html')  

@app.route('/search', methods=['POST', 'GET'])                          
def search(): 
	import xlrd,os,json
	search_result = []
	if request.args:
		dateConfig = GetSearchTimeConfig(request.args)
		# key = request.args.get('search_input')
		# key = key.encode('utf-8').decode('utf-8')
		# mspider = spider.Spider('username','password',key)
		# mspider.GetSearchContent(key,dateConfig[0],dateConfig[1])
	try:
		#try using the spider with search content,search time,usename,password
		#use the default temporly
		key = '江小白'
		key = request.args.get('search_input')
		key = key.encode('utf-8').decode('utf-8')
		mspider = spider.Spider('username','password',key)
		mspider.GetSearchContent(key,dateConfig[0],dateConfig[1])
		while mspider.parseSuccess==True:
			file = xlrd.open_workbook('./crawl_output_YS.xls')
			sheet= file.sheets()[0]
			nrows=sheet.nrows
			ncols = sheet.ncols
			for rownum in range(1,sheet.nrows):
				temp = [sheet.cell(rownum,0).value,sheet.cell(rownum,4).value,sheet.cell(rownum,6).value,sheet.cell(rownum,5).value]
				search_result.append(temp)
			mspider.parseSuccess = False
			wordutil.createWord()
		# #if spider error,open the default file
		# file = xlrd.open_workbook('./crawl_output_YS.xls')
		# sheet= file.sheets()[0]
		# nrows=sheet.nrows
		# ncols = sheet.ncols
		# for rownum in range(1,sheet.nrows):
		# 	temp = [sheet.cell(rownum,0).value,sheet.cell(rownum,4).value,sheet.cell(rownum,6).value,sheet.cell(rownum,5).value]
		# 	search_result.append(temp)
	except:
		pass
	#print search_result
	return json.dumps(search_result)

def GetSearchTimeConfig(req):
	start_date = req.get('start',None)
	end_date = req.get('end',None)
	import time,datetime
	start = start_date.split('/')
	end = end_date.split('/')
	
	start_time = datetime.datetime(int(start[2]),int(start[0]),int(start[1]),0)
	end_time = datetime.datetime(int(end[2]),int(end[0]),int(end[1]),0)
	result = [start_time,end_time]
	print result
	return result


if __name__ == '__main__':                                                 
    app.run('0.0.0.0', 8888,debug=True) 



