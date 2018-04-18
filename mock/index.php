<?php    
    $root = "http://gateway.marvel.com:80";
    $url = "/v1/public/characters";
    $now = time();
    $keyPublic = "298bab46381a6daaaee19aa5c8cafea5";
    $keyPrivate = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";

    $params = [
        'ts' => $now,
        'apikey' => $keyPublic,
        'hash' => md5($now.$keyPrivate.$keyPublic)
    ];

    $queryString = http_build_query($params);

    $url = $root.$url.'?'.$queryString;
    header('Content-type: application/json');
    $response = json_encode(file_get_contents($url)); 

    //file_put_contents ('data.json' , $response ) ;
    echo $response;
?>