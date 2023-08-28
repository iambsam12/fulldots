import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { newsCreate } from '../../../store/asyncAction/NewsAction';
import { REMOVE_MESSAGE } from '../../../store/types/Types';
import { useNavigate } from 'react-router-dom'

function CreateNews(props) {

    const { createErrors, redirect, message } = useSelector((state) => state.NewsReducer);
    const [currentImage, setCurrentImage] = useState('Choose Image')
    const [imagePreview, setImagePreview] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { user: { _id, name } } = useSelector(state => state.AuthReducer);
    const flieHandle = (e) => {
        if (e.target.files.length !== 0) {
            setCurrentImage(e.target.files[0].name)
            setState({
                ...state,
                [e.target.name]: e.target.files[0],
            })
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(e.target.files[0])
        }
    };

    const [state, setState] = useState({
        title: '',
        upcomming: '',
        language: ''
    });


    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const [value, setValue] = useState('')

    const createNews = e => {
        e.preventDefault();
        const { title, image, upcomming, language } = state;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('upcomming', upcomming);
        formData.append('language', language);
        formData.append('body', value);
        formData.append('image', image);
        dispatch(newsCreate(formData));
    }
    useEffect(() => {
        if (redirect) {
            navigate('/all-news')
        }
        if (createErrors.length > 0) {
            createErrors.map((error) => toast.error(error.msg));
        }
        if (message) {
            toast.success(message);
            dispatch({ type: REMOVE_MESSAGE });
        }
    }, [createErrors, redirect, message, dispatch]);
    return (
        <div className="create-product-section col-md-10 offset-md-1 p-3" >
            <Toaster
                position='top-right'
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
            <form onSubmit={createNews}>
                <div className="row">
                    <div className="col-md-6">
                        <h2 id="pform"><span>Add News</span></h2>
                        <div className="product-form">
                            <div className="mb-3">
                                <label className="form-label">News Title</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp"
                                    id="title"
                                    name="title"
                                    value={state.title}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image </label>
                                <input type="file" className="form-control"
                                    aria-describedby="emailHelp"
                                    id="image"
                                    name="image"
                                    onChange={flieHandle}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Upcomming</label>
                                <select name="upcomming" className="form-control"
                                    onChange={handleInput}>
                                    <option >Select Option</option>
                                    <option value="No" id="upcomming">No</option>
                                    <option value="Yes" id="upcomming">Yes</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Language</label>
                                <select name="language" className="form-control"
                                    onChange={handleInput}>
                                    <option >Select language</option>
                                    <option value="Nepali" id="nepali">Nepali</option>
                                    <option value="English" id="english">English</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">news Description</label>

                                <ReactQuill theme="snow"
                                    id="body" value={value} onChange={setValue} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-slug pt-5">
                            <div className="mb-3">
                                {
                                    imagePreview ? <img src={imagePreview} alt='news' className="w-100" /> : (
                                        <img src={currentImage} alt='news' className="w-100" />
                                    )}
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="form-control cpb" aria-describedby="emailHelp"
                                    value="Create News"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateNews
