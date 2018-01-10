$(document).ready(function() {
    var calculateSum = function() {
        $.get("/kosarica/vsebina", function(response, status) {
            if (status == "success") {
                sum = 0;
                response.items.forEach(function (element) {
                    sum += parseInt(element.cena) * parseInt(element.kolicina);
                });

                $("#price").text(sum);
            }
        })
    };

    calculateSum();

    $(".add-to-cart").click(function(event) {
        var id = $(this).attr("id");
        id = parseInt(id);
        event.preventDefault();


        $.post("/kosarica", {"id_produkt": id}, function(response, status) {
            if (status === "success") {
                sum = 0;
                response.items.forEach(function (element) {
                    sum += parseInt(element.cena) * parseInt(element.kolicina);
                })
                $("#price").text(sum);
            }
        })
    });
});