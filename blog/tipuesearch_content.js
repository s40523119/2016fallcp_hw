var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌","tags":"misc"},{"url":"./dan-xian-xuan-zhuan-dong-hua.html","title":"單線旋轉動畫","text":"單線旋轉動畫: window.onload=function(){ brython(1); } from browser import document from browser import window from browser import timer import math canvas = document[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (200, 200) 座標點 ctx.moveTo(200, 200) # 然後畫直線到 (200, 300) 座標點 ctx.lineTo(200, 300) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() circle(200, 200, 5)","tags":"Course"},{"url":"./xin-nian-kuai-le.html","title":"新年快樂","text":"2017 年元旦快樂 首先了解 random 亂數模組的用法 然後利用 random 模組產生一個介於 1-100 的整數, 列印在網頁上. window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"(可能重複)恭喜中獎!\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生 1-49 整數亂數 (可能重複) from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"(可能重複)恭喜中獎!\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生 1-49 整數亂數 (可能重複) 因為上述程式可能會產生相同的號碼, 改用 random.sample() , 使其產生六個不同的整數!! from browser import document from browser import html import random print_location = document[\"newyear\"] def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location <= num_list[i] + html.BR() print_location <= \"(不會重複)恭喜中獎!\" + html.BR() document[\"but2\"].bind(\"click\", lottery) (不會重複)恭喜中獎 from browser import document from browser import html import random print_location = document[\"newyear\"] def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location <= num_list[i] + html.BR() print_location <= \"(不會重複)恭喜中獎!\" + html.BR() document[\"but2\"].bind(\"click\", lottery) 恭喜中獎 以下建立一個猜數字遊戲: from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 以下則利用程式執行猜數字遊戲: 利用程式玩猜數字 from browser import document from browser import html import random id4 = document[\"id4\"] def autoguess(ev): 執行次數 = 100 總猜測次數 = 0 for i in range(執行次數): id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 標準答案 = random.randint(下限, 上限) pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) document[\"but4\"].bind(\"click\", autoguess) from browser import document from browser import html import random id4 = document[\"id4\"] def autoguess(ev): 執行次數 = 100 總猜測次數 = 0 for i in range(執行次數): id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 標準答案 = random.randint(下限, 上限) pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) document[\"but4\"].bind(\"click\", autoguess) 利用程式玩猜數字","tags":"Course"},{"url":"./w15-lian-xi.html","title":"w15 練習","text":"window.onload=function(){ brython(1); } from browser import document from browser import alert <script type=\"text/python3\"> from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 取輸入後, 列印出來","tags":"Misc"},{"url":"./w14-lian-xi.html","title":"W14 練習","text":"以下為第十四週開始的程式練習, 要利用 http://mde.tw/2016fallcp/course/Python3Programs.txt 中的內容, 整理 Brython 的用法. window.onload=function(){ brython(1); } from browser import document as doc container = doc['ex1'] container <= \"W14 練習\" from browser import document as doc from browser import html container = doc['ex2'] mystring = input(\"要印出甚麼字串?\") mynum = input(\"要印幾次?\") for i in range(int(mynum)): #container <= \"W14 練習-2\" + html.BR() container <= mystring + html.BR()","tags":"Misc"},{"url":"./w10-brython-hui-tu-fan-li.html","title":"W10 Brython 繪圖範例","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math import re # 準備繪圖畫布 canvas = doc[\"japanflag3\"] container = doc[\"container3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 1 與 A7 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"A7\", 100, 70) ctx.arc(50, 50, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 45, 55) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(50, 80, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 45, 85) ctx.fill() ctx.stroke() ctx.closePath() # 4 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(50, 110, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"4\", 45, 115) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(50, 140, 7, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 170, 7, 0, 2*math.pi, False) ctx.moveTo(44, 164) ctx.lineTo(56, 176) ctx.moveTo(56, 164) ctx.lineTo(44, 176) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ''' # 以下將 canvas 畫布內容轉為 img tag, 並且顯示在 container 物件 img = canvas.toDataURL(\"image/png\") # 利用 re.sub, 將原本要直接開圖檔的 data:image 標頭, 改為 data:application/octet-stream, 可直接下載存檔 # 使用 re 模組之前必須先 import re img = re.sub(\"&#94;data:image\\/[&#94;;]\", \"data:application/octet-stream\", img) # 宣告 anchor markup attribute download, 可以指定下載儲存檔名 container <= html.A(\"save image\", href=img, download=\"guitar_chord.png\") ''' 請注意, 開發 Brython 程式時, 建議使用 Firefox 開啟網誌, 因為反應速度較 Chrome 快速. 請各組利用上列程式範例片段, 完成下列和弦繪圖: ''' from browser import document from browser.timer import request_animation_frame import math import time canvas = document['stage'] ctx = canvas.getContext('2d') ticks = 0 x = 0.0 def mouse_moved(ev): global x new_x = ev.clientX - (canvas.width / 2) + 25 if new_x > 50 and new_x < canvas.width - 100: x = new_x canvas.bind(\"mousemove\", mouse_moved) def clear(): ctx.save() ctx.setTransform(1, 0, 0, 1, 0, 0) ctx.clearRect(0, 0, canvas.width, canvas.height) ctx.restore() def draw(): global ticks ticks += 1 clear() y = (150 * math.sin(ticks / 50)) + 150 ctx.fillStyle = \"blue\" ctx.fillRect(x, y, 100.0, 100.0) ctx.fill() def animate(i): global id id = request_animation_frame(animate) draw() animate(0) '''","tags":"Course"},{"url":"./2016fall-cp-qi-zhong-lian-xi.html","title":"2016Fall CP 期中練習","text":"從 IPV6 相關 RFCs 查詢 得到的資料中, 如何在各組的網誌中整理一份能夠連結到各個未過時 (non-obsolete) 的 RFC 文件? 參考程式碼: data = open(\"midterm_list.txt\").read() line_list = data.splitlines() count = 0 for line in line_list: each_line_list = line.split(\"\\t\") try: if \"Obsoleted\" in each_line_list[5]: count = count + 1 print(each_line_list[0]) except: pass print(count) 接下來使用 Brython 程式碼, 將程式執行結果直接顯示在網頁上. 尚未失效的 IPV6 相關 RFC 如下: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../midterm_list.txt\").read() line_list = data.splitlines() count = 0 output = \"\" for line in line_list: each_line_list = line.split(\"\\t\") try: if \"Obsoleted\" not in each_line_list[5]: count = count + 1 output += html.A(each_line_list[0], href=\"http://www.rfc-editor.org/info/\"+ each_line_list[0].lower().replace(\" \", \"\")) + \" | \" if count%10 == 0: output += html.BR() except: pass output += html.BR() + html.BR() + \"共有 \" + str(count)+ \" 份文件尚未失效!\" container <= output 提供上述結果的 Brython 程式如下: from browser import document, html container = document['container'] data = open(\"./../midterm_list.txt\").read() line_list = data.splitlines() count = 0 output = \"\" for line in line_list: each_line_list = line.split(\"\\t\") try: if \"Obsoleted\" not in each_line_list[5]: count = count + 1 output += html.A(each_line_list[0], href=\"http://www.rfc-editor.org/info/\"+ each_line_list[0].lower().replace(\" \", \"\")) + \" | \" if count%10 == 0: output += html.BR() except: pass output += html.BR() + html.BR() + \"共有 \" + str(count)+ \" 份文件尚未失效!\" container <= output","tags":"Misc"},{"url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html","title":"2016Fall 簡報與網誌系統","text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","tags":"Misc"}]};