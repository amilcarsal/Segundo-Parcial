# Segundo-Parcial
## Amilcar Salazar 5990-19-16976
Este proyecto es una aplicación web construida con **React** y **Vite** que consume un API para mostrar una lista de cursos. Cada curso incluye su nombre, créditos y una descripción. La aplicación también tiene funcionalidades para limpiar y guardar información.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida y moderna.
- **JavaScript**: Lenguaje de programación utilizado.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone (https://github.com/amilcarsal/Segundo-Parcial)

##Uso
La aplicación hará una solicitud a la API para obtener la lista de cursos al cargar.
Los cursos se mostrarán con su nombre, créditos y descripción.
Puedes utilizar los botones para limpiar o guardar la información.
## Funcionalidad

La aplicación ofrece las siguientes funcionalidades:

- **Consumo de API**: Realiza una solicitud a `https://test-deploy-12.onrender.com/cursos` para obtener una lista de cursos.
  
- **Visualización de Cursos**: Muestra cada curso con su nombre, créditos y descripción en la interfaz de usuario.
  
- **Manejo de Estados**:
  - **Cargando**: Muestra un mensaje mientras se obtienen los datos.
  - **Error**: Indica si hubo un problema al realizar la solicitud.
  - **Datos**: Presenta la información de los cursos cuando se recibe la respuesta.

- **Botones de Interacción**:
  - **Limpiar**: Permite borrar la información mostrada.
  - **Guardar**: Funcionalidad pendiente para guardar la información (ej. en localStorage).

- **Interfaz de Usuario**: Diseño simple y accesible para facilitar la navegación y visualización de la lista de cursos.
