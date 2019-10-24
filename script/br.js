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
var munjeong =[ "고레카레문정역점","공차문정법조타운점","공차송파파크하비오점","더플레이스 송파파크하비오점","도꼬돈카츠","도조파크하비오점","돼지한상","라스베이글","레밍턴그릴브런치","레브스폐셜앤스시","마부마라탕&샹궈문정점","매머드커피문정점","맵돈","명동피자가든파이브점","명동할머니국수","모치카냉","문어섬","문정한방삼계탕","배스킨라빈스송파하비오점","백채김치찌개문정점","베이글카페문정법조단지점","부산아지매국밥문정테라타워점","불독돈까스","불맞고쭈꾸미","비에뜨반미문정역점","사보텐송파하비오점","샐러디문정점","서울쌀면","석정일식","소면루문정점","소소반167","순남시래기문정테라타워점","순대감찹쌀순대","쉐프밥감자탕","슈퍼커피문정엠스테이트점","스무디킹가든파이브점","스무디킹송파파크하비오점","스시락","스테프핫도그STEFFHOTDOG","신기소","쏙만두","아티제송파아이파크점","에그드랍문정역점","에머이문정점","연어는옳다","오마뎅훼밀리타운점","오미래소고기국밥","외계인방앗간문정점","육전면사무소문정법조단지점","인사이드커피로스터스","일국화문정점","일식쉐프의스시매운탕돈부리","잇또라멘문정역점","죽이야기가든파이브점","쥬씨문정점","지인고기","차이나플레인문정점","철참치","청년다방문정법조타운점","카가야쿠","카츠젠문정법조타운점","카페판다문정역점","코코바나문정지점","코코이찌방야문정엠스테이트점","코하루","콩다방미쓰리","쿠카쿠법조타운점","퀴즈노스문정법조타운점","킹콩부대찌개송파법조타운점","탄탄면공방문정역점","탕화쿵푸마라탕문정점","탭플레이커피문정법조타운점","트라타문정점","파리바게트송파푸르지오점","포아이니","플라워베이커리문정점","해피래빗","홍쉐프&화덕","화작","JVL부대찌개문정법조타운점","SWITCH","volume.111송파파크하비오점"];
var jamsil = [];
var cheonho = [];
var samsung = [];
var yeoksam = [];
var dogok = [];
