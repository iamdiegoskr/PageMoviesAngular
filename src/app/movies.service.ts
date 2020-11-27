import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies:Movie[] = [
    {
      id:1,
      name: "Manos a las armas",
      description: "Miles lleva una vida tranquila y común hasta que se ve forzado por una pandilla a participar en una letal competición dentro de su ciudad para salvar a su ex novia. Miles siempre tuvo mucho ingenio para evitar sus problemas, pero ahora debe enfrentar sus miedos y luchar por la mujer que ama.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/11/manos-a-las-armas.jpg",
      genre: "Accion",
      year: "2020"
    },
    {
      id:2,
      name: "Bob Esponja: Al rescate ",
      description: "Antes de los eventos de la serie de televisión, Bob Esponja sale en un viaje al Kamp Koral y hace nuevos amigos. Sin embargo, cuando su caracol mascota Gary es secuestrado por Poseidón y llevado a la Ciudad Perdida de Atlantic City, él y su nuevo mejor amigo Patrick deben salir en una misión de rescate para salvarlo del malvado plan de Poseidón antes que sea demasiado tarde. También revelará la primera vez que se conocen... un momento mágico que le da significado al poder de la amistad.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/11/bob-esponja-al-rescate.jpg",
      genre: "Animacion",
      year:"2020"
    },
    {
      id:3,
      name: "El diablo a todas horas",
      description: "En Knockemstiff, Ohio, personajes siniestros convergen alrededor de Arvin Russell, un joven dedicado a protegerse a sí mismo y a a sus seres queridos en un pueblo de post guerra que está lleno de corrupción y brutalidad.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/09/el-diablo-a-todas-horas.jpg",
      genre: "Crimen",
      year:"2020"
    },
    {
      id:4,
      name: "Proyecto Power",
      description: "Una píldora que le otorga a sus usuarios superpoderes únicos e impredecibles durante cinco minutos llega a las calles de Nueva Orleans. Pero cuando la violencia aumenta como resultado, un traficante adolescente y un policía local deben aliarse con un ex soldado para acabar con el grupo responsable de su creación.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/08/proyecto-power.jpg",
      genre: "Accion",
      year:"2020"
    },
    {
      id:5,
      name: "Scooby",
      description: "Scooby y la pandilla enfrentan el más desafiante misterio: un plan para liberar al perro fantasma Cerberus en el mundo. Mientras intentan detener el apocalipsis, la pandilla descubre que Scooby tiene un épico destino más grande de lo que cualquiera podría haber imaginado.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/05/scoob.jpg",
      genre: "Animacion",
      year:"2020"
    },
    {
      id:6,
      name: "Unidos",
      description: "Dos adolescentes elfos, Ian y Barley, se embarcan en un viaje para descubrir si todavía existe algo de magia para poder pasar un último día con su padre, quien falleció cuando eran muy pequeños para recordarlo.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/04/unidos-4k.jpg",
      genre: "Animacion",
      year:"2020"
    },
    {
      id:7,
      name: "Jojo Rabbit",
      description: "Un solitario niño alemán, Jojo, ve su mundo puesto de cabeza cuando descubre que su madre está escondiendo a una niña judía en su ático durante la Segunda Guerra Mundial. Con la ayuda de su amigo imaginario, Adolf Hitler, Jojo debe confrontar su nacionalismo ciego.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2020/02/jojo-rabbit-4k.jpg",
      genre: "Comedia-Drama",
      year:"2019"
    },
    {
      id:8,
      name: "Escuadrón 6",
      description: "Seis individuos de todo el mundo, cada uno el mejor en lo que hace, fueron escogidos no solo por sus habilidades, sino también por su deseo único de borrar su pasado para cambiar el futuro.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2019/12/escuadron-6.jpg",
      genre: "Accion",
      year:"2018"
    },
    {
      id:9,
      name: "Historias de miedo para contar en la oscuridad",
      description: "En Halloween de 1968, la adolescente Stella y sus dos amigos conocen a un misterioso vagabundo, Ramón, y descubren un cuaderno siniestro de historias.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2019/11/historias-de-miedo-para-contar-en-la-oscuridad-4k.jpg",
      genre: "Terror",
      year:"2019"
    },
    {
      id:10,
      name: "El Rey León",
      description: "Luego de la muerte de su padre, un cachorro de león huye del reino solo para aprender el verdadero significado de la responsabilidad y la valentía.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2019/10/el-rey-leon-2019-4k.jpg",
      genre: "Aventura-Drama",
      year:"2018"
    },
    {
      id:11,
      name: "Verano del 84",
      description: "Con la sospecha que su vecino policía es un asesino en serie, un grupo de amigos adolescentes se la pasa espiándolo durante el verano y reuniendo evidencia, pero conforme se acercan a descubrir la verdad, las cosas de vuelven peligrosas.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2019/05/verano-del-84.jpg",
      genre: "Drama-Terror",
      year:"2018"
    },
    {
      id:12,
      name: "Venom",
      description: "Cuando Eddie Brock adquiere los poderes de un simbionte, deberá dejar libre a su alter ego Venom para poder salvar su vida.",
      imgURL: "https://www.cinecalidad.is/wp-content/uploads/2018/12/venom.jpg",
      genre: "Accion",
      year:"2018"
    }
];

  constructor() {
    console.log("service ready to use");
  }


  getMovies():Movie[]{
    return this.movies
  }

  getMovieById(id:number):Movie{
    for (let movie of this.movies) {
        if(movie.id==id){
          return movie;
        }
    }
  }

  filterMovies(keyword:string):Movie[]{

      let moviesMatch: Movie[] = [];
      
      for (let movie of this.movies) {
          let nameMovie = movie.name.toLocaleLowerCase();
          if(nameMovie.indexOf(keyword.toLocaleLowerCase()) >= 0){
              moviesMatch.push(movie);
          }
      }

      return moviesMatch;

  }

}


export interface Movie{
  id:number,
  name: string,
  description: string,
  imgURL:  string,   
  genre: string;
  year:string
}
