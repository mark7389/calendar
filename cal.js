let Calendar = function(y,m){
    
    this.months = ["January", "February", "March", "April", "May",
                  "June", "July", "August", "September", "October", "November", 
                  "December"];
    this.month= m;
    this.year = y;
    this.week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    this.getFirstDay = function(){
        
        var firstDay = moment((this.year+"-"+(this.month+1)+"-"+01),"YYYY-MM-DD").format("ddd");
        console.log(this.month+1);
        return firstDay;
    }
    
    this.numberDays = this.getNumberOfDays(m+1);
    this.days = this.setDays();

}
function dayArr(cal, numDays){
    var arr = [];
    for(var i = 1; i<=numDays; i++){
        
       arr.push(i);
        
    }

   return arr;
}
Calendar.prototype.setDays = function(){

    var daysObjArr = [];
    
    var firstDay = this.week.indexOf(this.getFirstDay());
    
    for(var i=0; i<this.numberDays.length; i++){

        if(firstDay > 6){
            firstDay = 0;
            daysObjArr.push({wDay: this.week[firstDay], nDay: i+1});
            firstDay++;
        }
        else{
            
            daysObjArr.push({wDay: this.week[firstDay], nDay: i+1});
            firstDay++;
        }
    }
    
    return daysObjArr;
    
    


}
Calendar.prototype.getNumberOfDays = function(m){
   
   if(m === 1 || m === 3 || m=== 5 || m === 7 || m === 8 || m === 10 || m === 12){
       return dayArr(this, 31);
   }
   else if(m === 2){
       
       if(this.year%4 === 0){
          return dayArr(this, 29);
       }else{
        
          return dayArr(this, 28);
           
       }
   }
   else{
       
      return dayArr(this, 30);
   }

}
