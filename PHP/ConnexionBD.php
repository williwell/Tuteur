<?php


class ConnectionDB
{
    public $connexion;
    public function __construct()
    {
        try {
            $this->connexion = new PDO("mysql:host=localhost;dbname=tuteur;port=3306,charset=utf8","root","");
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            try {
                $this->connexion = new PDO("mysql:host=localhost;dbname=tuteur;port=3308,charset=utf8","root","");
                $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo $e;
            }
        }
    }

    /**
     * @return PDO
     */
    public function getConnexion(): PDO
    {
        return $this->connexion;
    }
}