# REPOSITORIO LOCAL

## Procedimiento para conectar a GitHub

(Debido al cambio de MASTER a MAIN)

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