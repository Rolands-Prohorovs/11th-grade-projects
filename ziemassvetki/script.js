let punkti=0;
function Pareizi(){
  document.getElementById("1jautajums").innerHTML="<h3>Pareizi:)</h3>";
  punkti++;
  document.getElementById("atb1_1").disabled = true;
  document.getElementById("atb1_2").disabled = true;
  document.getElementById("atb1_3").disabled = true;
}
function Nepareizi(){
   document.getElementById("1jautajums").innerHTML="<h3>Nepareizi:(</h3>";
  document.getElementById("atb1_1").disabled = true;
  document.getElementById("atb1_2").disabled = true;
  document.getElementById("atb1_3").disabled = true;
}
function Pareizi2(){
   document.getElementById("2jautajums").innerHTML="<h3>Pareizi:)</h3>"
  punkti++;
  document.getElementById("atb2_1").disabled = true;
  document.getElementById("atb2_2").disabled = true;
  document.getElementById("atb2_3").disabled = true;
}
function Nepareizi2(){
   document.getElementById("2jautajums").innerHTML="<h3>Nepareizi:(</h3>"
  document.getElementById("atb2_1").disabled = true;
  document.getElementById("atb2_2").disabled = true;
  document.getElementById("atb2_3").disabled = true;
}
function Pareizi3(){
    document.getElementById("3jautajums").innerHTML="<h3>Pareizi:)</h3>"
  punkti++;
   document.getElementById("atb3_1").disabled = true;
   document.getElementById("atb3_2").disabled = true;
   document.getElementById("atb3_3").disabled = true;
}
function Nepareizi3(){
   document.getElementById("3jautajums").innerHTML="<h3>Nepareizi:(</h3>"
  document.getElementById("atb3_1").disabled = true;
  document.getElementById("atb3_2").disabled = true;
  document.getElementById("atb3_3").disabled = true;
}
 function Pareizi4(){
   document.getElementById("4jautajums").innerHTML="<h3>Pareizi:)</h3>"
   punkti++;
  document.getElementById("atb4_1").disabled = true;
  document.getElementById("atb4_2").disabled = true;
  document.getElementById("atb4_3").disabled = true;
}
function Nepareizi4(){
   document.getElementById("4jautajums").innerHTML="<h3>Nepareizi:(</h3>"
  document.getElementById("atb4_1").disabled = true;
  document.getElementById("atb4_2").disabled = true;
  document.getElementById("atb4_3").disabled = true;
}
function Pareizi5(){
   document.getElementById("5jautajums").innerHTML="<h3>Pareizi:)</h3>"
  punkti++;
  document.getElementById("atb5_1").disabled = true;
  document.getElementById("atb5_2").disabled = true;
  document.getElementById("atb5_3").disabled = true;
}
function Nepareizi5(){
   document.getElementById("5jautajums").innerHTML="<h3>Nepareizi:(</h3>"
  document.getElementById("atb5_1").disabled = true;
  document.getElementById("atb5_2").disabled = true;
  document.getElementById("atb5_3").disabled = true;
}
function Pareizi6(){
   document.getElementById("6jautajums").innerHTML="<h3>Pareizi:)</h3>"
  punkti++;
  document.getElementById("atb6_1").disabled = true;
  document.getElementById("atb6_2").disabled = true;
  document.getElementById("atb6_3").disabled = true;

  document.getElementById("rezultat").innerHTML="Jūsu rezultats"+punkti+"/6";

  if(punkti <= 1){
    document.getElementById("koment").innerHTML="Tu esi nezinītis, kurš saņems dāvanas - no Ziemassvētku vecīša!"
  }else if(punkti <=3){
    document.getElementById("koment").innerHTML="Tu esi rūķa palīgs dāvanu pakošanā, tev nevajadzēs zināt sīkumus!"
  }else if(punkti <=5){
    document.getElementById("koment").innerHTML="Tu esi Ziemassvētku vecīša palīgs - rūķis! "
  }else{
     document.getElementById("koment").innerHTML="Tu esi brīnišķīgs Ziemassvētku vecītis, jo pārzini visus sīkumus"
  }
}
function Nepareizi6(){
   document.getElementById("6jautajums").innerHTML="<h3>Nepareizi:(</h3>"
  document.getElementById("atb6_1").disabled = true;
  document.getElementById("atb6_2").disabled = true;
  document.getElementById("atb6_3").disabled = true;
  
  document.getElementById("rezultat").innerHTML= "Jūsu rezultats"+punkti+"/6";
  
  if(punkti <= 1){
    document.getElementById("koment").innerHTML="Tu esi nezinītis, kurš saņems dāvanas - no Ziemassvētku vecīša!"
  }else if(punkti <=3){
    document.getElementById("koment").innerHTML="Tu esi rūķa palīgs dāvanu pakošanā, tev nevajadzēs zināt sīkumus!"
  }else if(punkti <=5){
    document.getElementById("koment").innerHTML="Tu esi Ziemassvētku vecīša palīgs - rūķis! "
  }else{
     document.getElementById("koment").innerHTML="Tu esi brīnišķīgs Ziemassvētku vecītis, jo pārzini visus sīkumus"
  }
}

