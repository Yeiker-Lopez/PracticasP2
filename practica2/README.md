# API GraphQL para Módulo de Pagos en Sistema de Subastas

Esta practica implementa un módulo de una API GraphQL desarrollada con NestJS, enfocado en la gestión de `Facturas`, `Pagos` y `Metodos de Pago` para un sistema de subastas.

## Descripción del Módulo

El sistema proporciona una interfaz GraphQL para administrar:

* **Facturas**: Registros detallados de transacciones, asociadas a pagos, con descripciones y montos totales.
    * **Atributos**: `id`, `Pago` (tipo de pago), `Descripcion`, `Monto_Total`.
* **Pagos**: Entidad central que representa un pago realizado, con su monto, fecha y enlaces a la factura y método de pago correspondientes.
    * **Atributos**: `id`, `Monto`, `FechaPago`, `Factura_ID`, `MetodoPago_ID`.
* **Metodos de Pago**: Define los distintos tipos de canales de pago aceptados en el sistema de subastas, junto con su estado.
    * **Atributos**: `id`, `Metodo_Pago` (nombre del método), `Descripcion`, `Estado`.

## Arquitectura y Tecnologías

* **Framework**: NestJS
* **Base de datos**: SQLite
* **ORM**: TypeORM
* **API**: GraphQL con Apollo Server
* **Validación**: `class-validator` para la integridad de los datos.

## Ejecución del Proyecto

Para levantar el servicio y explorar la API:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Yeiker-Lopez/PracticasP2]
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Iniciar la aplicación:**
    ```bash
    npm run start:dev
    ```
    La API estará disponible en `http://localhost:3000/graphql`.

4.  **Acceder al GraphQL Playground/Sandbox:**
    Abre tu navegador y navega a `http://localhost:3000/graphql`. Utiliza esta interfaz para interactuar con la API.

**Nota:** La base de datos (`database.sqlite`) y el esquema GraphQL (`src/schema.gql`) se generarán automáticamente al iniciar la aplicación.

## Ejemplos de Consultas y Mutaciones

Explora las operaciones CRUD disponibles para cada entidad:

se puede realizar consultas generales, consultas con poner el id creado, se puede realizar modificaciones, crear y remover