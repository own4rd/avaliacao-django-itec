import React, {useEffect} from 'react'
import Card from '../../components/Card'
import Alert from '../../components/Alert'
import { useSelector, useDispatch } from 'react-redux';
import { listPromotions } from '../../store/actions/promotion'
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPromotions())
    }, []);
    
    const promotions = useSelector(state => state.promotions);
    const {logged} = useSelector(state => state.user);


    return (
        <div className="container">
            {!logged ?     
            <Alert />
            :
            <div className="d-flex justify-content-between">
                <h3>
                    Encontrou um anuncio interessante? Compartilhe!
                </h3>
                <button onClick={() => {history.push('/anuncio')}} className="btn btn-primary" >Criar Anuncio</button>
            </div>
            }
            <hr />
            <div id="list-promotions">
                {promotions.data.map((promotion) => {
                    return (
                        <Card title={promotion.name} category={promotion.category} description={promotion.description} link={promotion.site} />
                    );
                })}
            </div>
        </div>
    )
}
