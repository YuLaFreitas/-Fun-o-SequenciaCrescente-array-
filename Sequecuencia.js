function SequenciaCrescente(num){
    var n = 0;
    var cont =0;
    var teste;
    var teste1 = 0;
    var t = 1;
    
    do{ 
            
            
         do{
             
             if(num[cont] != ','){
             
                
        if(num[t] == num[cont+t] ){
            
            console.log(t);
            teste1++;             
        }
           t++;   
             }    
        }while(t <= num.length);
        
            
         if(num[n] > num[n+1]){
           //  cont++;
         }else
             if(num[n] < num[n+1]){
             cont++;
             }
         cont++;
             }while(cont <= num.length);
    
    if(teste1 >= 2){
     teste = true;
    }else {
     teste = false;   
    }
        
   // document.getElementById('palavra').nodeValue = teste;
    
    document.getElementById('aqui').innerHTML = "<input type='text' disabled value='Retorno: "+ teste+"'>";

}