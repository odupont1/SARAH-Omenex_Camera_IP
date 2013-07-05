exports.action = function(data, callback, config, SARAH){
	var url="";

	// Recuperation de la config
	// l'orthographe n'est pas exacte pour permettre une bonne vocalisation.
	config = config.modules.omenex;
	if (config.IP_Camera == "[FIXME]"){
		console.log("La variable IP_Camera n'est pas configuree");
		return callback({'tts' : "La variable, IP,  camaira, n'est pas configurai."});
	}

	if (config.Port_Camera == "[FIXME]"){
		console.log("La variable Port_Camera n'est pas configuree");
		return callback({'tts' : "La variable, Port,  camaira, n'est pas configurai."});
	}

	if (config.Utilisateur == "[FIXME]"){
		console.log("La variable Utilisateur n'est pas configuree");
		return callback({'tts' : "La variable, Utilisateur, n'est pas configurai."});
	}

	if (config.Mot_de_passe == "[FIXME]"){
		console.log("La variable Mot_de_passe n'est pas configuree");
		return callback({'tts' : "La variable, Mot de passe, n'est pas configurai."});
	}		

	//if (!config.Type_Navigateur){
	//	console.log("La variable Type_Navigateur n'est pas configuree");
	//	return callback({'tts' : "La variable, Type, Navigateur, n'est pas configurai."});
	//}	
	
	// Assignation des variables
	var _IP_Camera = config.IP_Camera;
	var _Port_Camera = config.Port_Camera;
	var _Utilisateur = config.Utilisateur;
	var _Mot_de_passe = config.Mot_de_passe;
	//var _Type_Navigateur = config.Type_Navigateur;	
	var _Type_Navigateur = "firefox";
	
	var _urlcamera = 'http://' + _IP_Camera + ':' + _Port_Camera;
	var _authent = 'user=' + _Utilisateur + '&pwd=' + _Mot_de_passe + "";
	var _videostream = "/videostream.cgi?" + _authent + "&resolution=32";
	var _decoder_control = '/decoder_control.cgi?' + _authent + '&command=';	
	var _reboot = '/reboot.cgi?' + _authent;
	var _snapshot = '/snapshot.cgi?' +  _authent;
	var _status = '/get_status.cgi?' +  _authent;	
	var _delai_reset = 90000;
	
	// Determination du Navigateur, pour le moment seulement Firefox
	// je n'arrive pas a executer correctement avec IE
	if (_Type_Navigateur == "FIREFOX" || _Type_Navigateur == "firefox" ) {
		var _navigateur = "firefox.exe";
	}
	else {
		var _navigateur = "iexplore.exe";
	}
	
	if (data.commande) {
	
		 if (data.commande == "REBOOT" || data.commande == "reboot") {
			// Reboot la camera : reinitialisation
			url = _urlcamera + _reboot;
			//console.log("Envoi de la requete a : " + url);
			var request = require('request');
			request({ 'uri' : url }, function (err, response, body){					
			if (err || response.statusCode != 200) {
				callback({'tts': "L'action a aichouai"}); return;
			}
				callback({'tts': "La camaira redaimarre !"});
				setTimeout(function(){SARAH.speak("La camaira est de nouveau disponible !");}, _delai_reset);
				return;
			});
		}
		
		else if (data.commande == "SNAPSHOT" || data.commande == "snapshot") {
			url = _urlcamera + _snapshot;
			// Prend une photo
			//console.log("Envoi de la requete a : " + url);
			var request = require('request');
			request({ 'uri' : url }, function (err, response, body){			
				if (err || response.statusCode != 200) {
					callback({'tts': "L'action a aichouai"});
					return;
				}
				return callback({'tts': "J'ai prise une photo !"});
			});
		}		

		else if (data.commande == "DOC" || data.commande == "doc") {
			// Affichage de la doc : ipcam_cgi_sdk.pdf
			SARAH.remote({ 'run' : 'AcroRd32.exe', 'runp' : './plugins/omenex/docs/ipcam_cgi_sdk.pdf' });
			return callback({'tts': "La documentation est affichai !"});
		}		

		else if (data.commande == "INFO" || data.commande == "info") {
			// Sarah lit les infos du fonctionnement du plugin
			var fs = require('fs');
			var _contenu = fs.readFileSync("./plugins/omenex/docs/infos.txt", "UTF-8");
			//console.log(_contenu);
			return callback({'tts': _contenu });

		}

		else if (data.commande == "AFFICHE" || data.commande == "affiche") {
			// Affichage la 'vue' de la camera dans le Navigateur
			SARAH.remote({ 'run' : _navigateur, 'runp' : _urlcamera + _videostream });
			return callback({'tts': "J'ai affichai la camaira dans le navigateur."});

		} else {
		
		  	url = _urlcamera + _decoder_control + data.commande;
			// Envoi de la requete
			//console.log("Envoi de la requete a : " + url);
			var request = require('request');
			request({ 'uri' : url }, function (err, response, body){
			
				if (err || response.statusCode != 200) {
					callback({'tts': "L'action a échoué"});
					return;
				}
					
				return callback({'tts': "Camaira en mouvement !"});
			});	
		}
	}
	
}

    