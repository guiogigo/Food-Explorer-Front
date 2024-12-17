import { Container, Content, Form } from "./styles";

import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { FiUpload } from 'react-icons/fi'

import CaretLeft from '../../assets/CaretLeft.svg';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { TextArea } from "../../components/TextArea";
import { TagSelector } from "../../components/TagSelector";
import { useNavigate } from "react-router-dom";

export function NewDish(){

    const [categories, setCategories] = useState([])

    const [imgFile, setImgFile] = useState(null)
    const [imgName, setImgName] = useState("Selecione image")

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [dishCategory, setDishCategory] = useState('')

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")


    const navigate = useNavigate();

    function handleAddIngredient() {
        
        const findIngredient = ingredients.find((ingredient) => ingredient === newIngredient);
        if(findIngredient != undefined || newIngredient.trim() === "") {
            setNewIngredient("")
            return;
        }
        setIngredients(prev => [...prev, newIngredient]);
        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prev => prev.filter(ingredient => ingredient != deleted))
    }

    async function fetchCategories() {
        try {
            const response = await api.get(`/categories`)
            setCategories(response.data)     
        } catch (error) {
            console.error(error)
        }
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImgFile(file);
        setImgName(file.name)
    }

    async function handleSubmit() {

        if(newIngredient){
            return alert("Existe um valor de ingrediente não adicionado. Clique para incluir ou deixe-o vazio.")
        }

        if(!name || !dishCategory || !price || !description) {
            return alert("Os campos Nome, Categoria, Preço e Descrição devem estar preenchidos")
        }

        const newDish = {
            name,
            description,
            price: Number(price.replace(',', '.')).toFixed(2),
            category_id: dishCategory,
            ingredients,
            avatar: imgFile
        }

        try {
            const {data} = await api.post("/dishes", newDish)
            

            if(imgFile && data.id) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', imgFile);

                await api.patch(`/dishes/${data.id}/picture`, fileUploadForm)
            }

            navigate(`/dishes/${data.id}`)
        } catch (error) {
            alert(error.response?.data.message)
            alert(error)
        }

    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return(
        <Container>
            <Header/>


            <Content>
                <Link to="/">
                        <img src={CaretLeft} alt="voltar" /> Voltar
                </Link>
                
                <h1>Novo Prato</h1>

                <Form>
                    <div className="input-row">
                        <div className="image">
                            <span>Imagem do prato</span>
                            <label 
                                className='input-image'
                                tabIndex="0"
                            >
                                <FiUpload size={24}/> <span>{imgName}</span>
                                <input
                                    type='file'
                                    name="picture"
                                    className="hidden"
                                    placeholder="Selecione imagem do prato"
                                    accept="image/png, image/jpeg"
                                    onChange={handleChangeImage}
                                />
                            </label>
                        </div>

                        <div className="name">
                            <span>Nome</span>
                            <Input
                                type='text'
                                placeholder="Ex.: Salada Ceasar"
                                color="800"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {categories &&
                            <div className="categories-wrapper">
                                <span>Categoria</span>
                                <select 
                                    name="Categoria" 
                                    className="categories"
                                    value={dishCategory}
                                    onChange={e => setDishCategory(e.target.value)}
                                >
                                <option value="" disabled hidden>Escolha a categoria</option>
                                {
                                    categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))
                                }
                                </select>
                            </div>
                        }
                    </div>
                    
                    <div className="input-row">
                        <div className="ingredients-wrapper">
                            <span>Ingredientes</span>
                            <div className="ingredients">
                                {
                                    ingredients.map((ingredient, index) => (
                                    <TagSelector 
                                        key={`ingredient:${index}`}
                                        value={ingredient} 
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                                <TagSelector 
                                isnew
                                placeholder="Adicionar"
                                value={newIngredient} 
                                onChange={(e) => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                                />
                            </div>
                        </div>

                        <div>
                            <span>Preço</span>
                            <Input
                                type='number'
                                placeholder="R$ 00,00"
                                color="800"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <div className="textArea">
                            <span>Descrição</span>
                            <TextArea 
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <Button 
                            color="400" 
                            text="Salvar Alterações"
                            onClick={handleSubmit}
                        />
                    </div>
                </Form>

            </Content>
            <Footer/>
        </Container>
    )
}