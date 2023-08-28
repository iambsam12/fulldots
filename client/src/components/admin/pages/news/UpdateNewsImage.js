import React, { useState, useEffect } from 'react';
import './style.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { RESET_UPDATE_IMAGE_ERRORS } from '../../../store/types/Types';
import { updateImageNews } from '../../../store/asyncAction/NewsAction';



const UpdateNewsImage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { redirect, updateImageErrors } = useSelector((state) => state.NewsReducer);
    const [state, setState] = useState({
        image: '',
        imagePreview: '',
        imageName: 'Choose Image: '
    });
    const fileHandle = (e) => {
        if (e.target.files.length !== 0) {

            const reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    imagePreview: reader.result,
                    image: e.target.files[0],
                    imageName: e.target.files[0].name,
                })
            }
            reader.readAsDataURL(e.target.files[0])
        }
    };
    const updateImage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id)
        formData.append('image', state.image)
        dispatch(updateImageNews(formData))
    }
    useEffect(() => {
        if (redirect) {
            navigate('/all-news')
        }
        if (updateImageErrors.length > 0) {
            updateImageErrors.map((error) => toast.error(error.msg));
            dispatch({ type: RESET_UPDATE_IMAGE_ERRORS })
        }
    }, [updateImageErrors, redirect]);
    return (
        <div className="container mt-5">
            <Toaster
                position='top-right'
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-h">
                        <h2><span>Update News Image</span></h2>
                        <form onSubmit={updateImage}>
                            <div className='group'>
                                <label htmlFor='image' className='image__label'>
                                    {state.imageName}
                                </label>
                                <input
                                    type='file'
                                    name='image'
                                    id='image'
                                    onChange={fileHandle}
                                />
                            </div>
                            <div className='group'>
                                <div className='imagePreivew'>
                                    {state.imagePreview ? <img src={state.imagePreview} alt="news" className="w-100" /> : ''}
                                </div>
                            </div>
                            <div className='group'>
                                <input
                                    type='submit'
                                    value='Update image'
                                    className='btn btn-default btn-block'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateNewsImage