var facts = [];

function Fact(f,img){
this.f=f;
this.image=img;
}

facts.push(new Fact("I like soccer","soccer.jpg"));
facts.push(new Fact("I'am a Real Madrid Fan","realmadrid.jpg"));
facts.push(new Fact("I'am a Millonarios FC Fan","millonarios.jpg"));
facts.push(new Fact("I have a Motorcycle","motorcycle.jpg"));
facts.push(new Fact("I like to go to the gym","gym.jpg"));
facts.push(new Fact("I'am from Bogota","bogota.jpg"));
facts.push(new Fact("I like Reggae music","reggae.jpg"));
facts.push(new Fact("I love playing FIFA","fifa.jpg"));
facts.push(new Fact("My High School is in Mosquera","highschool.jpg"));
facts.push(new Fact("My favourite Netflix Show is Daredevil","daredevil.jpg"));
facts.push(new Fact("I used to Skate","skate.jpg"));
facts.push(new Fact("I've never been out of the country","foreign.jpg"));



function showFact(){
var i;
var text;
var fact;
i = (Math.floor(Math.random()*11));
fact= facts[i];
text = document.createTextNode(fact.f);
var parrafo = document.getElementById("fact");
var seccion = document.getElementById("factimage");
while (parrafo.firstChild) {
    parrafo.removeChild(parrafo.firstChild);
}
parrafo.appendChild(text);
seccion.setAttribute("src","img/"+fact.image);

}

