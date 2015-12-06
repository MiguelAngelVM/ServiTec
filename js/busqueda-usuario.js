var validacion = function(){
    var busca = $("#cosa").val().trim();
    if(busca==""){
            alert("Agrege comentario");
        }
};


$(document).ready(function(){
	$("#botones").click(function() {
		validacion();
	});
});

