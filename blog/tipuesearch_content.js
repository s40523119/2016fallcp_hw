var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About","tags":"misc"},{"text":"window.onload=function(){ brython(1); } from browser import document from browser import alert <script type=\"text/python3\"> from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 取輸入後, 列印出來","url":"./w15-lian-xi.html","title":"w15 練習","tags":"Misc"},{"text":"以下為第十四週開始的程式練習, 要利用 http://mde.tw/2016fallcp/course/Python3Programs.txt 中的內容, 整理 Brython 的用法. window.onload=function(){ brython(1); } from browser import document as doc container = doc['ex1'] container <= \"W14 練習\" from browser import document as doc from browser import html container = doc['ex2'] mystring = input(\"要印出甚麼字串?\") mynum = input(\"要印幾次?\") for i in range(int(mynum)): #container <= \"W14 練習-2\" + html.BR() container <= mystring + html.BR()","url":"./w14-lian-xi.html","title":"W14 練習","tags":"Misc"},{"text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html","title":"2016Fall 簡報與網誌系統","tags":"Misc"}]};