var facts=[];
facts.push("I like soccer");
facts.push("I'am a Real Madrid Fan");
facts.push("I'am a Millonarios FC Fan");
facts.push("I have a Motorcycle");
facts.push("I like to go to the gym");
facts.push("I'am from Bogota");
facts.push("I like Reggae music");
facts.push("I love playing FIFA");
facts.push("My High School is in Mosquera");
facts.push("My favourite Netflix Show is Daredevil");
facts.push("I used to Skate");
facts.push("I've never been out of the country");
function showFact(){
var i;
var text;
var fact;
i = (Math.floor(Math.random()*11));
fact= facts[i];
text = document.createTextNode(fact);
var parrafo = document.getElementById("fact");
while (parrafo.firstChild) {
    parrafo.removeChild(parrafo.firstChild);
}
parrafo.appendChild(text);
};
showFact();
