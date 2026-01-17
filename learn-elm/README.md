# Ejecutar el Proyecto

## **Opción A** (la recomendada: más limpia y autocontenida)

- respeta el paradigma de Elm
- es reproducible
- no ensucia el sistema
- se integra perfecto con nvm + pnpm

**Agregar Elm como dependencia del proyecto:** (crear si no existe la carpeta `dist`)

```bash
pnpm add -D elm
pnpm exec elm make src/Main.elm --output=dist/main.js

```

En `dist` crear `index.html` y servirlo con:

```bash
pnpm dlx serve dist
```

**NOTA:** Esto se ha automatizado en los scripts del `package.json`:

```bash
pnpm run build
pnpm run serve
```

## **Opción B** (el Elm "más puro”, menos control)

Elm trae su propio servidor:

```bash
pnpm exec elm reactor
```

## DIFERENCIA CONCEPTUAL DE AMBAS OPCIONES

| `elm reactor`  | build manual    |
| -------------- | --------------- |
| Compila solo   | Vos compilás    |
| Sirve solo     | Vos servís      |
| Inyecta HTML   | Vos lo escribís |
| Ideal tutorial | Ideal proyecto  |

**NOTA:** El _reactor_ no es “la forma Elm”, es un entorno pedagógico.

---

# Apéndice

**¿Qué hace exactamente `pnpm dlx`?**

`pnpm dlx` es a `pnpm` lo que `npx` es a `npm`, pero bien hecho: ejecuta un paquete sin instalarlo en tu proyecto ni globalmente, en un entorno efímero, cacheado y aislado.

Cuando escribís..:

```bash
pnpm dlx serve dist
```

...ocurre esto:

1. pnpm busca el paquete serve
2. Si no está en cache, lo descarga
3. Lo ejecuta como si estuviera instalado
4. Al terminar:
    - no toca `package.json`
    - no toca `node_modules`
    - **no ensucia el sistema**

**📌 El paquete no pasa a existir como dependencia del proyecto.**

| Herramienta   | Instala  | Persiste | Ensucia |
| ------------- | -------- | -------- | ------- |
| `npm -g`      | global   | sí       | sí      |
| `pnpm add -D` | proyecto | sí       | no      |
| `pnpm dlx`    | no       | no       | no      |

Si tu objetivo declarado es...:

- proyectos autocontenidos
- sin paquetes globales
- sistema limpio

...entonces, así, `dlx` es **uso**, no **dependencia**.
