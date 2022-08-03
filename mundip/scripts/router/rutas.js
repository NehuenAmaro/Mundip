//Este componente puede ser solamente el objeto de configuración,
// no es necesario registrarlo con Vue.componente para usarlo con
// Vue Router.

const home = { template: `<div><h1>Hola!</h1> </div>`, name:"componente1"
};
const about = {template: `<div><h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1> </div>` , name:"componente2"
};
const ingresarDato = {template: `<h1>Ingresar dato</h1>`, name:"componente4"
};
const mostrar = {template: `<ver></ver>`, name:"componente3", 
};
// Definir el "mapeo" de rutas.
// Acá es donde asociamos tal ruta a tal componente.
const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '*', redirect: '/' }

];
// Instanciamos el Router con las routes.
const router = new VueRouter({
	// Este objeto recibe 1 propiedad que sea "routes" que contenga
    // el array de rutas.
    // routes: routes
    // En ES6, se puede abreviar:
	  routes // Si ponen solo una variable dentro de un objeto, se expande
    // al nombre de la variable, con el valor de la variable.
});
// Creamos la instancia de Vue.
// y le decimos a Vue que use el Router.
const app = new Vue({
	el:"#app",
  	router

});

