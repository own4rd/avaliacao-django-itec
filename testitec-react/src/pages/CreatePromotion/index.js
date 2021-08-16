import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {createPost, listCategories} from '../../store/actions/promotion'

export default function CreatePromotion(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listCategories())
    }, []);
    const {categories} = useSelector(state => state.promotions);

    console.log(categories)

	const initialFormData = Object.freeze({
		name: '',
		slug: '',
		description: '',
		category: '',
        site: '',
	});
	const [formData, updateFormData] = useState(initialFormData);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;
        let fields = formData

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "O titulo não pode ser em branco.";
         }
         
         if(!fields["slug"]){
            formIsValid = false;
            errors["slug"] = "O slug não pode ser em branco.";
         }

         if(!fields["description"]){
            formIsValid = false;
            errors["description"] = "A descrição não pode ser em branco.";
         }


         if(!fields["price"]){
            formIsValid = false;
            errors["price"] = "O preço não pode ser em branco.";
         }
         if(!fields["site"]){
            formIsValid = false;
            errors["site"] = "O preço não pode ser em branco.";
         }

         setErrors(errors)
         
         return formIsValid;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleValidation()){
            dispatch(createPost(formData['name'], formData['slug'],
                formData['category'], formData['description'], formData['site'],
                formData['price']
            ))
            props.history.push('/')
        }
    }

    return (
        <form>
            <div className="container">
                <h3>Criar Anuncio</h3>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input type="text" className="form-control" placeholder="Qual nome do produto?" name="name" onChange={handleChange} />
                    <div className="text-danger">
                        {
                            errors['name'] ? errors['name'] : null
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Slug</label>
                    <input type="text" className="form-control" placeholder="Slug do produto" name="slug" onChange={handleChange}/>
                    <div className="text-danger">
                        {
                            errors['slug'] ? errors['slug'] : null
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria</label>
                    <select className="form-select" name="category" onChange={handleChange}>
                        <option>Selecione uma categoria</option>
                        {categories.map((category) => {
                            return (
                                <option value={category.id}>{category.name}</option>
                            );
                        })

                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descrição</label>
                    <input type="text" className="form-control" placeholder="Descreva brevemente" name="description" onChange={handleChange} />
                    <div className="text-danger">
                        {
                            errors['description'] ? errors['description'] : null
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Preço</label>
                    <input type="text" className="form-control" placeholder="199.99" name="price" onChange={handleChange} />
                    <div className="text-danger">
                        {
                            errors['price'] ? errors['price'] : null
                        }
                    </div>        
                </div>
                <div className="mb-3">
                    <label className="form-label">Site</label>
                    <input type="text" className="form-control" placeholder="Qual link?" name="site" onChange={handleChange} />
                    <div className="text-danger">
                        {
                            errors['site'] ? errors['site'] : null
                        }
                    </div>        
                </div>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Cadastrar</button>
            </div>
        </form>
    )
}
