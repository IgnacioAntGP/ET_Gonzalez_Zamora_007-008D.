# ProyMovilCheckIn
# Proyecto semestral en Ionic/Angular - PGY4121 - 007D/008D
# Descargar Node.js 18.20.4 en adelante
Enlace a Repositorio de la Data:
https://github.com/BenjaminZamr/Data
Enlace al DEPLOY:
https://data-y3qy.onrender.com
# Angular:
npm i -g @angular/cli@16
# Ionic:
npm i -g @ionic/cli@7

# Bibliotecas:
# Angular QRcode:
npm install angularx-qrcode --save
# API Nativa Cámara(para cambiar las fotos, aún no activa cámara, por investigar):
npm i @capacitor/camera
# Swiper (carrusel de fotos):
npm install swiper
# BUILD preparing for android
ionic build
# Android capacitor for Angular
npm install @capacitor/android
# Add capacitor
npx cap add android
# App config for android
ionic capacitor sync android
ionic capacitor copy android
Ionic capacitor open android
