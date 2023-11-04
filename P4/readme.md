# Práctica 4 Arquitectura y Programación de Sistemas en Internet

## Endpoints explicados

### getCochesConcesionario
.get("/concesionarios/:idConcesionario", getCochesConcesionario)

Con este endpoint satisfacemos el requisito pedido en la práctica: Permite ver los coches de un concesionario.
El parámetro que se introducirá en la ruta corresponde al id del concesionario generado por Mongo. Mostrará todos los datos de los coches de un concesionario.

### getCochesCliente
.get("clientes/:idCliente", getCochesCliente)

Con este endpoint satisfacemos el requisito pedido en la práctica: Permite ver los coches de un cliente.
El parámetro que se introducirá en la ruta corresponde al id del cliente generado por Mongo que queremos ver. Mostrará todos los datos de los coches de un cliente.

### addCoche
.post("/coches", addCoche)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite crear coches.
Los campos requeridos que se deberán rellenar para añadir el coche son "matricula" y precio.

### addCliente
.post("/clientes", addCliente)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite crear clientes.
Los campos requeridos que se deberán rellenar para añadir el cliente son "nombre" y "dinero".

### addConcesionario
.post("/concesionarios", addConcesionario)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite crear concesionarios.
Los campos requeridos que se deberán rellenar para añadir el concesionario son "nombre" y "ventaBloqueada".

### enviarCocheConcesionario
.post("/concesionarios/:idConcesionario/:idCoche", enviarCocheConcesionario)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite enviar coches a un concesionario.
Los parámetros que se introducirán en la ruta corresponden al id del concesionario y del coche, generados por Mongo. Enviará un coche de la colección de coches a un concesionario (se mantendrá en la colección de coches).

### traspasarCoche
.put("/clientes/:idClienteVendedor/:idClienteComprador/:matricula", traspasarCoche)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite traspasar un coche de un cliente a otro.
Los parámetros que se introducirán en la ruta corresponden al id de los clientes entre los que se realizará la operación y del coche, generados por Mongo. El primer id hará referencia al cliente del que se va a extraer el coche, el segundo hará referencia al cliente que recibirá el coche y el último al propio coche.

### venderCocheCliente
.put("/concesionarios/:idConcesionario/:idCliente/:idCoche", venderCocheCliente)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite vender coches a un cliente.
Los parámetros que se introducirán en la ruta corresponden al id del concesionario, al del cliente y al del coche respectivamente, generados por Mongo. 

### addDinero
.put("/:idCliente/:dineroSumado", addDinero)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite añadir dinero a un cliente para poder comprar un coche.
Los parámetros que se introducirán en la ruta corresponden al id del cliente y a la cantidad de dinero que se le desee añadir al cliente, generados por Mongo. 

### deleteCocheCliente
.delete("/:idCliente/:idCoche", deleteCocheCliente)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite eliminar coche de un cliente.
Los parámetros que se introducirán en la ruta corresponden al id del cliente y al del coche que se desea eliminar respectivamente, generados por Mongo.

### deleteCocheConcesionario
.delete("/:idConcesionario/:idCoche", deleteCocheConcesionario)
Con este endpoint satisfacemos el requisito pedido en la práctica: Permite eliminar coche de un concesionario.
Los parámetros que se introducirán en la ruta corresponden al id del concesionario y al del coche que se desea eliminar respectivamente, generados por Mongo.