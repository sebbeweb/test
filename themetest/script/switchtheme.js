/* selon le parametre en entrer elle va afficher ou montrer
le menu deroulan*/
function dropdown(affichage) {
  var test=document.getElementById("dropDown").className;
  if (affichage==1) {
    document.getElementById("dropDown").className=test.replace("hide", "show");
      }
  else {
    document.getElementById("dropDown").className=test.replace("show", "hide");
  }
}
