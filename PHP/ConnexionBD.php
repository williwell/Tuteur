<?php


class ConnectionDB
{
    public $connexion;
    public function __construct()
    {
        try {
            $this->connexion = new PDO("mysql:host=localhost;dbname=tuteur;,charset=utf8","root","root");
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e;
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