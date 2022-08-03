var laTierra = new Vue({
    el: '#list',
    verificar: false,
    data: {
        planeta: [], 
        nuevoPais: ''
    },

    methods: {
        agregar() {
            if(this.nuevoPais.length < '4'){ 
                this.verificar = false
            }else{
                this.verificar = true
 
                this.planeta.push({
                    country: this.nuevoPais,    
                });
                localStorage.setItem("country", JSON.stringify(this.planeta));
            this.nuevoPais="";
            }
        },
        
        eliminar(id) {
            this.planeta.splice(id,1)
            localStorage.setItem("country", JSON.stringify(this.planeta));
            this.contador = contador +1
        }
},

created(){
    let data = localStorage.getItem("country")
        if(data !=null){
            this.planeta = JSON.parse(data);
        }
    }
})


mapboxgl.accessToken = 'pk.eyJ1IjoibmVodWVuYW1hcm8iLCJhIjoiY2trcm0ycmVzMGY0cjMwcnRsaDY3b2xtZCJ9.WdFNu6JUrzxZxeW1ubzMPQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nehuenamaro/ckkrm44gl014q17msuz9xsl87'
});

map.on('load', function () {
    // Se agrega la fuente para poder tener los paises divididos por mosaicos.
    // los mosaicos tienen guardado los nombres de los paises (si esta en el array lo capta)
    // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
    map.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
    });

    var matchExpression = ['match', ['get', 'name_en']];

    laTierra.planeta.forEach(function (row) {

        var color = '#0e386e';
        matchExpression.push(row['country'], color);
    });


    matchExpression.push('rgba(0, 0, 0, 0)');

    map.addLayer(
        {
            'id': 'countries-join',
            'type': 'fill',
            'source': 'countries',
            'source-layer': 'country_boundaries',
            'paint': {
                'fill-color': matchExpression
            }
        },
        'admin-1-boundary-bg'
    );
});



