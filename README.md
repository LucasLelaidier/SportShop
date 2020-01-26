# SportShop
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LucasLelaidier_SportShop&metric=alert_status)](https://sonarcloud.io/dashboard?id=LucasLelaidier_SportShop)

Api pour le projet SportShop

## Routes

### article

GET /article\
GET /article/:id\
GET /article/magasin/:id\
GET /article/rayon/:id\
\
POST /article\
  params : {\
    nom,\
  }\
  
### chef de magasin

GET /chef-de-magasin\
GET /chef-de-magasin/:id\
\
POST /chef-de-magasin\
  params : {\
    nom,\
    prenom,\
    password,\
    pp,\
  }\

### chef de rayon

GET /chef-de-rayon\
GET /chef-de-rayon/:id\
\
POST /chef-de-rayon\
  params : {\
    nom,\
    prenom,\
    password,\
    pp,\
  }\

### login
 
GET /login\

### magasin

GET /magasin\
GET /magasin/:id\
\
POST /magasin\\
  params : {\
    ville,\
    adresse,\
    cdmId,\
  }\
  
### operation

GET /operation\
GET /operation/:id\
\
POST /operation\
  params : {\
    stock,\
    date,\
    article,\
    rayon,\
    type,\
  }\

### rayon

GET /rayon\
GET /rayon/:id\
GET /rayon/magasin/:id\
\
POST /rayon \
  params : {\
    nom,\
    cdrId,\
    magasinId,\
  }\

### stock

GET /stock/:rayon/:article\
\
POST /stock\
  params : {\
    rayon,\
    article,\
  }\
