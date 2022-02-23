# gsheets2sendgrid
Send mails with google sheets and sengrid API

This project is licensed under the terms of the MIT License.

[Github project](https://github.com/YoshiHike/gsheets2sendgrid.git)

Este es un ejemplo donde se busca demostrar cómo el desarrollo de herramientas sencillas realizar envío masivo de correos aprovechando dos herramientas:

-   **Google Apps Script**, para la automatización de tareas en el paquete de herramientas ofimática basado en la web que ofrece Google; es una plataforma de scripting basado en javascript que nos permite interactuar con los diferentes documentos.  
    
-   **API SendGrid**, es una plataforma para la gestión de correos electrónicos, la cual expone una potente API REST por medio de la cual podemos realizar el envío de correos.
    
**¿Por qué Google Apps Script?** Es una potente y versátil plataforma basada en Javascript que es un lenguaje muy popular y fácil de aprender, en el cual se entregan diferentes APIs para interactuar con los documentos de Google WorkSpace y otros productos de Google; su uso personal es gratuito hasta ciertos límites y permite el trabajo colaborativo.

**¿Por qué Sendgrid?** Existen varias formas de enviar correos electrónicos, por ejemplo usando la funcionalidad de SMTP de diferentes proveedores como GMAIL, pero lograr que estos emails sean con una estética atractiva y tener el feedback sobre la entrega son atributos que soluciona sendgrid; haciendo uso de las denominadas Dynamic Templates es posible diseñar y probar los contenidos a enviar y en el dashboards de sendgrid es posible validar la entrega y obtener información si se presenta algún problema.

A continuación están los links de diferentes guías de inicio para las herramientas necesarias:

-   [Google Apps Script Overview](https://developers.google.com/apps-script/overview)
-   [Hands-on with Google Apps Script](https://codelabs.developers.google.com/codelabs/apps-script-intro/#0)    
-   [How to send an email with Dynamic Transactional Templates](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates)
-   [Github Sendgrid Examples](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates) 

## Descripción de los archivos del proyecto.

### code.js, Es el código para la dynamic template que se crea en Sendgrid.
![](https://lh6.googleusercontent.com/vijYXYifAowjURL42xyvZlCfGfiijbi0yVzbIqnNRotHIdkLQcEEjRljnxaOBAv6lvhr1Ea3g-Xwpc8IPGBi-DNdzPUiNdn-sGK_lCJqQKWoc0xr36MTXHDNt8JJZkYxdeWfNyI0)

### templete.html, Es el código para la dynamic template que se crea en Sendgrid.

![](https://lh3.googleusercontent.com/55IopBVaci3ajXwdBeNesS944EvIsPCFnn5rPetHE29sUUlghXCs1P9Xpma84XtoAchoWWdU5Le69DsAxKZnS_pHFHJDtl_3hpoja-CPDAoPSXooTHSQ42dRXtgcOypK7IUVFJjO)

![](https://lh6.googleusercontent.com/g1xyw9xWsnJ778fwv5bnN0qXNBqK9t59zIwJ_2o3Dlgt9w4UTX0bBWen5-F_K6xushDfyy60YJ0gHY996EbZVYGn-FTuYpATnk5VudSxolfRpsr1bkxUzjsBr-_U3Ft92lxdJZ8N)

###  test_data.json, son los datos de ejemplo se utiliza para validar el correcto funcionamiento de los datos dinámicos.

![](https://lh4.googleusercontent.com/UiqJG8admFePIuaZg0NKrQy3LKDrTe_y_5JqXIy2EVEB28X9rzoPZuQ3PlnHLSD7RPlvaOhNsYWBlz2p_NyWacqGwX3BIRf-8agqP71mKe5AfznZ4mPnkaWbVfdqCY_LY_S9xlRK)

### Hoja de calculo de plantilla,  [Example gsheets2sendgrid](https://docs.google.com/spreadsheets/d/1JjkckkTGOstGeDlxkJRe4ZyrbC_JX-sdwsnBLNmaG-Y/edit?usp=sharing)

 Este es la hoja de cálculo de google donde se ejecutara nuestro script, contiene también los datos que se reemplazan en la plantilla como los datos de configuración para poder utilizar la API de Sendgrid. 

![](https://lh3.googleusercontent.com/QgqFqjPWeI5YI_AHFAX9UJ9Yqm23gOl9kwvfBr0JKqgp9hy25BsWlpeROc67Ym2sjkcs0rxHiBwF8kHU7ogfk-7HB8EXP8yJHNkBc43782md7tlEEZWRfAjfgjSeEd_j4D0trbPN)

En la hoja DATA, en la fila 1 se establece el tipo de dato de tres opciones:
-   TEXT es el valor por defecto y corresponde a una cadena simple de caracteres a la cual no se le realiza procesamiento.    
-   LIST es una lista simple de elementos separados por coma, se procesa para convertirse en una array JSON ["A", "B", "c"]
-   JSON_LIST es una lista de objetos JSON, se procesa con la función javascript JSON.parse para convertir texto en objetos JSON; se debe tener en cuenta los nombres de las llaves para coincidir con los usados en la plantilla de sendgrid.

En la fila 2 se establecen los nombre de las variables de los datos, se debe tener en cuenta los nombres de las llaves para coincidir con los usados en la plantilla de sendgrid.
De la fila 3 en adelante corresponde a los datos con los cuales se enviaran los correos electrónicos.
En hoja VARS se establece la información requerida para utilizar la API de sendgrid y se vincula el código de apps script a un botón para realizar la ejecución del mismo.

![](https://lh6.googleusercontent.com/7aVJ_EJYWRkb8LSibLAYjQ5oEle3xlFbWDLF3Avmyg6BkgeyHxwghJM4xWMVTqkIDVHilmZOq8MJ7oUw-ZrwpCN0Udu97C3XgiOII6Iw3-OK9KnSaKr_zP8bB-zQmxkzHuLUE3A8)

Para vincular el código del proyecto Apps Script y la hoja de calculo se debe realizar los siguientes pasos:

 - Agregar el proyecto como una extensión de la hoja de calculo.

![](https://lh6.googleusercontent.com/pxo_CbcGvieWFY-SMuRxxYxgcC8d25trX0E2qKE_JkWkQD0Qn-WdEItwt5x6P2QqlAe7vRo02uluNzGu-HY57kigDnro_VLg-NDj2VKfe_PFzGfPqmriHL-rFLrkmMqrf3MBS1qV)

  - Se abrirá  una nueva venta/pestaña donde podrá seleccionar el proyecto o crear uno nuevo.

![](https://lh3.googleusercontent.com/zBqF9PDgzmB5lgdGsto41R6nLRHlFxJ4jH2Lz-w0GGOEQmJ8w9VD9D2MVOSDdtYKPkU4yYMdFIxq7KSyDbNq7f3IVLuYxyGJJB5voYgKZ6jx1g9QSHh-gKaL-oxy6QlFwM18ZFDH)

  - Regrese a la hoja de calculo y realizando click secundario sobre el botón para selecciónalo luego dar click en los tres puntos para desplegar las opciones y hacer click en asignar secuencia de comandos.

![](https://lh5.googleusercontent.com/Ja_DohbZIUwh-MG2TEjAx_mZVgYp4ib-RzrfNhibGtZn7r0Y-y0JdnssNJCQvNsOvFUU6aD3bcD7lrGaeXoKCbhMFV5xBGEUTeTQVtADSvAIm2q1QHCQKLERw_J17uW46Fct3ReY)

  - Se mostrara un formulario donde debe ingresar el nombre de la función del código de App Script que se debe ejecutar.

![](https://lh6.googleusercontent.com/J3CCAFSqXnxdWWmF0V279vOdCjac7RYwp6ipIjM5ekHP1v16-3FahOPK6ViijXYppjIzwgCzvXlUJ68kum3ADq4QcWjO_-2Kw8JlHYdWYXKV1SeKdgoBOLlehWX4iKzdjENKqDYu)

  - Ahora al hacer click en el botón se pude mostrar un mensaje para autorizar la ejecución de extensiones, debe aceptar para continuar.

![](https://lh4.googleusercontent.com/GWHJRLmUoK6veI_a9TV0wS0ycf0mPOUnA-oFLXBACWzV-BayZa4HMS6_peVs0Nea-t9tk2cGV4f4QmjEJPnZRfC4M7dgqu4yuG803WSiOjsaknPHxKOniW2GyA1Tenc0BbBXs8MO)

  - Cuando el script se ejecuta muestra una serie de cuadros de dialogo como control de flujo para evitar envíos de correos electrónicos por error.

![](https://lh4.googleusercontent.com/1ssi7FWJ0b0NkExIGgnl1-JZIoZOzTFN3cC7GFX8w9Z2xNm4k5KcEqsIsnssm64rWguFazbCZWrZre8gjedMTAr1N9ZUzU-XiZhy1odP5y-Qjfj8zUxrBJ_On1HoYDKn4-4wRAMI)
