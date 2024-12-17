import { Container, Content, Form } from "./styles";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import CaretLeft from '../../assets/CaretLeft.svg';
import { FiUpload } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { TagSelector } from "../../components/TagSelector";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function EditDish() {
    const { user } = useAuth();

    const [dish, setDish] = useState(null)
    const params = useParams();
    
    const img = dish?.avatar ? `${api.defaults.baseURL}/files/${dish.avatar}` : ""

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

        console.log(price)
        const newDish = {
            name,
            description,
            price: Number(String(price).replace(',', '.')).toFixed(2),
            category_id: dishCategory,
            ingredients,
            avatar: imgFile
        }

        try {
            await api.put(`/dishes/${params.id}`, newDish)
            

            if(imgFile && params.id) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', imgFile);

                await api.patch(`/dishes/${params.id}/picture`, fileUploadForm)
            }

            navigate(`/dishes/${params.id}`)
        } catch (error) {
            alert(error.response?.data.message)
            alert(error)
        }

    }
    

    async function handleDeleteDish() {
        const confirmed = confirm("Tem certeza que deseja excluir esse prato?")
        if(!confirmed) return
        try {
            await api.delete(`/dishes/${params.id}`)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function fetchDish() {
            
            try {
                const response = await api.get(`/dishes/${params.id}`)
                const {data} = response
                setDish(data)
                setName(data.name)
                setIngredients(data.ingredients)
                setDescription(data.description)
                setPrice(data.price)
                setDishCategory(data.categoryId)
            } catch (error) {
                navigate("/")
            }
        }
        fetchCategories();
        fetchDish()
    }, [])

    return(
        <Container>
            <Header/>
            {   dish &&

                <Content>
                    <Link to="/">
                            <img src={CaretLeft} alt="voltar" /> Voltar
                    </Link>
                    
                    <h1>Editar Prato</h1>
    
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
                                    value={name}
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
                                    value={price}
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            
                            <div className="buttons">
                                <Link className="btn-delete" onClick={handleDeleteDish}>Excluir Prato</Link>

                                <Button 
                                    color="400" 
                                    text="Salvar Alterações"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    </Form>
    
                </Content>
            }
            <Footer/>
        </Container>
    )
}