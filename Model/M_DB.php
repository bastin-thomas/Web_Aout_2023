<?php
    //mysqli_query -> permet d'exécuter une requete sur la bdd

    //permet de se connecter à la base de données en tant que root (admin)
    function connexion()
    {
        //$connexion = mysqli_connect("localhost","root","root","db_hub_games");
        $connexion = mysqli_connect("localhost","root","root","db_calculotron");

        mysqli_set_charset($connexion,'utf8');
        // Check connection
        if (mysqli_connect_errno())
        {   
            //affiche l'erreur si il y en a une lors de la connexion + 
            die("Failed to connect at MySQL : " . mysqli_connect_error());
        }

        return $connexion;
    }
   
    /**
     * GetTheTable of MaxScore of a game
     */
    function getTableMaxScore()
    {
        $connexion = connexion();
        $table = array();

        $resultat = mysqli_query($connexion, "SELECT joueur as Pseudo, score as Score FROM score
                                              ORDER BY score DESC
                                              LIMIT 5;");

        if((mysqli_num_rows($resultat)) != 0)
        {
            $i = 0;
            while(($tab = mysqli_fetch_assoc($resultat)) != FALSE)
            {
                $table[$i]["Pseudo"] = $tab["Pseudo"];
                $table[$i]["Score"]  = $tab["Score"];

                $i++;
            }
        }
        
        mysqli_close($connexion);

        return $table;
    }

    /**
     * Set the Score at the end of a party
     */
    function DB_setNewScore($player, $score)
    {
        $connexion = connexion();
       
        //Insertion en BDD
        $success = mysqli_query($connexion,"INSERT INTO score (joueur, score) VALUES ($player, $score);");
        
        mysqli_close($connexion);

        return $success;
    }
?>