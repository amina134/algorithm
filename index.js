
var arry=[2,5,1,4,7,3];
//tab ordonee (array=[1,2,3,4,5,7])
function insert (){
    var v;
    
    for(var i=1;i<arry.length();i++){
        v=tab[i];
        j=i;
        while(tab[j-1]>v){
            tab[j]=tab[j-1]
            j--;
           
        }
        tab[j]=v;
       
       

    }

 
 return (tab)
  
}
console.log(insert(arry))