var tipuesearch = {"pages":[{"url":"./pages/about/","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc","title":"About"},{"url":"./2017spring-cd-W1.html","text":"2017Spring 協同產品設計實習課程 第一週 一. 可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱，老師介紹了Blender 3dstudio maya的相關性，簡略說明c語言與python的優劣與使用時機。 二. 了解如何使用stunnel ，並且嘗試以anonymous（無名氏/遊客）的身份進入https://192.168.1.24/2017springvcp_hw/index。 在按下start之後，會出現錯誤的圖案 (1) ，這是因為stunnel資料夾裡的config/styunnel.conf裡的ip與電腦的ip不同(styunnel.conf裡的分號代表註解)，可至cmd打ipconfig/all的指令，找到電腦的ip位置並將其複製、貼到styunnel.conf裡 (2) ，(443為https的Port號不須修改)，如果有設置proxy就必須要到設定proxy的地方按進階，將電腦ip設為額外ip，這樣就可至google打網址，並且嘗試以anonymous（無名氏/遊客）的身份進入https://192.168.1.24/2017springvcp_hw/index。 (1) (2) 三. 利用python程式碼控制Vrep裡的單連桿作動。 可至 課程倉儲 的data裡下載fourbar_eightbar_solvespace_vrep.7z以及onelink_vrep_remoteapi_pos_vel.7z兩個檔案，解壓縮後會有三個檔案，分別是單連桿、四連桿及八連桿，可試著在solvespace及Vrep裡開啟。 在Vrep裡開啟one_link_robot_remoteAPI.ttt的檔案(ttt是Vrep檔案的副檔名)，在SciTE裡開啟one_link_robot_remoteAPI_joint_target_vel.py的檔案，按下Tool裡的Go即可開始控制單連桿，按Enter會旋轉，按P會暫停。 第一週心得影片 40423245機械設計工程系-協同產品設計實習課程-W1 from 40423245 on Vimeo .","tags":"Course","title":"2017/2/22 W1"}]};