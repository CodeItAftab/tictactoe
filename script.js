var k = document.querySelector('.home');
var c =document.querySelector('.container');
var g = document.getElementById('r-text');
var a=k.classList;
var b=c.classList;
var pinfo=document.querySelector('.player-info');
var result = document.getElementById('result');
var dtext='';


function f1(){
   a.toggle('position');
   b.toggle('position');
   [en11,en12,en13,en21,en22,en23,en31,en32,en33]=[0,0,0,0,0,0,0,0,0];
   click=[0,0,0,0,0,0,0,0,0];
    move=1;
    draw=0;
    win=0;
    
    document.getElementById('btn-1').innerHTML='';
    document.getElementById('btn-2').innerHTML='';
    document.getElementById('btn-3').innerHTML='';
    document.getElementById('btn-4').innerHTML='';
    document.getElementById('btn-5').innerHTML='';
    document.getElementById('btn-6').innerHTML='';
    document.getElementById('btn-7').innerHTML='';
    document.getElementById('btn-8').innerHTML='';
    document.getElementById('btn-9').innerHTML='';
    document.getElementById('result').innerHTML='';
    
    computerPlayer.innerHTML='Player 2:';
    player.innerHTML='Player 1:';
    score1=0;
    score2=0;
    p1score.innerHTML=score1;
    p2score.innerHTML=score2;
}


var gameMode=0;

var computerPlayer=document.getElementById('player-2');
var player=document.getElementById('player-1');


function singlePlayer(){
   gameMode=1;
   f1();
   computerPlayer.innerHTML='Comp:';
   player.innerHTML='You:';
   console.log('single');
   dtext='Single Player';
   result.innerHTML=dtext;
}

function multiPlayer(){
   gameMode=2;
   f1();
   result.innerHTML='Multi Player';
   console.log('multi')
   dtext='Multi Player';
   result.innerHTML=dtext;
   
   
}





//game logic


function mode(){
    gameMode=0;
    console.log('in gameMode function');
    dtext='';
}

var score1=0;
var score2=0;
var p1score=document.getElementById('score-1');
var p2score=document.getElementById('score-2');

let [en11,en12,en13,en21,en22,en23,en31,en32,en33]=[0,0,0,0,0,0,0,0,0];

let move=1;

let btn1=document.getElementById('btn-1');
let btn2=document.getElementById('btn-2');
let btn3=document.getElementById('btn-3');
let btn4=document.getElementById('btn-4');
let btn5=document.getElementById('btn-5');
let btn6=document.getElementById('btn-6');
let btn7=document.getElementById('btn-7');
let btn8=document.getElementById('btn-8');
let btn9=document.getElementById('btn-9');
let y=10;
let x=10;

let random;
let next_corner;

