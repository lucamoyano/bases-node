# Node.js

Aplicación de consola que recibe un número y devuelve un archivo con la tabla de multiplicar

Párametro que recibe

| Parámetro | Abreviación | Descripción |
| ------ | ------ | ------ |
| ```--base``` | ```-b``` | Número a multiplicar |
| ```--listar``` | ```-l``` | Listar en consola: true/false |
| ```--hasta``` | ```-h``` | Valor hasta de la tabla |

Ejemplo de uso:
```sh
node app -b 3 -l -h 8
```

Resultado en consola
```
========================
     Tabla del:  3
========================
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
```

> tabla-3.txt creado