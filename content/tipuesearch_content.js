var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week1~5', 'text': 'week1 : \n 登入自己的github帳戶，並且創建"cd2020"的個人倉儲。 \n 用cmsimde建立網站 \n 步驟: \n \n week2 : \n 更新可攜系統下的python 3.7.3至python 3.8.2 \n 1.進入官網下載區 :\xa0 https://www.python.org/downloads/windows/ \n 2. 下載\xa0 Windows x86-64 executable installer \n \n 3.安裝pyehon 3.8.3 ，安裝時不勾選pip \n \n 4.安裝時到自己可攜的data 新增一個資料夾叫py383，安裝路徑選此處201906_fall\\data\\py383 \n \n 5. \xa0用Scite.exe  更改執行檔start_mdecourse.bat，將py373全部取代成py383 \n \n 6.執行python get-pip.py和python -m pip install flask flask-cors markdown lxml bs4 pelican leo \n week3 : \n Assignment 1: \n Due March 25, 2020 for class 2a and March 26, 2020 for class 2b. \n \n \n Describe how to do an efficient random grouping for this course or do the roll calling randomly? \n \n \n Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n \n \n What do you need to know from \xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0 to implement a four-wheeled robot? \n \n \n \n 分工內容: \n 40523253 :  亂數分組程式 40623117 :  亂數分組程式 40623252 :  4輪車 40723221 (group leader) :  4輪車 40723222 :  4輪車 40723228 :  亂數分組程式 40723236 :  4輪車 40723237 :  可攜系統 40723240 :  4輪車 40723243 :  4輪車 40723244 :  可攜系統 40723249 :  可攜系統 40732331 :  4輪車\xa0 \n W2直播中我分配的是亂數分組 \n 將班級名單網址貼到DartPad上執行即可亂數分組 \n DartPad : \n https://dartpad.github.io/embed-html.html?gh_owner=mdecourse&gh_repo=cd2020&gh_path=downloads/dart_ex/even_grouping&theme=dark \n 設計二乙名單: \n https://s1.mde.nfu.edu.tw:7443/?semester=1082&courseno=0780 \n \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~10', 'text': "week6 : \n week6直播紀錄 : \n \n 分工名單 : \n topic 0 翻譯 : 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic 1 翻譯 : 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n Assignment 2: \n Due April 22, 2020 for class 2a and April 23, 2020 for class 2b. \n \n \n According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's four wheeled robot. \n \n \n What do you need to know from \xa0 https://cyberbotics.com/doc/guide/index \xa0 to implement a four-wheeled robot? \n \n \n 翻譯跟Assignment 2 放在cd2020/downloads下 \n \n \n week6課堂亂抽查報告 : \n \n week7 : \n \n \n \n \n \n week8 : \n 安裝這三個模組 \n pip install opencv-python \n pip install imutils \n pip install nump \n \n week8亂數抽查會議記錄 : \n \n 將leo更新至6.2.1版本以解決舊版的bug \n 卸載舊版leo \n pip uninstall \n 安裝6.2.1版leo \n pip install leo==6.2.1 \n \n \n week9 : \n 期中報告影片 (week1至今所有成果10分鐘影片報告) :\xa0 \n 雲端影片網址 (限制需要要有虎科大信箱才能觀看) : \n https://drive.google.com/file/d/1MCifVtJXgrAvC1EF82zbhwGSUwn30RFl/view \n \n \n \n", 'tags': '', 'url': 'week6~10.html'}]};