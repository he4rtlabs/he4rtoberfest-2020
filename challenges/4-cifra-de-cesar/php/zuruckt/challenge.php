<?php
class CaesarCipher  {

    private function encodeChar($ch, $rotation)
    {
        $alphabet = range('A', 'Z');
        $ch = array_search($ch, $alphabet);
    
        return $alphabet[($ch + $rotation) % 26];
    }

    public function encode($message, $rotation)
    {
        $message = str_split(strtoupper($message));
          
        $result = '';
        foreach ($message as $char) {
            $result = $result.$this->encodeChar($char, $rotation);
        }
        return $result;
    }
    
    public function decode($message, $rotation)
    {
        return $this->encode($message, -$rotation);
    }
    
    public function validateMessage($message, $rotation)
    {
        if (!ctype_alpha($message) || !is_numeric($rotation)) {
            exit('Entrada inválida');
        }
    }
}

$cipher = new CaesarCipher;

$function = $argv[1];
$message = $argv[2];
$rotation = $argv[3];

$cipher->validateMessage($message, $rotation);

switch($function) {
    case 'encode':
        echo 'Cifrado: '.$cipher->encode($message, $rotation);
        break;
    case 'decode':
        echo 'Decifrado: '.$cipher->decode($message, $rotation);
        break;
    default:
        exit('Entrada inválida!');
}