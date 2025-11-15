# 🚀 Cloudflare Pages Setup Guide

## Configuración Automática (Recomendado)

### Opción 1: Git Integration (Más Fácil)

1. **Ve a Cloudflare Dashboard**
   - https://dash.cloudflare.com/
   - Workers & Pages → Create application → Pages → Connect to Git

2. **Conecta tu repositorio GitHub**
   - Selecciona: `TheGameApp/TheGameAppWeb`
   - Autoriza el acceso

3. **Configura Destined Web**
   ```
   Project name: destined-web
   Production branch: main
   
   Build settings:
   Framework preset: None
   Build command: (dejar vacío)
   Build output directory: /
   Root directory (advanced): apps/destined_web
   ```

4. **Configura Aura Alpha Web**
   ```
   Project name: aura-alpha-web
   Production branch: main
   
   Build settings:
   Framework preset: None
   Build command: (dejar vacío)
   Build output directory: /
   Root directory (advanced): apps/aura_alpha_web
   ```

5. **Deploy automático**
   - Cada push a `main` desplegará automáticamente
   - Los cambios en `apps/destined_web/**` actualizarán Destined
   - Los cambios en `apps/aura_alpha_web/**` actualizarán Aura Alpha

---

## Opción 2: GitHub Actions (Avanzado)

Si prefieres usar GitHub Actions para más control:

### Paso 1: Obtener Credenciales de Cloudflare

1. **Account ID**
   - Ve a Cloudflare Dashboard
   - Copia el Account ID de la URL o desde Workers & Pages

2. **API Token**
   - Ve a: https://dash.cloudflare.com/profile/api-tokens
   - Create Token → Edit Cloudflare Workers
   - Permissions:
     - Account - Cloudflare Pages - Edit
   - Copia el token generado

### Paso 2: Configurar Secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Agrega estos secrets:
   - `CLOUDFLARE_API_TOKEN`: El token que copiaste
   - `CLOUDFLARE_ACCOUNT_ID`: Tu Account ID

### Paso 3: Los workflows ya están configurados

Los archivos `.github/workflows/` ya están creados y listos:
- `deploy-destined.yml` - Despliega Destined Web
- `deploy-aura-alpha.yml` - Despliega Aura Alpha Web

Estos workflows se ejecutarán automáticamente cuando hagas push a `main`.

---

## Opción 3: Deploy Manual con Wrangler CLI

### Instalación

```bash
npm install -g wrangler
```

### Autenticación

```bash
wrangler login
```

### Deploy Destined Web

```bash
cd apps/destined_web
wrangler pages deploy . --project-name=destined-web
```

### Deploy Aura Alpha Web

```bash
cd apps/aura_alpha_web
wrangler pages deploy . --project-name=aura-alpha-web
```

---

## Configuración de Dominios Personalizados

Una vez desplegadas las aplicaciones:

### Destined Web
1. Ve a tu proyecto en Cloudflare Pages
2. Custom domains → Set up a custom domain
3. Agrega: `destined.app` o `www.destined.app`
4. Cloudflare configurará automáticamente los DNS

### Aura Alpha Web
1. Ve a tu proyecto en Cloudflare Pages
2. Custom domains → Set up a custom domain
3. Agrega: `auraalpha.com` o `www.auraalpha.com`
4. Cloudflare configurará automáticamente los DNS

---

## URLs de Producción

Después del primer deploy, tus sitios estarán disponibles en:

- **Destined Web**: `https://destined-web.pages.dev`
- **Aura Alpha Web**: `https://aura-alpha-web.pages.dev`

---

## Troubleshooting

### Error: "Missing entry-point"
- Asegúrate de usar `wrangler pages deploy` (no `wrangler deploy`)
- Especifica el directorio correcto

### Error: "Authentication error"
- Ejecuta `wrangler login` primero
- O configura `CLOUDFLARE_API_TOKEN` en las variables de entorno

### Error: 404 en rutas
- Verifica que `index.html` esté en la raíz del directorio especificado
- Asegúrate de que el Root directory esté configurado correctamente

---

## Recomendación Final

**Usa Git Integration (Opción 1)** - Es la forma más simple y automática:
- ✅ No requiere configuración de secrets
- ✅ Auto-deploy en cada push
- ✅ Preview deployments para PRs
- ✅ Rollback fácil desde el dashboard
- ✅ Sin comandos manuales

Solo necesitas:
1. Conectar el repo en Cloudflare
2. Especificar el Root directory
3. ¡Listo! Push y deploy automático
