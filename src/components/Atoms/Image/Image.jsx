import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width} />
  </div>
);

export default MyImage;
/*

archivo deploy.sh en la raíz del proyecto

#!/usr/bin/envsh

# abortar en caso de errores
###set -e

# compilado
###npm run build

# navega al directorio de salida de compilación
###cd dist

# coloca .nojekyll para forzar el procesamiento de Jekyll
###echo > .nojekyll

# si estás desplegando en un dominio personalizado
# echo 'www.ejemplo.com' > CNAME

###git init
###git add -A
###git commit -m 'deploy'

# si estás desplegando en https://<NOMBRE DE USUARIO>.github.io
# git push -f git@github.com:<NOMBRE DE USUARIO>/<NOMBRE DE USUARIO>.github.io.git main

# si estás desplegando en https://<NOMBRE DE USUARIO>.github.io/<REPO>
# git push -f git@github.com:<joseasosa24>/web-inmobiliaria.git main:gh-pages

###cd -*/