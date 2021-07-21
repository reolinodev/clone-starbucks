$( document ).ready(function() {
    initPageLoad();
});

function initPageLoad(){
    $("#header").load("../html/header.html");
    $("#article").load("../html/main.html");
    $("#footer").load("../html/footer.html");
}

function pageRouter(url){
    $("#article").load(url);
}
