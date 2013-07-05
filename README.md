SARAH-Omenex_Camera_IP
======================


1) Fonctionnalité(s) :

    Ce plugin permet de piloter une Caméra IP rotative R'CAM 2.0 Omenex (compatible Foscam).
    Demandez a Sarah de vous en dire plus : Sarah, infos sur le plugin caméra.
    Sarah peut aussi vous afficher la liste des CGI et commandes "Foscam" permettant de piloter la caméra : Sarah, affiche la documentation de la caméra.


2) Comment paramétrer :

    Dans les paramètres du plugin, vous devez renseigner les informations suivantes, en remplaçant les [FIXME] par vos valeurs :

        IP_Camera : Adresse IP de votre caméra.
        Port_Camera : Port de votre caméra.
        Utilisateur : Nom d'un utilisateur "administrateur" de la caméra. Pour fonctionner, certaines CGI utilisées necessitent les droits "Admin".
        Mot_de_passe : Mot de passe du compte utilisateur paramétreé ci-dessus.


3) Liste des actions (commandes vocales) :

        Sarah, affiche la caméra. : Affichage de la vidéo de la caméra le navigateur.

        Sarah, Reboot la caméra. : Redemarre la caméra, en cas de probleme.
        Sarah, Redemarre la caméra.
        Sarah, Reset la caméra.
        Sarah, Initialize la caméra.

        Sarah, caméra prends une photo. : La caméra prends une "photo" et l'affiche dans le navigateur.
        Sarah, prends une photo avec la caméra.

        Sarah, affiche la documentation de la caméra. : Affiche la liste des CGI et commandes permettant de piloter la caméra dans une nouvelle fenetre (fichier PDF, source : Foscam).
        Sarah, affiche la doc de la caméra.

        Sarah, comment fonctionne le plugine caméra. : Sarah vous informe verbalement des fonctionnalités du plugin.
        Sarah, comment marche le plugine caméra.
        Sarah, infos sur le plugine caméra.

        Sarah, caméra en position un. : La caméra PTZ peut mémoriser une position donnée et on peut affecter à cette position un numéro.
        Sarah, caméra en position une. Cela permet par la suite de demander à la caméra de retourner à cette position en lui indiquant ce numéro.
        Sarah, caméra en position deux. Ce type de caméra permet généralement de mémoriser jusqu'a 16 positions.
        Sarah, caméra en position XX. Ici, Sarah, pourra déplacer la caméra de la position 1 à 16.


Merci à Jean-Philippe Encausse et Baptiste Marienval pour leur "petit" coup de pouce. 
