

//kilometerToMeter section start
function kilometerToMeter(kilometer) {
    if (kilometer<0) {                                               //bonus section
        return 'it is not possible';
    }
    else{
     var meter=kilometer*1000;
    }
    return meter ;
}

 var result=kilometerToMeter(10);                                       //enter positive or negative 
 console.log(result);
//kilometerToMeter section end

//budget calculator section start

function budgetCalculator(watch,phone,laptop) {
    var watchCost=watch*50;
    var phoneCost=phone*100;
    var laptopCost=laptop*500;
    var totalCost=watchCost+phoneCost+laptopCost;
    if (watchCost<0) {                                               //bonus section
        return totalCost=phoneCost+laptopCost
    }
   else if (phoneCost<0) {                                           //bonus section
        return totalCost=watchCost+laptopCost
    }
   else if (laptopCost<0) {                                          //bonus section
        return totalCost=watchCost+phoneCost;
    }
    else{
        return totalCost=watchCost+phoneCost+laptopCost;
    }
    return totalCost;
}

var cost=budgetCalculator(5,10,5); //enter positive or negative value;
console.log(cost);

//budget calculator section end 


//hotelCost section start
var discount=0;
function hotelCost(days) {
    if (days<=3){                                                    //bonus section
        return "your are not allow for less then three day"; 
    }
   else if  (days<=6) {                                              //bonus section

        var payment=800;                                            //fixed rent 800 tk less then 10days;
        return payment;
    }
   else if (days<=10) {
       discount=days*100;
   }
   else if (days<=20) {
       var firstPart=10*100;
       var remaining=days-10;
       var secondPart=remaining*80;
       discount=firstPart+secondPart;
   }
   else{
    var firstPart=10*100;
    var secondPart=20*80;
    var remaining=days-20;
    var thirdPart=remaining*50;
    discount=firstPart+secondPart+thirdPart;
   }
   return discount;
}
var totalHotelCost=hotelCost(10);                                         //enter one(1) to any number.
console.log(totalHotelCost);

//hotelCost section end


// megaFriend section start
var arr=["aziz","jahAngir", "arMan","ali","arafat","beLal","bipLop"];
function megaFriend(arr) {
    var max=arr[0];
  for (let i = 0; i < arr.length; i++) { 
      var element=arr[i];
      if (element>max) {
          max=element; 
      }
    }
     if (arr==0) {                                                          //bonus section (apply empty arr)
        return 'Undefined value';
      }
  return max;
}
var largeName=megaFriend(arr);
console.log(largeName);

// megaFriend section end
