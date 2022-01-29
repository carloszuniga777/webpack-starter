import '../css/component.css';
// import webpacklogo from '../asset/img/webpack-logo.png';

export const saludar = (nombre = 'Sin nombre') =>{
    console.log(`Creando un nuevo elemento`);
    const h1 = document.createElement('h1');
    h1.innerText = `Mi nombre es ${nombre}!!!`;

    document.body.append(h1);


    //img 
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);

}