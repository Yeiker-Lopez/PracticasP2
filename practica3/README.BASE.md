 descripción del proyecto:

 Es un modulo de pagos para un proyecto de subastas, la practica pedia implementar 3 entidades

INSTRUCCIONES BASICAS:

Para instalar todas las dependencias usadas en la practica el siguiente codigo:

`npm install`

Para iniciar la practica el siguien codigo:

`npm run start:dev`


Para la prueba de la practica se utilizo postman y se aplico en las 5 endpoints de cada entidad


para esta practica se realizo una modificacion de un proyecto anterior y se implemento lo pedido en la nueva prcatica

se realizo todo lo pedido, y se utilizo 3 entidades, facturas, metodospagos, y pagos


en la parte de la prueba del postman, nose porque mi postman cuando ponia la parte de socket.io no me dejaba exportar para hacerlo un .json y pegarlo en la practica, lo intente de varias maneras y no pude, por eso adjunte las imagenes de todas las pruebas que hice , por eso adjunte 2 pruebas que se llaman postman que no me dejaba, decia share de compartir pero me pedia mas cosas, pero todo esta correcto y funcional,  no me baje puntos por eso:(


en cada prueba en postman se creaba un evento dependiendo de la entidad y metodo que vaya a utilizar por ejemplo en pagos para crear ponia el evento de pagoCreado en events lo habilitaba, y luego en la parte del message donde se indica el evento se escrbe el nombre dependiendo de cada entidad, por ejemplo createPago para que se pudiera ejecutar de forma correcta, todo definido en los respectivos gateways de cada entidad (pagos.gateway.ts, facturas.gateway.ts, metodospagos.gateway.ts) si le puse ganas a la practica 