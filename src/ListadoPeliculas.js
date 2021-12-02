import './App.css';
import { Pelicula } from './Pelicula';
import { PageWrapper } from './PageWrapper';
import { Paginacion } from './Paginacion.js';
import { useEffect, useState } from 'react';

export function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    buscarPelicula();

  }, []);

  const buscarPelicula = async () => {
    let url = "https://cors-anywhere.herokuapp.com/http://lucasmoy.dev/data/react/peliculas.json";

    let respuesta = await fetch(url, {
      "method":'GET',
      //"mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type" : 'application/json',
       // "Origin" : 'https://lucasmoy.dev',
      }
    });
    
    let json = await respuesta.json();
    setPeliculas(json);
  }

  const totalPorPagina = 7;

 
  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculas.length;
    return Math.ceil(cantidadTotalPeliculas / totalPorPagina);
  }
  
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * totalPorPagina, 
    paginaActual * totalPorPagina);
  

  return(
    <>
    <PageWrapper>
      
      {peliculasPorPagina.map((pelicula) => 
      <Pelicula titulo={pelicula.titulo} img={pelicula.img} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} key={pelicula + 1}>
        Earth's mightiest heroes must come together and learn to fight as a
              team if they are to stop the mischievous Loki and his alien army from
                enslaving humanity...
      </Pelicula>
      )}
      
        <Paginacion pagina={paginaActual}  total={getTotalPaginas()} onChange={(pagina) => alert(setPaginaActual(pagina))} />

    </PageWrapper>
    </>
  )
}

