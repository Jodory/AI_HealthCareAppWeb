
import React from "react";

import { Home, PlayArrow } from '@mui/icons-material';
import './stopwatch.css';


function StopWatch(){
    return(

   <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"></link>
    <a href="./Join" class="material-icons" id="home"><Home></Home></a>
    <div class="main-start">
        <div class="main"></div>
        <PlayArrow id="main-text" className="material-icons"></PlayArrow>

        
        <select name="timeset" class="timeset" id="select1" onchange="alert_select_value(this);">
        <option value="">알림시간선택</option>
        <option value="10">10초</option>
        <option value="15">15초</option>
        <option value="30">30초</option>
        <option value="45">45초</option>
        <option value="60">1분</option>
    </select>
    </div>

     <div id="watch">
         <h1 id="stopwatch">
             00:00:00
         </h1>
         <div>
             <div class="stop">
                 <span class="material-icons" id="start">play_circle</span>
                 <span class="material-icons" id="pause">pause_circle_filled</span>
                 <span class="material-icons" id="reset">restart_alt</span>
             </div>
             <div class="record">
             </div>
         </div>
     </div>

<input type="checkbox" id="navInput"/>
    
     <label class="openbtn" for="navInput">
     <div id="openbtn-top"></div>
     <div id="openbtn-mid"></div>
     <div id="openbtn-bot"></div>
   </label>

     <div id="nav">
         <a href="#">
             <h1>내 정보</h1>
             <div className="info">
                 <span class="material-icons" id="human">human</span>
                 <br/>
                 <span>Lv 21</span>
                 <br/>
                 <span>김근육</span>
                 <br/>
                 <span>#프로틴중독 #운동마스터</span>
             </div>
         </a>
         <a href="./login.html">마이페이지</a>
         <a href="./index.html">스톱워치</a>
         <a href="./facereader.html">운동관상알아보기</a>
         <a href="./Login/main.html">로그인페이지(수정중)</a>
         <a href="#">커뮤니티(예정)</a>
         <a href="#">캘린더(예정)</a>
         <a href="#">자세교정(예정)</a>
         <a href="#">칼로리계산(예정)</a>
         <a href="#">눈바디알아보기(예정)</a>
         <a href="#">음식칼로리계산(예정)</a>
         <a href="#">운동MBTI(예정)</a>


     </div>
 </div>

    );
}

export default StopWatch;