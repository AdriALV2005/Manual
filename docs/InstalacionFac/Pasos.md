---
sidebar_position: 4
---
# Docker | Linux | SSL externo 

1. **Instalación del software sin SSL**

    Ejecute el script de instalación, evitando la instalación del SSL. Cuando se le consulte en el proceso, deberá ingresar "n".
   
2. **Navegación a la ruta de instalación**

    Una vez finalizada la instalación, diríjase a la ruta de instalación ejecutando el siguiente comando:

    ```bash
    cd /root/facturadorpro31/   
    ```
3. **Edición del archivo .env**

    Edite el archivo `.env` utilizando el editor `nano`:
    ```bash
    nano .env  
    ```
    Dentro del editor ubicar los parámetros y cambiarlos:
Dentro del editor ubicar los parámetros y cambiarlos:

    | Antes                                | Después                              |
    |--------------------------------------|--------------------------------------|
    | `APP_URL=http://${APP_URL_BASE}  FORCE_HTTPS=false`     | `APP_URL=https://${APP_URL_BASE}FORCE_HTTPS=true`     |
    


4. **Modificación de parámetros**

    Dentro del editor, ubique los parámetros que necesita cambiar y modifíquelos según sea necesario.

5. **Guardado y cierre del editor**

    Una vez que haya realizado los cambios, guarde y salga del editor.

6. **Eliminación de la caché de la aplicación**

    Ejecute los siguientes comandos para eliminar la caché de la aplicación:
    ```bash
    php artisan config:cache
    ```

7.  **Finalización de la configuración y nota sobre la necesidad de SSL**

    Una vez completados estos pasos, habrá terminado de configurar la herramienta. Sin embargo, en este momento no podrá acceder a la herramienta hasta que tenga un SSL configurado.


## Importante
- Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.
