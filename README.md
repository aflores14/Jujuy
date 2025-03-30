Facultad de Ciencias de la Administración – UNER Introducción al Desarrollo Web
TRABAJO FINAL INTEGRADOR
INTRODUCCIÓN AL DESARROLLO WEB - 2025 1er cuatrimestre
TECNICATURA UNIVERSITARIA EN DESARROLLO WEB
OBJETIVOS El Trabajo Final Integrador tiene como objetivos que el estudiante:
● Aplique de manera práctica todos los conocimientos adquiridos durante el cursado de la asignatura, desarrollando una aplicación web funcional.
● Defina la estructura de los documentos web y establezca las relaciones entre ellos de manera coherente y eficiente. ● Implemente estilos adecuados que se adapten a dispositivos de diferentes resoluciones, garantizando una experiencia de usuario óptima. ● Interactúe con una API Rest intercambiando información de manera efectiva y gestionar los datos relacionados con los alojamientos, imágenes, servicios y relaciones entre ellos.
CONDICIONES DE ENTREGA
● El Trabajo Final Integrador deberá cumplir con las siguientes condiciones:
● Realizado en grupos de NO más de 5 (cinco) alumnos.
● Cargado en la sección del Campus Virtual correspondiente el enlace al repositorio GitHub donde se encuentre implementada la solución.
● En README.md indicar el apellido y nombre de los integrantes del grupo.
● Entregado antes de la fecha límite informada en el campus. ● Los integrantes del equipo deberán realizar un video de exposición del proyecto, detallando su funcionamiento y las decisiones de diseño tomadas. Este video deberá: ● Mostrar la pantalla del dispositivo donde se visualice el código y la aplicación en ejecución ● Exponer la voz de todos los integrantes explicando el proyecto. ● Idealmente, capturar en video a los integrantes mientras realizan la explicación.
● Cargarse en YouTube, Google Drive, Vimeo u otra plataforma similar y el enlace para su visualización será entregado junto con el link de donde se encuentra alojado el repositorio que contiene el proyecto. ● El Trabajo Final Integrador será calificado con una nota numérica y determinará si el alumno o grupo promociona la asignatura. ● Las soluciones presentadas deberán ser de autoría propia, evitando copias idénticas entre diferentes grupos y/o terceros. Se valorará la originalidad, exactitud, eficiencia y prolijidad en las soluciones planteadas, así como la calidad de la exposición realizada durante la presentación del proyecto. 2025 - Trabajo Final Integrador 1
Facultad de Ciencias de la Administración – UNER Introducción al Desarrollo Web
ENUNCIADO La empresa IDW S.A, para la cual usted trabaja está encargada del desarrollo de un sitio web que permite gestionar la reserva de casas de cumpleaños infantiles. Se pretende que este sitio sirva como catálogo de los distintos salones de eventos y servicios a contratar para lograr obtener un presupuesto de los mismos. Deberá proporcionar una experiencia visual atractiva y de fácil uso, permitiendo a los visitantes realizar filtros para encontrar el sitio y/o servicio más adecuado a sus necesidades. Habiendo concluído las etapas de análisis y diseño se le solicita llevar a cabo la programación del cliente web. El objetivo es crear interfaces de usuario interactivas, con diseño responsivo o adaptativo que persista datos utilizando la API LocalStorage y API/s REST externa/s, permitiendo a los usuarios explorar el catálogo de manera sencilla.
Se ha determinado necesario registrar los siguientes datos:
De los Salones de eventos:
● id,
● Título,
● Descripción,
● Dirección,
● Estado (Disponible o Reservado)
De los Servicio:
● id,
● Descripción.
● Valor
De las Imágenes:
● id,
● idSitio,
● Ruta Archivo.
De los Presupuesto:
● id,
● Apellido y nombre,
● Fecha,
● Temática,
● Valor Total,
● Servicios seleccionados.
REQUERIMIENTOS
2025 - Trabajo Final Integrador 2
Facultad de Ciencias de la Administración – UNER Introducción al Desarrollo Web
● Se debe contar con interfaces de usuario interactivas que permitan acceder a las siguientes opciones:
■ En referencia a la empresa IDW S.A:
● Portada.
● Información institucional.
● Contacto.
Para los administradores de IDW S.A:
■ En referencia a los Salones de eventos:
● Registrar uno nuevo.
● Editar los datos de uno existente.
● Eliminar un salón de eventos.
■ En relación a Imágenes:
● Registrar una nueva.
● Editar los datos de una existente.
● Eliminar una imágen.
■ En relación a Servicios:
● Registrar uno nuevo.
● Editar los datos de uno existente.
● Eliminar un servicio.
■ En relación a los Presupuestos:
● Poder crear nuevos para cada visitante externo.
● Mostrar el resultado final de sus elecciones.
2025 - Trabajo Final Integrador 3
