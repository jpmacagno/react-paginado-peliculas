export function Paginacion(props){
     
    const getPaginas = () => {
        const resultado = [];
        for(let i = 0; i < props.total; i++){
        resultado.push(<a onClick={() => props.onChange(i+1)} className={props.pagina === (i+1) ? "active" : ''} >{(i + 1)}</a>
            );
        }
        return resultado;
    }
   

    return(
       
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Pagina {props.pagina} de {props.total}:</span>
                {getPaginas()}
            </div>
        </div>
    )
}