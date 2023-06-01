# Trabajo Práctico de React
## Ejercicio 7 - Lista de Empleados

Este proyecto es una aplicación web desarrollada en **React** que muestra una lista de empleados utilizando componentes reutilizables.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abre tu navegador web y ve a la dirección que aparece en la terminal, que debe ser algo como esto:

    ```http://localhost:5173/```

## Funcionamiento de los componentes

### App.jsx

El componente `App` es el componente principal de la aplicación. Renderiza un encabezado con los títulos. Luego muestra el componente `EmpleadoLista` que contiene la lista de empleados.

### EmpleadoLista.jsx

El componente `EmpleadoLista` muestra la lista de empleados. Utiliza un arreglo de empleados definido en el componente para generar dinámicamente componentes `EmpleadoRow` para cada empleado.

### EmpleadoRow.jsx

El componente `EmpleadoRow` muestra una fila de información de un empleado. Recibe las propiedades `fullName`, `title`, `department` y `pic` para mostrar los datos del empleado. Utiliza el componente `EmpleadoAvatar` para mostrar el avatar del empleado.

### EmpleadoAvatar.jsx

El componente `EmpleadoAvatar` muestra el avatar de un empleado. Recibe las propiedades `pic` y `fullName`. Renderiza una imagen redondeada con el avatar del empleado.