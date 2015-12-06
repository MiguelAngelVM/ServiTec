var validacion = function(){
    var busca = $("#inputBusca").val().trim();
    if(busca==""){
            alert("Ingrese los datos");
        }
};


$(document).ready(function(){
	$("#buscar").click(function() {
		validacion();
	});
});