let arr=[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
// let arrbtn=[y,en11,en12,en13,en21,en22,en23,en31,en32,en33];


let win=0;
let draw=0;
let blank="";
let click=[0,0,0,0,0,0,0,0,0];

function gameDraw(){
    if(move>9&&win==0){
        document.getElementById('result').innerHTML='Game Draw...';
        draw++;
    }
}

function ComInp(){
    if(move==2 && (en11==2||en13==2||en31==2|en33==2)&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(move==4&&en22==1&&((en11==2&&en33==2)||(en13==2&&en31==2)&&win==0&&move<10)){

        let mid=Math.floor(1+3*(Math.random()));
        switch(mid){
            case 1:
                document.getElementById('btn-2').innerHTML='<h1>X</h1>';
                en12=1;
                move++;
                check();
                break;

            case 2:
                document.getElementById('btn-4').innerHTML='<h1>X</h1>';
                en21=1;
                move++;
                check();
                break;

            case 3:
                document.getElementById('btn-6').innerHTML='<h1>X</h1>';
                en23=1;
                move++;
                check();
                break;

            case 4:
                document.getElementById('btn-8').innerHTML='<h1>X</h1>';
                en32=1;
                move++;
                check();
                break;




        }
        
        
    }
    else if(move==2&&en22==2 &&win==0&&move<10){
        let corner=Math.floor(1+(4*Math.random()));
        console.log(corner)
        switch(corner){
            case 1:
                document.getElementById('btn-1').innerHTML='<h1>X</h1>';
                en11=1;
                next_corner=1;
                move++;
                check();
                break;

            case 2:
                document.getElementById('btn-3').innerHTML='<h1>X</h1>';
                en13=1;
                next_corner=2;
                move++;
                check();
                break;

            case 3:
                document.getElementById('btn-7').innerHTML='<h1>X</h1>';
                en31=1;
                next_corner=3;
                move++;
                check();
                break;

            case 4:
                document.getElementById('btn-9').innerHTML='<h1>X</h1>';
                en33=1;
                next_corner=4;
                move++;
                check();
                break;




        }
    }
    else if(move==4&&en22==2&&((en11==1&&en33==2)||(en33==1&&en11==2)||(en31==1&&en13==2)||(en13==1&&en31==2))&&win==0&&move<10){
        switch(next_corner){
            case 1:
                if(en33==2&&en11==1){
                    let a=Math.floor(1+2*Math.random())
                    if(a==1){
                        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
                        en13=1;
                        move++;
                        check();
                    }
                    else{
                        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
                        en31=1;
                        move++;
                        check();
                    }

                }

            case 2:
                if(en31==2&&en13==1){
                    let b=Math.floor(1+2*Math.random())
                    if(b==1){
                        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
                        en11=1;
                        move++;
                        check();
                    }
                    else{
                        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
                        en33=1;
                        move++;
                        check();
                    }

                }

            case 3:
                if(en13==2&&en31==1){
                    let c= Math.floor((1+2*Math.random()))
                    if(c==1){
                        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
                        en11=1;
                        move++;
                        check();
                    }
                    else{
                        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
                        en33=1;
                        move++;
                        check();
                    }

                }

            case 4:
                if(en11==2&&en33==1){
                    let d=Math.floor(1+2*Math.random())
                    if(d==1){
                        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
                        en13=1;
                        move++;
                        check();
                    }
                    else{
                        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
                        en31=1;
                        move++;
                        check();
                    }

                }
        }
    }
    else  if(en11==1&&en12==1&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else if(en11==1&&en13==1&&en12==0&&win==0&&move<10){
        document.getElementById('btn-2').innerHTML='<h1>X</h1>';
        en12=1;
        move++;
        check();
    }
    else if(en13==1&&en12==1&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en21==1&&en22==1&&en23==0&&win==0&&move<10){
        document.getElementById('btn-6').innerHTML='<h1>X</h1>';
        en23=1;
        move++;
        check();
    }
    else if(en21==1&&en23==1&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en22==1&&en23==1&&en21==0&&win==0&&move<10){
        document.getElementById('btn-4').innerHTML='<h1>X</h1>';
        en21=1;
        move++;
        check();
    }
    else if(en31==1&&en33==1&&en32==0&&win==0&&move<10){
        document.getElementById('btn-8').innerHTML='<h1>X</h1>';
        en32=1;
        move++;
        check();
    }
    else if(en31==1&&en32==1&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en32==1&&en32==1&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en11==1&&en21==1&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en11==1&&en31==1&&en21==0&&win==0&&move<10){
        document.getElementById('btn-4').innerHTML='<h1>X</h1>';
        en21=1;
        move++;
        check();
    }
    else if(en31==1&&en21==1&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en12==1&&en22==1&&en32==0&&win==0&&move<10){
        document.getElementById('btn-8').innerHTML='<h1>X</h1>';
        en32=1;
        move++;
        check();
    }
    else if((en32==1)&&(en12==1)&&(en22==0)&&win==0&&move<10){

        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en22==1&&en32==1&&en12==0&&win==0&&move<10){
        document.getElementById('btn-2').innerHTML='<h1>X</h1>';
        en12=1;
        move++;
        check();
    }
    else if(en13==1&&en33==1&&en23==0&&win==0&&move<10){
        document.getElementById('btn-6').innerHTML='<h1>X</h1>';
        en23=1;
        move++;
        check();
    }
    else if(en13==1&&en23==1&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en23==1&&en33==1&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else if(en11==1&&en22==1&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en11==1&&en33==1&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en33==1&&en22==1&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en13==1&&en22==1&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en13==1&&en31==1&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en31==1&&en22==1&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else if(en11==2&&en12==2&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else if(en11==2&&en13==2&&en12==0&&win==0&&move<10){
        document.getElementById('btn-2').innerHTML='<h1>X</h1>';
        en12=1;
        move++;
        check();
    }
    else if(en13==2&&en12==2&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en21==2&&en22==2&&en23==0&&win==0&&move<10){
        document.getElementById('btn-6').innerHTML='<h1>X</h1>';
        en23=1;
        move++;
        check();
    }
    else if(en21==2&&en23==2&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en22==2&&en23==2&&en21==0&&win==0&&move<10){
        document.getElementById('btn-4').innerHTML='<h1>X</h1>';
        en21=1;
        move++;
        check();
    }
    else if(en31==2&&en33==2&&en32==0&&win==0&&move<10){
        document.getElementById('btn-8').innerHTML='<h1>X</h1>';
        en32=1;
        move++;
        check();
    }
    else if(en31==2&&en32==2&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en32==2&&en32==2&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en11==2&&en21==2&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en11==2&&en31==2&&en21==0&&win==0&&move<10){
        document.getElementById('btn-4').innerHTML='<h1>X</h1>';
        en21=1;
        move++;
        check();
    }
    else if(en31==2&&en21==2&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en12==2&&en22==2&&en32==0&&win==0&&move<10){
        document.getElementById('btn-8').innerHTML='<h1>X</h1>';
        en32=1;
        move++;
        check();
    }
    else if(en12==2&&en32==2&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en22==2&&en32==2&&en12==0&&win==0&&move<10){
        document.getElementById('btn-2').innerHTML='<h1>X</h1>';
        en12=1;
        move++;
        check();
    }
    else if(en13==2&&en33==2&&en23==0&&win==0&&move<10){
        document.getElementById('btn-6').innerHTML='<h1>X</h1>';
        en23=1;
        move++;
        check();
    }
    else if(en13==2&&en23==2&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en23==2&&en33==2&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else if(en11==2&&en22==2&&en33==0&&win==0&&move<10){
        document.getElementById('btn-9').innerHTML='<h1>X</h1>';
        en33=1;
        move++;
        check();
    }
    else if(en11==2&&en33==2&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en33==2&&en22==2&&en11==0&&win==0&&move<10){
        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
        en11=1;
        move++;
        check();
    }
    else if(en13==2&&en22==2&&en31==0&&win==0&&move<10){
        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
        en31=1;
        move++;
        check();
    }
    else if(en13==2&&en31==2&&en22==0&&win==0&&move<10){
        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
        en22=1;
        move++;
        check();
    }
    else if(en31==2&&en22==2&&en13==0&&win==0&&move<10){
        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
        en13=1;
        move++;
        check();
    }
    else{

        random=Math.floor(1+(9*Math.random()));
        console.log(random);
        if(move<10 && win==0&&random<10){ 
            switch(random){
                case 1:
                    if(en11==0){

                        document.getElementById('btn-1').innerHTML='<h1>X</h1>';
                        en11=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                case 2:
                    if(en12==0){

                        document.getElementById('btn-2').innerHTML='<h1>X</h1>';
                        en12=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;
                 
                case 3:
                    if(en13==0){

                        document.getElementById('btn-3').innerHTML='<h1>X</h1>';
                        en13=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                case 4:
                    if(en21==0){

                        document.getElementById('btn-4').innerHTML='<h1>X</h1>';
                        en21=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                case 5:
                    if(en22==0){

                        document.getElementById('btn-5').innerHTML='<h1>X</h1>';
                        en22=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;
                 
                case 6:
                    if(en23==0){
                        
                        document.getElementById('btn-6').innerHTML='<h1>X</h1>';
                        en23=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                case 7:
                    if(en31==0){
                        
                        document.getElementById('btn-7').innerHTML='<h1>X</h1>';
                        en31=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                case 8:
                    if(en32==0){

                        document.getElementById('btn-8').innerHTML='<h1>X</h1>';
                        en32=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;
                 
                case 9:
                    if(en33==0){
                        document.getElementById('btn-9').innerHTML='<h1>X</h1>';

                        en33=1;
                        move++;
                        check();
                    }
                    else{
                        ComInp();
                    }
                    break;

                default:
                    if(move<10){
                        ComInp();
                    }




            }  
            console.log('Inside if block');
            console.log(en11,en12,en13,en21,en22,en23,en31,en32,en33);
            // check();
            
        }
        else{
            if(move<10 && win==0 ){
                ComInp();
            }
        }

    }
    
    







        
}




function check(){
    console.log(en11,en12,en13,en21,en22,en23,en31,en32,en33);
    console.log('move is '+(move-1))
     if(en11>0&&en12>0&&en13>0&&((en11==en12&&en11==en13)||(en12==en11&&en12==en13)||(en13==en11&&en13==en12))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en21>0&&en22>0&&en23>0&&((en21==en22&&en21==en23)||(en22==en21&&en22==en23)||(en23==en21&&en23==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en31>0&&en32>0&&en33>0&&((en31==en32&&en31==en33)||(en32==en31&&en32==en33)||(en33==en31&&en33==en32))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en11>0&&en21>0&&en31>0&&((en11==en21&&en11==en31)||(en21==en11&&en21==en31)||(en31==en11&&en31==en21))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en12>0&&en22>0&&en32>0&&((en12==en22&&en12==en32)||(en22==en12&&en22==en32)||(en32==en12&&en32==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en13>0&&en23>0&&en33>0&&((en13==en23&&en13==en33)||(en23==en13&&en23==en33)||(en33==en13&&en33==en23))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en11>0&&en22>0&&en33>0&&((en11==en22&&en11==en33)||(en22==en11&&en22==en33)||(en33==en11&&en33==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en13>0&&en22>0&&en31>0&&((en13==en22&&en13==en31)||(en22==en13&&en22==en31)||(en31==en13&&en31==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='You Win';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Computer Wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }

    gameDraw();

    
}


function check2(){
    if(en11>0&&en12>0&&en13>0&&((en11==en12&&en11==en13)||(en12==en11&&en12==en13)||(en13==en11&&en13==en12))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en21>0&&en22>0&&en23>0&&((en21==en22&&en21==en23)||(en22==en21&&en22==en23)||(en23==en21&&en23==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en31>0&&en32>0&&en33>0&&((en31==en32&&en31==en33)||(en32==en31&&en32==en33)||(en33==en31&&en33==en32))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en11>0&&en21>0&&en31>0&&((en11==en21&&en11==en31)||(en21==en11&&en21==en31)||(en31==en11&&en31==en21))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en12>0&&en22>0&&en32>0&&((en12==en22&&en12==en32)||(en22==en12&&en22==en32)||(en32==en12&&en32==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en13>0&&en23>0&&en33>0&&((en13==en23&&en13==en33)||(en23==en13&&en23==en33)||(en33==en13&&en33==en23))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en11>0&&en22>0&&en33>0&&((en11==en22&&en11==en33)||(en22==en11&&en22==en33)||(en33==en11&&en33==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }
    if(en13>0&&en22>0&&en31>0&&((en13==en22&&en13==en31)||(en22==en13&&en22==en31)||(en31==en13&&en31==en22))){
        if(move%2==0){
            document.getElementById('result').innerHTML='Player-1 wins';
            win=1;
            score1++;
            p1score.innerHTML=score1;
            
        }
        else{
            document.getElementById('result').innerHTML='Player-2 wins';
            win=1;
            score2++;
            p2score.innerHTML=score2;
            
        }
    }

    gameDraw();

    
}





function PlayAgain(){
[en11,en12,en13,en21,en22,en23,en31,en32,en33]=[0,0,0,0,0,0,0,0,0];
click=[0,0,0,0,0,0,0,0,0];
    move=1;
    draw=0;
    win=0;
    
    document.getElementById('btn-1').innerHTML='';
    document.getElementById('btn-2').innerHTML='';
    document.getElementById('btn-3').innerHTML='';
    document.getElementById('btn-4').innerHTML='';
    document.getElementById('btn-5').innerHTML='';
    document.getElementById('btn-6').innerHTML='';
    document.getElementById('btn-7').innerHTML='';
    document.getElementById('btn-8').innerHTML='';
    document.getElementById('btn-9').innerHTML='';
    document.getElementById('result').innerHTML='';
    
    result.innerHTML=dtext;
}



    







function f11(){
    if(en11==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-1').innerHTML='<h1>O</h1>';
            en11=2;
            click[0]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en11==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-1').innerHTML='<h1>X</h1>';
            en11=1;
        }
        else{
            document.getElementById('btn-1').innerHTML='<h1>O</h1>';
            en11=2;
        }
        move++;
        check2();
    }

    
    
    
}


function f12(){
    if(en12==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-2').innerHTML='<h1>O</h1>';
            en12=2;
            click[1]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en12==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-2').innerHTML='<h1>X</h1>';
            en12=1;
        }
        else{
            document.getElementById('btn-2').innerHTML='<h1>O</h1>';
            en12=2;
        }
        move++;
        check2();
    }
    
}

function f13(){
    if(en13==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-3').innerHTML='<h1>O</h1>';
            en13=2;
            click[2]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en13==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-3').innerHTML='<h1>X</h1>';
            en13=1;
        }
        else{
            document.getElementById('btn-3').innerHTML='<h1>O</h1>';
            en13=2;
        }
        move++;
        check2();
    }


    
}

function f21(){
    if(en21==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-4').innerHTML='<h1>O</h1>';
            en21=2;
            click[3]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en21==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-4').innerHTML='<h1>X</h1>';
            en21=1;
        }
        else{
            document.getElementById('btn-4').innerHTML='<h1>O</h1>';
            en21=2;
        }
        move++;
        check2();
    }
    
}


function f22(){
    if(en22==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-5').innerHTML='<h1>O</h1>';
            en22=2;
            click[4]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en22==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-5').innerHTML='<h1>X</h1>';
            en22=1;
        }
        else{
            document.getElementById('btn-5').innerHTML='<h1>O</h1>';
            en22=2;
        }
        move++;
        check2();
    }
    
}

function f23(){
    if(en23==0&&win==0&&draw==0 && gameMode===1){
        
            document.getElementById('btn-6').innerHTML='<h1>O</h1>';
            en23=2;
            click[5]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en23==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-6').innerHTML='<h1>X</h1>';
            en23=1;
        }
        else{
            document.getElementById('btn-6').innerHTML='<h1>O</h1>';
            en23=2;
        }
        move++;
        check2();
    }
    
}

function f31(){
    if(en31==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-7').innerHTML='<h1>O</h1>';
            en31=2;
            click[6]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en31==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-7').innerHTML='<h1>X</h1>';
            en31=1;
        }
        else{
            document.getElementById('btn-7').innerHTML='<h1>O</h1>';
            en31=2;
        }
        move++;
        check2();
    }
    
}

function f32(){
    if(en32==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-8').innerHTML='<h1>O</h1>';
            en32=2;
            click[7]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }
    else if(en32==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-8').innerHTML='<h1>X</h1>';
            en32=1;
        }
        else{
            document.getElementById('btn-8').innerHTML='<h1>O</h1>';
            en32=2;
        }
        move++;
        check2();
    }
    
}

function f33(){
    if(en33==0&&win==0&&draw==0 && gameMode===1){
            document.getElementById('btn-9').innerHTML='<h1>O</h1>';
            en33=2;
            click[8]=1;
            move++;
            setTimeout(ComInp,300);
            check();
    }

    else if(en33==0&&win==0&&draw==0 && gameMode===2){
        if(move%2==0){
            document.getElementById('btn-9').innerHTML='<h1>X</h1>';
            en33=1;
        }
        else{
            document.getElementById('btn-9').innerHTML='<h1>O</h1>';
            en33=2;
        }
        move++;
        check2();
    }
    
}

if(en11>0&&en12>0&&en13>0&&((en11==en12&&en11==en13)||(en12==en11&&en12==en13)||(en13==en11&&en13==en12))){
    if(move%2==0){
        document.write('Player-1 wins');
    }
}


function home(){
    document.write()
}
    







