# Exercice 1

>  Bonjour :) dans cet exercice nous allons modéliser une application permettant la vente de voitures entre partiluliers et sans intermédiaire :) .les utilisateurs de l'application peuvent mettre leurs voitures en vente en spécifiant un pris ou acheter une voiture .Dans un premier temps nous allons créer la blockchain qui permettra de illustrer notre Business Network en terme d'assets , Participants et Transactions 

Definition du business model :

**Participant**
`Customer`

**Asset**
`Vehicle`

**Transaction**
`SaleTransaction`

la Vehicle est un asset qui appartient à un Customer, une SaleTransaction permet dans ce cas précis de changer la propriété d'un Vehicle d'un propriétaire Customer a un autre propriétaire en moyennant une modification de solde ( balance ) du compte du vendeur vers celui de l'acheteur.

La logique de cette transaction peut être décrite comme suite :
l'algorithme vérifie que le solde de l'acheteur est supérieur au prix de la voiture .
ensuite il procéde au transfer de proprièté de la voiture et à la mise a jour des soldes de l'acheteur et du vendeur 

Pour tester ce Business network voici les **Test** tab:

Créer un participant `Customer` avec un solde de compte bancaire 40000 (ce participant va être notre acheteur) :

```
{
  "$class": "org.acme.model.Customer",
  "customerId": "zelda",
  "firstName": "zelda",
  "lastName": "zelda",
  "balance": 40000
}
```

Créer un autre participant `Customer` link avec un solde de compte bancaire 30 ( ce participant va être notre vendeur ):

```
{
  "$class": "org.acme.model.Customer",
  "customerId": "link",
  "firstName": "link",
  "lastName": "link",
  "balance": 30
}
```

Créer un `Vehicle` asset qui appartient dans ce cas au `Customer` zelda et spécifier le prix 12000:

```
{
  "$class": "org.acme.model.Vehicle",
  "vin": "link_car",
  "owner": "resource:org.acme.model.Customer#link",
  "price": 12000
}
```

Soumetter une Transaction `SaleTransaction` transaction en spécifiant 1.le `Vehicle` a vendre link_car et 2.le `Customer` zelda qui va l'acheter et `Customer` link qui va le vendre  :

```
{
  "$class": "org.acme.model.SaleTransaction",
  "car": "resource:org.acme.model.Vehicle#link_car",
  "newOwner": "resource:org.acme.model.Customer#zelda",
  "owner": "resource:org.acme.model.Customer#link"
}
```

Aprés la soumission de cette transaction remarque que la voiture link_car a changer de propriétaire ( l'acheteur zelda ) et le solde de ce propriètaire a diminué enfaveur de celui du vendeur link qui a augmenté !

Congratulations!
