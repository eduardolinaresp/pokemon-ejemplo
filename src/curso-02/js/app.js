console.log('ola k ase esto?');

var app = new Vue({
    el: '#app',
    data: {
      
         pokemon: {
            name: 'pikachu',
            image: 'images/pokemons/pikachu.png',
            types: ['electric'],
            id: 25
          
         
        },
       
       /* pokemon: pokemons, Fin */ 
        
        // Inicio reemplacé este atributo COLOR por typeColor  
        typeColor: {
            grass: '#78C850',
            poison: '#A040A0',
            fire: '#F08030',
            flying: '#A890F0',
            water: '#6890F0',
            bug: '#A8B820',
            normal: '#A8A878',
            electric: '#F8D030',
        },
        // Fin 
    }
});

var app = new Vue({
    el: '#app',
    data: {
        pokemon: {
            name: 'Jirafasaurio'
        }
    }
});
