var validacion = function(){
    var folio = $("#folio").val().trim();
    var marca = $("#marca").val().trim();
    var serie = $("#serie").val().trim();
    var producto = $("#producto").val().trim();
    var modelo = $("#modelo").val().trim();
    var costo = $("#costo").val().trim();
    
    if(folio=="" || marca=="" || serie=="" || producto=="" || modelo=="" || costo==""){
            alert("Ingrese todos los dato");
        }else{
            alert("agregado");
        }
};


$(document).ready(function(){
	$("#agregar").click(function() {
		validacion();
	});
});

