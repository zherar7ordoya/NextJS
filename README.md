# REPOSITORIO LOCAL

> Debido al cambio de MASTER a MAIN
>



## Procedimiento para conectar a GitHub

> Advertencia: no toques nada antes de hacer esto.

Consola:

```markdown
git init
git add .
git commit -m "Gerardo Tordoya"
git remote add origin https://github.com/zherar7ordoya/NextJS.git
git pull origin main --allow-unrelated-histories
git checkout -b main
git push --set-upstream origin main
git push origin main
git push
```



### Procedimiento para trabajar localmente con una API-JSON

1. Para contar con un servidor JSON: `npm install -g json-server`
2. Crear un db.json
3. Puesto que el puerto por defecto es el 3000 (el mismo que usa NextJS), se puede configurar un puerto alternativo para el servidor a medida en  un archivo en la raíz llamado json-server.json en el que se especifique: `{ "port": 3004 }` y largar el servidor simplemente con `json-server --watch db.json`
4. O simplemente inicializar el servidor a medida indicando el puerto a usar: `json-server --watch db.json --port 3004`
5. Probar si funciona yendo a [http://localhost:3004/vehicles](http://localhost:3004/vehicles) 
6. Dejar a JSON-SERVER residente en esa consola y trabajar con NextJS en una nueva consola.
7. Para el DELAY de prueba que propone Bruno, el comando a usar es `json-server --delay 3000 --watch db.json`



## Procedimiento para actualizar repositorio local

> Hacer cuando se está seguro que la copia local debe ser sobre-escrita
>

Consola:

```markdown
git reset --hard HEAD
git pull
yarn install
```



## Procedimiento para actualizar trabajar con SQLITE

1. Instalar de Visual Studio la Carga de Trabajo: **Desarrollo para el escritorio con C++**
2. Instalar Python
3. Instalar con NPM

