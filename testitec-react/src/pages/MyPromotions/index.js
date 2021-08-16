import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card'
import { listMyPromotions } from '../../store/actions/promotion';

export default function MyPromotions() {
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(listMyPromotions())
    }, []);

    console.log(localStorage.getItem('access_token'))
    
    const {ownPromotions} = useSelector(state => state.promotions);
    
    return (
        <div className="container">
            <h3>Minhas Promoções</h3>
            <p>Últimas promoções criadas por você!</p>
            <hr />
            {ownPromotions.map((promotion) => {
                return (
                    <Card title={promotion.name} category={promotion.category} description={promotion.description} link={promotion.site} />
                )

            })}
        </div>
    )
}
