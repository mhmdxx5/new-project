(function(){

makeImgsection(3);

function makeImgsection(number){
    var articles="";
    for(i=0;i<number;i++){
    articles+='<section class="main-images"><img src="images/homepagecover.jpg" alt="travel1"><section class="rictangle"> <a href="#">Coding course</a><span  id="icon1"></span></section></section>';
    }
    var sections=document.getElementById("articles");
    console.log(sections);
    sections.innerHTML=articles;
};

})();