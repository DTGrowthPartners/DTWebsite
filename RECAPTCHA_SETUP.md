# Configuración de reCAPTCHA v2

## El Problema

Si ves un error como "ERROR del propietario del sitio: El tipo de clave no es válido", significa que la Site Key de reCAPTCHA no está configurada correctamente para tu dominio.

## Solución

### 1. Accede a la Consola de Google reCAPTCHA

Ve a: https://www.google.com/recaptcha/admin

### 2. Selecciona o Crea tu Sitio

- Si ya tienes un sitio registrado, selecciónalo
- Si no, haz clic en el botón "+" para crear uno nuevo

### 3. Configuración del Sitio

#### Para un NUEVO sitio:

1. **Etiqueta**: Nombre descriptivo (ej: "DT Growth Partners")
2. **Tipo de reCAPTCHA**: Selecciona **"reCAPTCHA v2"** > **"Casilla de verificación 'No soy un robot'"**
3. **Dominios**: Agrega los siguientes dominios (uno por línea):
   ```
   localhost
   127.0.0.1
   dtgrowthpartners.com
   www.dtgrowthpartners.com
   ```
   (Ajusta según tus dominios reales)

4. **Acepta los términos** y haz clic en "Enviar"

#### Para un sitio EXISTENTE:

1. Haz clic en el ícono de configuración (⚙️) de tu sitio
2. Ve a la sección **"Dominios"**
3. Asegúrate de agregar:
   ```
   localhost
   127.0.0.1
   ```
   Además de tu dominio de producción

### 4. Copia las Claves

Después de crear/configurar el sitio, verás:
- **Site Key** (Clave del sitio)
- **Secret Key** (Clave secreta)

### 5. Actualiza tu Archivo `.env`

Copia la **Site Key** y actualiza el archivo `.env` en la raíz del proyecto:

```env
VITE_RECAPTCHA_SITE_KEY=tu_nueva_site_key_aqui
```

### 6. Reinicia el Servidor de Desarrollo

```bash
npm run dev
```

## Verificación en el Backend

El backend debe verificar el token de reCAPTCHA haciendo una petición POST a:

```
https://www.google.com/recaptcha/api/siteverify
```

Con los parámetros:
- `secret`: Tu Secret Key (6LdxmjcsAAAAAJ7Ja8E-sxd9zHs45sqwRYZaLsSs)
- `response`: El token recibido del frontend

Ejemplo en Node.js:

```javascript
const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `secret=YOUR_SECRET_KEY&response=${recaptchaToken}`
});

const data = await response.json();

if (data.success) {
  // reCAPTCHA válido
} else {
  // reCAPTCHA inválido
  console.error('Error codes:', data['error-codes']);
}
```

## Códigos de Error Comunes

- `invalid-input-response`: El token es inválido o ha expirado
- `invalid-input-secret`: La Secret Key es incorrecta
- `missing-input-response`: No se proporcionó el token
- `missing-input-secret`: No se proporcionó la Secret Key
- `timeout-or-duplicate`: El token ya fue usado o ha expirado

## Modo de Prueba (Desarrollo)

Para desarrollo local, Google reCAPTCHA permite usar claves de prueba que siempre validan correctamente:

**Site Key de Prueba:**
```
6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

**Secret Key de Prueba:**
```
6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

Estas claves son públicas y solo deben usarse en desarrollo.
