var teisingasAts = document.getElementById("pirmasVariantas");
var teisingasAts = true;


$("#pateikti").on('click', function () {

   atsakymoPateikimas($(this));

})

function atsakymoPateikimas(elementas) {

    var ats = $("[name='variantai']:checked").val();
    //alert(ats);
    $("#tiesa").hide();
    $("#melas").hide();
    if (ats === "a") {
        teisingasAts = true;
        $("#tiesa").show();
    }
        else {
        teisingasAts = false;
        $("#melas").show();
    }
    
}

var time = 60;

setInterval(skaiciuotiLaika, 1000);

function skaiciuotiLaika() {
    time--;
    if (time < 0) {

    } else {
        $("#timer span").text(time + " s");
    }
}

setTimeout(function () {
    alert("Laikas baigėsi");
}, 60000);

