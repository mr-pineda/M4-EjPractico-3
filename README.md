# Página Hospital ...

## Descripción:

Propuesta de página web para el **Hospital ...**. En esta nueva versión se integró `JavaScript` para mejorar la interacción con el usuario y gestionar mejor la información del equipo médico. El sitio consta de 3 vistas:

- **Inicio**: Muestra mensaje de bienvenida, información general y testimonio de pacientes.
- **Equipo Medico**: Muestra información sobre el compromiso de atencion a los pacientes y sobre el equipo médico. Tiene un chekbox para filtrar a los médicos que atiende por fonasa.
- **Contacto**: Contiene un formulario de contacto para comunicarse con el hospital.

En todas las pantallas Hay un boton para agendar Hora, el cual solicita datos mediante prompts.

## Instrucciones:

1. Descargar el contenido de este repositorio en el computador. Puede ser clonando el repositorio o descargando el .zip:

   - **Clonar el repositorio**: Puede hacerlo con cualquier gestor de repositorios. Si tiene git instalado, puede abrir una terminal en algun diretorio y ejecutar:

   ```bash
   git clone url_de_este_repo
   ```

   - Si no tiene git instalado puede presionar el botón verde `<> Code` que está en esta página y seleccionar la opción `Download ZIP`.
     1. Descargue el archivo .zip en algun directorio conocido _(ej: Escritorio, Documentos, etc.)_.
     2. Descomprima el archivo .zip

2. Dentro de la carpeta, abrir el archivo `index.html` con su navegador de preferencia.

## Estructura de carpetas y archivos

- Los archivos .html estan en la raíz del directorio.
- En el directiorio `assets` se encuentran archivos multimedia y de estilos utilizados en el sitio.
  - `./assets/img` contiene las imágenes utilizadas en el sitio.
  - `./assets/css` contiene los archivos de estilo (Usando archivos sass).
- El directorio `./lib/*` contiene las librerías utilizadas (En este caso solo Bootstrap).
- El directorio `./src/scripts/` contiene los scripts de JavaScript.
- El directorio `./src/data/` contiene los archivos .json.

  ## Análisis de Rendimiento con Profiler  

**Profiler** es una herramienta integrada en ReactDevTools que permite analizar y optimizar el rendimiento de una página desarrollada en React.  

Realizamos un análisis de nuestra aplicación en distintas secciones:  

### Página de Inicio  
- **Tiempo total de renderizado:** **2.6 ms** (velocidad aceptable).  
- **Componente más lento:** **Header** (**0.2 ms**).  
- **Componente más rápido:** **Footer** (**0.1 ms**).  

### Sección de Equipo  
- **Tiempo total de renderizado:** **3.1 ms** 
- **Componente más lento:** **Header** (**0.2 ms**).  
- **Componente más rápido:** **Footer** (**0.1 ms**).  

### Sección de Contacto  
- **Tiempo total de renderizado:** **8.7 ms** 
- **Componente más lento:** **AppointmentForm** (**0.6 ms**).  
- **Componente más rápido:** **Footer** (**0.1 ms**).  


## TO-DO (Rúbrica)

1. Implementación de Vistas Complejas con ReactJS:

   - [x] Crea y estructura tres vistas principales del sistema del hospital usando componentes avanzados:
     - [x] Vista Principal (Home): Incluye una lista de servicios destacados y una sección con información del hospital.
     - [x] Vista del Equipo Médico: Muestra los perfiles de doctores utilizando componentes DoctorCard para cada miembro del equipo, permitiendo filtrar por especialidad.
     - [x] Vista de Citas: Implementa un formulario para agendar citas con validaciones y uso de Hooks (useState, useEffect).

2. Optimización del DOM Virtual y Uso de Fragmentos:

   - [ ] Usa el DOM Virtual para gestionar eficientemente la actualización de datos en las diferentes vistas, asegurando que solo los elementos necesarios se actualicen.
   - [x] Implementa Fragmentos (<React.Fragment>) para evitar añadir nodos innecesarios en el DOM y mejorar la estructura del código en las diferentes secciones del sistema.

3. Uso de Referencias y Callbacks:

   - [x] Implementa referencias para interactuar con los elementos del DOM en una de las vistas, como:
     - [x] Enfocar automáticamente en un campo de entrada cuando el usuario ingresa a la vista de Citas.
     - [x] Cambio de color cuando el mouse posa sobre algun elemento de la vista Citas.

4. Manejo de Datos con API REST Simulada:

   - [x] Simula la obtención de datos del equipo médico y servicios a través de una API REST utilizando fetch y maneja las respuestas de manera asíncrona con async/await.
   - [x] Carga los datos en la vista correspondiente (Equipo Médico, Servicios) al montar el componente, utilizando Hooks como useEffect.

5. Optimización de Rendimiento y Uso de Profiler:

   - [ ] Usa Profiler para identificar posibles problemas de rendimiento y optimiza la renderización de componentes que manejan grandes volúmenes de datos, como la lista de doctores o servicios.

6. Comprobación de Tipos con PropTypes

   - [x] Implementa PropTypes en todos los componentes para verificar los tipos de datos y asegurar que los valores pasados como props son válidos, evitando errores en la aplicación.
