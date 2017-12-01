
			var Estudiante = function(){	
			var self = this;
			self.id1 = "";
			self.nombre1 = "";
			self.identificacion1 = "";
			self.telefono1 = "";
			self.email1 = "";

		
			
			}
		
		function leerEstudiante(){
			var id = document.getElementById('ID').value; 
			//console.log(ID);
			var nombre = document.getElementById('Nombre').value;
			//console.log(Nombre);
			var identificacion = document.getElementById('Identificacion').value;
			//console.log(identificacion);
			var telefono = document.getElementById('Telefono').value;
			//console.log(telefono);
			var email = document.getElementById('Email').value;
			//console.log(email);

			var est1 = new Estudiante;
			est1.id1 = id;
			est1.nombre1 = nombre;
			est1.identificacion1 = identificacion;
			est1.telefono1 = telefono;
			est1.email1 = email;
			addrow(est1);

		}

	
			function addrow(est1){
				
				var table = document.getElementById("Estudiante");
				var tr = document.createElement("tr");
				var tdId = document.createElement("td");
				var tdNom = document.createElement("td");
				var tdIde = document.createElement("td");
				var tdTe = document.createElement("td");
				var tdEm = document.createElement("td");
				var texId = document.createTextNode(est1.id1);
        		var texNombre = document.createTextNode(est1.nombre1);
				var texIden = document.createTextNode(est1.identificacion1);
				var texTel = document.createTextNode(est1.telefono1);
				var texEma = document.createTextNode(est1.email1);

				tdId.appendChild(texId);
				tr.appendChild(tdId).style.border ="solid blue";
        		tdNom.appendChild(texNombre);
        		tr.appendChild(tdNom).style.border ="solid blue";
        		tdIde.appendChild(texIden);
        		tr.appendChild(tdIde).style.border ="solid blue";
        		tdTe.appendChild(texTel);
        		tr.appendChild(tdTe).style.border ="solid blue";
        		tdEm.appendChild(texEma);
        		tr.appendChild(tdEm).style.border ="solid blue";
				table.appendChild(tr);
        

			}