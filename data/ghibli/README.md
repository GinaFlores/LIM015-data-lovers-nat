<<<<<<< HEAD

# PROYECTO DATA DEL STUDIO GHIBLI

Este PROYECTO es una página web  interactiva que va dirigido a cinefilos y faánitcos del ánime que desean visualizar detalles  de sus peliculas favoritas del estudio Ghibli , que es el estudio japonés de animación, considerado por la crítica especializada y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad.


Toda esta información puede ser manejada por los usuarios, de tal manera que puedan filtrarla y ordenarla según diversas especificaciones.


## Contenido

* [1. detalles  de la página web](#1-detalles-de-la-página-web)

* [2. Historias de usuario](#2-historias-de-usuario)

* [3. Prototipo de alta fidelidad](#3-prototipo-de-alta-fidelidad)

* [4. Plan de acción](#4-plan-de-acción)

* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***

## 1. detalles  de la página web

[![studio-ghibli-web.png](https://i.postimg.cc/sxVNkv46/studio-ghibli-web.png)](https://postimg.cc/47SPt4MV)

El proyecto estuvo pensado para lucir como una página web de Studio Ghibli. Esta cuenta con una seccion de header, donde vemos el logo y un paisaje que refleja las animaciones del estudio. También se proporcionó una sección para el creador Hayao Miyazaki, con una frase inspiradora. Y finalmente la sección de películas, en donde se puede ordenar, filtrar, buscar y acceder a la información de las animaciones. Así mismo, se pueden ver los personajes, locaciones y vehículos de cada película.

👉 Dale un vistazo al [Figma](https://www.figma.com/file/B8H0RKO5TnX4x5GfPMqVx4/Data-Lovers?node-id=0%3A1) del proyecto.

## 2. Historias de usuario
Las historias de usuario son descripciones cortas y simples de una característica contada desde la perspectiva de un usuario.

[![historiausuario.png](https://i.postimg.cc/K8y9sKzB/historiausuario.png)](https://postimg.cc/qzjXNv2v)

## 3. Prototipo de alta fidelidad

[![dibujo.png](https://i.postimg.cc/654SPJhJ/dibujo.png)](https://postimg.cc/6ywY7PSY)

## 4. Plan de acción
1. Conocer al usuario
2. Armar las historias de usuario y criterios de aceptación 
3. Elaborar prototipo de alta fidelidad en Figma 
4. Feedback de usuarios para mejorar prototipo
5. Mejorar el prototipo
6. Implementar la interfaz (html/css/js)
7. Pantalla de inicio (header con botón y sección de Hayao)
8. Sección de películas: Mostrar los posters en divs
9. Sección de películas: Colocar div flotante donde se muestra título, descripción, etc
10. Sección de películas: Ordenar data según especificaciones:
    - Por score 
    - Por year of release
    - Latest animations
    - De la A a la Z
    - De la Z a la A
      - Testing de sort 
11. Sección de películas: Filtrar data según especificaciones
    - Top 5
    - Directed by Hayao
    - Directed by Isao
    - Produced by Toshio
      - Testing de filtrado

Agregar las secciones 
* Sección de personajes: Mostrar los personajes en divs.
* Sección de personajes: Calcular cantidad de personajes.
* Sección de locaciones: Mostrar los personajes en divs.
* Sección de Vehiculos: Mostrar los personajes en divs.

## 5. Objetivos de aprendizaje

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [x] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [x] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [x] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [ ] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [x] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [x] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [x] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 9. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.

=======
>>>>>>> upstream/nuevaRama4
