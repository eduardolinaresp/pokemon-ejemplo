# pokemon-ejemplo
pokemon-ejemplo

## Instrucciones
### En Visual studio.

    Instalar plugin go live y verificar live shared.

### En github

    1-Crear un repositorio en github.
    2-Crear un directorio local.
        mkdir pokemon
    3-Navegar al directorio local.
        cd pokemon
    3-Crear un repositorio local.
        git init
    4-Conectar repositiorio local con remoto.
        git remote add origin <la url de tu repositorio remoto>
    5-Verificar que este añadido el repositorio remoto.
        git remote -v
    6-Traer cambios al repositorio local. 
        git pull origin master --allow-unrelated-histories
    7-Crear nuevo branch desarrollo
        git checkout -b  dev
    8-Crear Directorio local src.
        mkdir src  
    9-Abrir visual studio.
        code . 
    10-En directorio src, crear nuevo archivo "index.html"
        digitar html y escoger html:5 
    11-Agregar archivos y directorios al branch del repositorio local.
        git add .
    12-Confirmar los archivos agregados al repositorio local.
        git commit -m"ADD commit inicial"       
    13-Subir cambios al repositorio remoto.
        git push origin dev





