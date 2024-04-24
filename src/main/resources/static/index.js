function feilmelding() {

    $("#feil0").html("")
    $("#feil1").html("")
    $("#feil2").html("")
    $("#feil3").html("")
    $("#feil4").html("")
    $("#feil5").html("")
}
function kjop() {


    const kunde= {

        film: $("#velgFilmHer").val(),
        antall: $("#antall").val(),
        fornavn: $("#navn").val(),
        etternavn: $("#navn1").val(),
        telefonnr: $("#tlnr").val(),
        epost: $("#email").val(),
    };

    if (kunde.film === "" || kunde.antall === "" || kunde.fornavn === "" || kunde.etternavn === "" || kunde.telefonnr === "" || kunde.epost === "") {

        if (kunde.film === "") {
            document.getElementById("feil0").innerHTML = "Velg en film";

        }
        if (kunde.antall === "") {
            document.getElementById("feil1").innerHTML = "Skriv noe inn i antall";
        }
        if (kunde.fornavn === "") {
            document.getElementById("feil2").innerHTML = "Skriv noe inn i fornavnet";
        }
        if (kunde.etternavn === "") {
            document.getElementById("feil3").innerHTML = "Skriv noe inn i etternavnet";
        }
        if (kunde.telefonnr === "") {
            document.getElementById("feil5").innerHTML = "Skriv noe inn i telefonnr";
        }
        if (kunde.epost === "") {
            document.getElementById("feil4").innerHTML = "Skriv noe inn i epost";
        }
    }
    else {
        document.getElementById("velgFilmHer").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("navn").value = "";
        document.getElementById("navn1").value = "";
        document.getElementById("tlnr").value = "";
        document.getElementById("email").value = "";
        $.post("/lagre", kunde, function (){
            hentAlle();
        });

        feilmelding();
    }
}
function hentAlle() {
    $.get("/hentAlle", function (data) {
        henteData(data);
    });

    function henteData(alleKunder){
        let ut = "<table class='table table-striped table-bordered'>" ;
        ut += "<tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
        for (let kunde of alleKunder) {
            ut += "<tr><td>" + kunde.film + "</td><td>" + kunde.antall + "</td><td>" + kunde.fornavn + "</td><td>"
                + kunde.etternavn + "</td><td>" + kunde.telefonnr + "</td><td>" + kunde.epost + "</td>"
            ut += "</tr>";
        }
        ut += "</table>";
        $("#drop").html(ut);
    }
}
function nullstil() {
    $.get("/nullstil", function (){
        $("#drop").html(" ")
    });
    feilmelding();
}




