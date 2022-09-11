import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { actions } from '../../actions/noticiasActions'
import noticiasContext from '../../context/noticiasContext'
import './filtrosScreen.css';
import Select from 'react-select';
import { optionsPaises } from "./paises";
import { optionsCategorias } from "./categorias";

export default function FiltrosScreen() {
    const { state: { filter, data },dispatch } = useContext(noticiasContext)
    const [paisElegido, setPaisElegido] = useState("")
    const [categoriaElegida, setcategoriaElegida] = useState("")
    const [palabraClave, setPalabraClave] = useState("")

    useEffect(() => {
        let {q,pais,categoria}=filter
        if(q){
            setPalabraClave(q)
        }
        if(pais){
            setPaisElegido(pais)
        }
        if(categoria){
            setcategoriaElegida(categoria)
        }
    }, [])
    

    const handleChangePalabraClave=(e)=>{
        console.log(e);
        setPalabraClave(e.target.value)
    }

    const setFilter = () => {
        dispatch({
            type: actions.set_filter,
            payload: {
                q:palabraClave,
                pais:paisElegido,
                categoria:categoriaElegida
            },
        })
    }
    return (
        <Container>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputQuery" className="form-label">Palabras clave:</label>
                    <input type="text" className="form-control" id="inputQuery" aria-describedby="query" value={palabraClave} onChange={handleChangePalabraClave} />
                </div>
                <div className='grupoSelectores'>
                    <div className='labelSelect'>
                        <label htmlFor="selectCountry" className="form-label">País:</label>
                        <Select
                            isClearable
                            value={paisElegido}
                            onChange={setPaisElegido}
                            options={optionsPaises}
                        />
                    </div>
                    <div className='labelSelect'>
                        <label htmlFor="selectCategory" className="form-label">Categoria:</label>
                        <Select
                            isClearable
                            value={categoriaElegida}
                            onChange={setcategoriaElegida}
                            options={optionsCategorias}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="success" className='mt-4'
                        onClick={setFilter}
                    >
                        Guardar filtros
                    </Button>
                </div>
            </form>

        </Container>
    )
}
