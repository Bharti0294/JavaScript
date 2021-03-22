/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function checkCondition(){
              var i=10;
              switch(i) {
                case 5:
                 document.getElementById('p1').innerHTML = "Value is 5";
                break;
                case 10:
                  document.getElementById('p1').innerHTML = "Value is 10";
                 break;
                 case 15:
                   document.getElementById('p1').innerHTML = "Value is 15";
                  break;
                 case 20:
                    document.getElementById('p1').innerHTML = "Value is 20";
                   break;
                  default:
                    document.getElementById('p1').innerHTML = "No value match";
                   }
 }  