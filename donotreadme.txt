Well this one contains 

DB
    -blogs
        -title
        -content
        -tags
        -like/dislike
        -ratings
        -comments
        -user(firstname+lastname)
        -date
        -ratings_counter maybe? or 'ratings' as array?
    -user
        -firstname
        -lastname
        -email
        -password
        -city
        -state
        -country
        -postalcode
        -birthdate
        -gender

Functions
    -blogs
        -create blog
        -update blog
        -delete blog
        -change blog ratings/like/dislike
        -comment blog
        -View Blog all/individual(by using user)
        -Search Blog
    -user
        -Create User
        -Signin User
        -Update User Profile
        -Log Out


FLOW:
controller->service->repository
                        |->THIS ONE UPLOADS TO DB

dto             entity
 |                  |
 V                  V
 I Have         For table & column in sql AND ALSO for 
 no idea        general structure of module attributes
 for what
 this is used?


npm installssssss:-------
                        |
    ---------------------
    |
    |
    V
npm install --save @nestjs/typeorm typeorm mysql2
npm install @nestjs/jwt
npm install passport-jwt
npm install @nestjs/passport passport passport-local

PRETTIER BOMBED:
npm uninstall prettier  --save-dev

nest commsndsssss:-------
                        |
    ---------------------
    |
    |
    V
nest generate module user
nest g co user
nest generate module blog
nest g co blog