import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import './style.css'
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { NEWS_RESET, RESET_UPDATE_ERRORS } from '../../../store/types/Types';
import { fetchNew, updateNews } from '../../../store/asyncAction/NewsAction';

const UpdateNews = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [state, setState] = useState({
        title: '',
        upcomming: '',
        language: ''
    });
    const [selectedUp, setSelectedUp] = useState("");
    const [selectedLn, setSelectedLn] = useState("");

    const dispatch = useDispatch();

    const { loading, redirect, newsStatus, onew, editErrors } = useSelector((state) => state.NewsReducer);
    // const { blog,blogStatus } = useSelector((state) => state.FetchBlog);

    // const { editErrors } = useSelector((state) => state.UpdateBlog)

    useEffect(() => {
        if (newsStatus) {
            setState({
                title: onew.title,
                upcomming: onew.upcomming,
                language: onew.language
            });
            setValue(onew.body);
            dispatch({ type: NEWS_RESET })
        } else {
            dispatch(fetchNew(id));
        }
    }, [onew]);

    // console.log(selectedUp);
    // console.log(state.upcomming);

    const newsUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateNews({
                title: state.title,
                body: value,
                upcomming: selectedUp ? selectedUp : state.upcomming,
                language: selectedLn ? selectedLn : state.language,
                id: onew._id
            })
        )
    }
    useEffect(() => {
        if (editErrors.length > 0) {
            editErrors.map((error) => toast.error(error.msg));
            dispatch({ type: RESET_UPDATE_ERRORS })
        }
    }, [editErrors]);

    useEffect(() => {
        if (redirect) {
            navigate('/all-news');
        }
    }, [redirect])
    return !loading ? (
        <div className="mt-5 " style={{ width: '90%', margin: 'auto' }}>
            <Toaster
                position='top-right'
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
            <form onSubmit={newsUpdate} >
                <div className="row">
                    <div className="col-md-6">
                        <h2 id="pform"><span>Edit News </span></h2>
                        <div className="product-form">

                            <div className="mb-3">
                                <label className="form-label">News Title</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp"
                                    id="title"
                                    name="title"
                                    value={state.title}
                                    onChange={(e) =>
                                        setState({ ...state, title: e.target.value })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label>Upcomming</label>
                                <select name="upcomming" id="upcomming" className="form-control"
                                    onChange={(e) => setSelectedUp(e.target.value)}
                                    value={selectedUp ? selectedUp : onew.upcomming}
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Language</label>
                                <select name="language" id="language" className="form-control"
                                    onChange={(e) => setSelectedLn(e.target.value)}
                                    value={selectedLn ? selectedLn : onew.language}
                                >
                                    <option value="Nepali">Nepali</option>
                                    <option value="English">English</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">News Description</label>
                                <ReactQuill theme="snow"
                                    value={value}
                                    onChange={setValue} id="body" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="submit" className="form-control cpb" aria-describedby="emailHelp"
                                value="Update News"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    ) : <p>Loading ...</p>;
}
export default UpdateNews