# test REACT

Dans le cadre de votre entretien, vous devez effectuer un petit exercice sur REACT.
Vous devrez créer une simple page listant les héros Marvel et une page de détail comme sur les écrans suivants :

- [![Liste des super héros](https://raw.githubusercontent.com/niux3/ventes-privees/master/index-heros.jpg)](https://raw.githubusercontent.com/niux3/ventes-privees/master/index-heros.jpg)
- [![Liste des super héros](https://raw.githubusercontent.com/niux3/ventes-privees/master/fiche-identite.jpg)](https://raw.githubusercontent.com/niux3/ventes-privees/master/fiche-identite.jpg)

## Côté technique

Pour ce faire voici les éléments API nécessaires aux appels :

- API_PUBLIC : 298bab46381a6daaaee19aa5c8cafea5
- API_PRIVATE : b0223681fced28de0fe97e6b9cd091dd36a5b71d
- BASE_URL : http://gateway.marvel.com:80

Pour les appels aux données voici les endpoints :
- Characters :
    - Method : GET
    - Uri : /v1/public/characters
    - queryParams :
        - ts -> timestamp au moment de l’appel en seconde
        - apikey -> API_PUBLIC
        - hash -> concaténation du timestamp, clef privée, clef public hashé en md5
e.g : en utilisant crypto par exemple : crypto.createHash('md5').update(‘{concatenatedString}’).digest('hex')
- Characters Info :
    - Method : GET
    - Uri : /v1/public/characters/{characterId}
    - queryParams :
        - ts -> timestamp au moment de l’appel en seconde
        - apikey -> API_PUBLIC
        - hash -> concaténation du timestamp, clef privée, clef public hashé en md5
e.g : en utilisant crypto par exemple : crypto.createHash('md5').update(‘{concatenatedString}’).digest('hex')

Vous êtes libre dans l’utilisation de librairie, router, fetching...
Un plus serait une implémentation d’un pattern flux.

Vous n’êtes pas tenu de respecter la charte graphique des écrans ci-dessus.

Vous devrez nous livrer le code source de cet exercice.

Merci & bon react