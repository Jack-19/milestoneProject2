
function findpier(){

  const thBar ="please visit pier one";
  const cutSa ="please visit pier two";
  const towBr ="Please visit pier three";
  const Belf ="Please visit pier four";
  const lnBr ="Please visit pier five";
  const golH ="Please visit pier six";
  const shG ="Please visit pier seven";
  const melBr ="Please visit pier eight";
  const watBr ="Please visit pier nine";
  const lonbr ="Please visit pier ten";
  const biB ="Please visit pier elevn";
  const wesBr ="Please visit pier twele";
  const other ="Please select a sight";

  

  const checkboxes = Array.from(document.querySelectorAll('.box:checked'));

   checkboxes.forEach((checkbox, i)=>{
     const val=checkbox.value;
     if (val == 'val0'){
       document.getElementById('sightResult').innerHTML=thBar;
      }else if (val == 'val1'){
        document.getElementById('sightResult').innerHTML=cutSa;
      }else if (val == 'val2'){
        document.getElementById('sightResult').innerHTML=towBr;
      }else if (val == 'val3'){
        document.getElementById('sightResult').innerHTML=Belf;
      }else if (val == 'val4'){
       document.getElementById('sightResult').innerHTML=lnBr;
      }else if (val == 'val5'){
       document.getElementById('sightResult').innerHTML=golH;
      }else if (val == 'val6'){
       document.getElementById('sightResult').innerHTML=shG;
      }else if (val === 'val7'){
       document.getElementById('sightResult').innerHTML=melBr;
      }else if (val == 'val8'){
       document.getElementById('sightResult').innerHTML=watBr;
      }else if (val == 'val9'){
       document.getElementById('sightResult').innerHTML=lonbr;
      }else if (val == 'val10'){
       document.getElementById('sightResult').innerHTML=biB;
      }else if (val == 'val11'){
       document.getElementById('sightResult').innerHTML=wesBr;
      }
   });
}
      






function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
