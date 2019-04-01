var boucleSlide = document.getElementById("boucleSlide");
var slide =[1,2,3,5,6,7,8,9];

for( i in slide){
     if(i==0){
         boucleSlide.innerHTML+="<li data-target='#moncarousel' data-slide-to="+i+" class='active'></li>";
     } 
        else{
             boucleSlide.innerHTML+="<li data-target='#moncarousel' data-slide-to="+i+"></li>";
        }
    }
/////////////// BOUCLE POUR LES IMAGES


var sortie = document.getElementById("sortie");
    var resultat = document.getElementById("resultat");

var euro=[5,7,10,12,5,20];

function melange(euro){
    
    for (var k = euro.length-1; k > 0; k--){
        var valeurTemporaire = Math.floor(Math.random()*(k+1)); //// ""Math.random"" genere de manière quelconque un nombre compris entre 0 et 1. et la formule ""Math.floor"" permet d'arrondi a l'entier inférieur
        var tempraire = euro[k];
        euro[k] = euro[valeurTemporaire];
        euro[valeurTemporaire]=tempraire;
        
    }
//    alert("<img src='images/"+euro[2]+".JPG'>");
    sortie.innerHTML="<img src='images/"+euro[2]+".JPG'>" ;
    resultat.innerHTML="<img src='images/"+euro[2]+".JPG'>" ;
}

 /////////////: BOUCLE POUR LES GAIN

var gain1 = document.getElementById("gain1");
var gain2 = document.getElementById("gain2");

var gain3 = document.getElementById("gain3");

var gain4 = document.getElementById("gain4");

var gain5 = document.getElementById("gain5");




var produits=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8"];

function Produit(produits){
     var produitPrix={img_1: 2.06,
    img_2: 2.21,
    img_3: 0.36,
    img_4:2.17,
    img_5:7.62,
    img_6:1.1,
    img_7:10.6,
    img_8:1.45
    
              };
    
    for (var k = produits.length-1; k > 0; k--){
        var valeurTemporaire = Math.floor(Math.random()*(k+1)); //// ""Math.random"" genere de manière quelconque un nombre compris entre 0 et 1. et la formule ""Math.floor"" permet d'arrondi a l'entier inférieur
        var temporaire = produits[k];
        produits[k] = produits[valeurTemporaire];
        produits[valeurTemporaire]=temporaire;
        
    }
    gain1.innerHTML="<img src='images/"+produits[1]+".JPG'>";
    
    gain2.innerHTML="<img src='images/"+produits[2]+".JPG'>";
    gain3.innerHTML="<img src='images/"+produits[3]+".JPG'>";
    gain4.innerHTML="<img src='images/"+produits[4]+".JPG'>";
    gain5.innerHTML="<img src='images/"+produits[5]+".JPG'>";
    
    
}














