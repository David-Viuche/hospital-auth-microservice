
## Descripción

Microservicio de autenticación para proyecto hospital, permite generar un JWT a partir de las credenciales de acceso de un usuario y permite validar este token ademas de implementar un CRUD de usuarios, para la comunicación entre microservicios se utiliza un client-secret que corresponde a un secreto entre los dos micros para confirmar que no se realicen solicitudes desde otros servidores 

## Instalación

```bash
$ npm install
```

## Configurar variables de entorno

Ejecutar una base de datos Postgres de manera local con docker o en algún servicio en la nube, los datos de acceso a la base de datos se deben configurar en el archivo .env del proyecto 

DB_HOST_NAME => nombre del host o servidor donde está la base de datos
DB_PORT => puerto de la base de datos   
DB_USERNAME => usuario para realizar la conexión
DB_PASSWORD => contraseña de usuario
DB_NAME => nombre de la base de datos

Adicional a esto se deben configurar las siguientes variables de entorno

JWT_SECRET => es el secreto con el que se firmarán los token JWT
CLIENT_SECRET => es el secreto que debe ser igual en los dos microservicios para permitir la comunicación
PORT => es el puerto en el que se ejecutará la aplicación por defecto es el 3000

## Correr el proyecto 

```bash
# Desarrollo
$ npm run start

# Desarrollo modo auto reinicio
$ npm run start:dev

# Producción
$ npm run start:prod
```

## Stay in touch

- Author - [Alejandro Zapata](https://github.com/Alejandro2134)
- Author - [David Viuche](https://github.com/David-Viuche)


## License

Nest is [MIT licensed](LICENSE).
