---
sidebar_position: 3
---


1. **Acceder a su instancia vía SSH:**
   - Loguearse como super usuario ejecutando `sudo su`.
   
2. **Clonar el snippet de GitLab que contiene el script:**
   - `git clone https://gitlab.com/snippets/2079063.git script`

3. **Ingresar a la carpeta clonada:**
   - `cd script`

4. **Dar permisos de ejecución al script:**
   - `chmod +x install.sh`

5. **Ejecutar el comando de despliegue:**
   - El comando a utilizar para iniciar el despliegue requiere de un parámetro principal:
     ```
     ./install.sh [dominio]
     ```
     Por ejemplo:
     ```
     ./install.sh facturador.pro
     ```
   - Una vez ejecutado el comando, iniciará el proceso de actualización del sistema. Durante el proceso se le solicitará:
     - El usuario y contraseña de GitLab para descargar el proyecto en su instancia.
     - Si desea instalar un SSL gratuito. Tenga en cuenta que este debe ser actualizado cada 90 días. La pregunta será:
       ```
       Instalar con SSL? (Debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]
       ```
       Deberá contestar con "s" o "n" para continuar.
     - Si selecciona SÍ para instalar SSL, deberá contestar las siguientes preguntas con "y". Son 2 en total. Seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio, quedando como `_acme-challenge.example.com` o simplemente `_acme-challenge`, dependiendo de su proveedor .
     
      ![Imagen1](https://i.ibb.co/47L8R3m/Imagen2.png)
 
   


       Para continuar, presione Enter. Luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración. Si el proceso es exitoso, la ejecución del script continuará.
     - Si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de GitLab en el momento.
       ```
       Configurar clave SSH para actualización automática? (Requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]
       ```
       Deberá contestar con "s" o "n" para continuar.
     - Si selecciona SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de GitLab.

    
      ![Imagen1](https://i.ibb.co/rG3YRGc/Imagen3.png)



6. **Finalizado el script:**
   - Dependiendo de sus selecciones anteriores, se le entregará varios datos que debe guardar, como:
     - Usuario administrador.
     - Contraseña para usuario administrador.
     - URL del proyecto.
     - Ubicación del proyecto dentro del servidor.
     - Clave SSH para añadir a GitLab (obligatorio para quienes seleccionan la instalación de SSH).



### Enlaces de interés

- [Actualización de SSL](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1955372)
- [Actualización mediante ejecución Script para instalaciones Docker](https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker)
- [Gestión de SSL independiente, no el que incorpora el Script](../InstalacionFac/Pasos.md)
- [Guía GitLab para la instalación](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1971490): Contiene el script usado en el presente manual, además posee los parámetros extras que pueden usarse en la ejecución del paso 6.
