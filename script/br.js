window.addEventListener("load", function(){
  const loading =document.querySelector(".loading");
  loading.className +=" hidden";
})
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("shoplist_contents");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
var garak = ["가락몰대풍수산","가락몰즐거운수산","가락시장금성횟집","가락시장온달수산","가락시장필립수산","남도홍어","수인상회","싱싱해수산","유만복수산","킹콩쥬스&커피","하나스시"];
