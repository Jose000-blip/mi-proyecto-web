# TransCargo Express - Sitio Web Corporativo

## 📋 Descripción
Sitio web profesional para empresa de transporte y logística TransCargo Express. Página moderna, responsive y parcialmente funcional desarrollada para el primer parcial del curso de desarrollo web.

## 🌟 Características

### ✨ Diseño y UX
- **Diseño Responsive**: Se adapta perfectamente a móviles, tablets y escritorio
- **Animaciones Suaves**: Efectos de scroll y transiciones elegantes
- **Interfaz Moderna**: Gradientes, sombras y efectos visuales atractivos
- **Navegación Intuitiva**: Menú fijo con scroll suave entre secciones

### 📱 Funcionalidades
- **Menú Hamburguesa**: Navegación móvil completamente funcional
- **Formulario de Contacto**: Con validación en tiempo real
- **Animaciones de Scroll**: Elementos que aparecen al hacer scroll
- **Header Dinámico**: Cambia de estilo según el scroll
- **Botón Scroll to Top**: Para volver rápidamente arriba
- **Contador Animado**: Estadísticas que se animan al verlas

### 🎨 Elementos Visuales
- **Paleta de Colores**: Azules profesionales con acentos dorados
- **Tipografía**: Arial para máxima legibilidad
- **Iconos**: Emojis para compatibilidad universal
- **Efectos Hover**: Interacciones suaves en todos los elementos

## 🏗️ Estructura del Proyecto

```
mi-proyecto-web/
├── index.html              # Página principal
├── styles/
│   └── style.css          # Estilos CSS
├── scripts/
│   └── script.js         # JavaScript funcional
├── README.md             # Este archivo
```

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y CSS Grid
  - Animaciones y transiciones
  - Media queries para responsive
  - Gradientes y efectos visuales
- **JavaScript Vanilla**:
  - Intersection Observer API
  - Event Listeners
  - Form validation
  - Smooth scrolling

## 📄 Secciones del Sitio

### 🏠 Header/Navegación
- Logo de la empresa
- Menú de navegación responsive
- Menú hamburguesa para móviles

### 🎯 Hero Section
- Mensaje principal de la empresa
- Call-to-action prominente
- Fondo con gradiente atractivo

### 🚚 Servicios (6 servicios)
1. **Transporte de Carga** - Mercancía general
2. **Transporte de Pasajeros** - Rutas intermunicipales
3. **Envíos Express** - Entregas urgentes
4. **Logística Empresarial** - Soluciones corporativas
5. **Carga Refrigerada** - Cadena de frío
6. **Carga Especial** - Mercancía delicada

### 🏢 Sobre Nosotros
- Historia de la empresa (fundada en 2008)
- Misión y valores
- Estadísticas animadas:
  - 15+ años de experiencia
  - 500+ clientes satisfechos
  - 50+ vehículos en flota
  - Servicio 24/7

### 🚛 Flota de Vehículos
- Camiones de carga (5-35 toneladas)
- Tractomulas (alto tonelaje)
- Buses de pasajeros (20-50 personas)
- Vehículos refrigerados

### 📞 Contacto
- **Dirección**: Carrera 15 #45-67, Malambo, Atlántico, Colombia
- **Teléfonos**: +57 (5) 123-4567 / +57 300 123 4567
- **Email**: info@transcargoexpress.com
- **Horarios**: Lun-Vie 7AM-6PM, Sáb 8AM-2PM
- Formulario de cotización funcional

### 🔗 Footer
- Enlaces rápidos
- Información de la empresa
- Enlaces de redes sociales
- Copyright y créditos

## 💻 Instalación y Uso

### Opción 1: Descarga Directa
1. Descarga todos los archivos
2. Mantén la estructura de carpetas
3. Abre `index.html` en tu navegador

### Opción 2: Para GitHub Pages
1. Sube todos los archivos a tu repositorio
2. Asegúrate que `index.html` esté en la raíz
3. Activa GitHub Pages en configuración

### Opción 3: Para Vercel
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente el proyecto
3. Deploy automático

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS principales en `style.css`:
```css
/* Colores principales */
--primary-blue: #1e3c72;
--secondary-blue: #2a5298;
--accent-gold: #ffd700;
--light-gold: #ffed4e;
```

### Cambiar Información de la Empresa
1. **Nombre**: Busca "TransCargo Express" en `index.html`
2. **Dirección**: Modifica la sección de contacto
3. **Teléfonos**: Actualiza en la sección contacto
4. **Servicios**: Edita las tarjetas de servicios

### Añadir Imágenes Reales
1. Crea la carpeta `images/`
2. Añade tus imágenes
3. Reemplaza los placeholders en CSS:
```css
.hero {
    background: url('./images/hero-bg.jpg');
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: hasta 767px
- **Mobile Small**: hasta 480px

## ✅ Checklist de Entrega

- [x] Código HTML semántico y válido
- [x] CSS organizado y comentado
- [x] JavaScript funcional sin errores
- [x] Diseño completamente responsive
- [x] Formulario de contacto funcional
- [x] Navegación suave entre secciones
- [x] Animaciones y efectos visuales
- [x] README.md completo
- [x] Estructura de archivos organizada

## 🐛 Solución de Problemas Comunes

### El CSS no se carga
- Verifica que la ruta en `index.html` sea correcta: `styles/style.css`
- Asegúrate que la carpeta `styles/` exista

### El JavaScript no funciona
- Revisa que la ruta sea correcta: `scripts/script.js`
- Abre la consola del navegador (F12) para ver errores

### El menú móvil no funciona
- Verifica que el JavaScript esté cargado correctamente
- Comprueba que no haya errores en la consola

### Las animaciones no se ven
- Algunos navegadores antiguos no soportan todas las animaciones
- Las animaciones se desactivan en modo ahorro de batería

## 🚀 Mejoras Futuras Posibles

- [ ] Integración con API de mapas para mostrar ubicación
- [ ] Sistema de cotizaciones en línea con base de datos
- [ ] Chat en vivo con clientes
- [ ] Galería de imágenes reales de la flota
- [ ] Blog de noticias y actualizaciones
- [ ] Panel de administración
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App)

## 👨‍💻 Autor

**[Dairo Jose Narvaez Morales]**  
Proyecto de Primer Parcial - Desarrollo Web  

## 📄 Licencia

Este proyecto es de uso educativo para el curso de desarrollo web.

---

## 🎯 Datos para el Parcial

**Repositorio GitHub**: `mi-proyecto-web`  
**Empresa**: TransCargo Express  
**Tipo**: Sitio web corporativo de transporte  
**Tecnologías**: HTML5, CSS3, JavaScript Vanilla  
**Responsive**: ✅ Sí  
**Funcional**: ✅ Parcialmente

---
