import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavHead from '../../nav/NavHead';
import NavLink from '../../nav/NavLink';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import ReactHtmlParser from 'react-html-parser';
import './style.css'
import { CLOSE_LOADER, REDIRECT_FALSE, REMOVE_MESSAGE, SET_LOADER, SET_MESSAGE } from '../../../store/types/Types';
import { fetchNews } from '../../../store/asyncAction/NewsAction';

const AllNews = () => {

    const [keyword, setKeyword] = useState("")

    const { token } = useSelector((state) => state.AuthReducer);

    const { loading, message, redirect, news } = useSelector(state => state.NewsReducer);

    // const { blogs } = useSelector(state => state.FetchBlogs);

    const dispatch = useDispatch();

    const deleteNews = async (id) => {
        const confirm = window.confirm('Are you really want to delete this news?');
        if (confirm) {
            dispatch({ type: SET_LOADER });
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const {
                    data: { msg },
                } = await axios.delete(`/api/deletenews/${id}`, config);
                dispatch(fetchNews());
                dispatch({ type: SET_MESSAGE, payload: msg });
            } catch (error) {
                dispatch({ type: CLOSE_LOADER });
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (redirect) {
            dispatch({ type: REDIRECT_FALSE });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: REMOVE_MESSAGE });
        }
    }, [message, dispatch, redirect]);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    };

    const searched = (keyword) => (p) => p.title.toLowerCase().includes(keyword);

    return <div className='dash-contact row w-100'>
        <div className="col-md-2 dash-nav">
            <NavLink />
        </div>
        <div className="col-md-10 dash-details">
            <NavHead />
            <hr />
            <div className="news_button float-end">
                <Link to='/add-news'><button>Add News</button></Link>
            </div>
            <div className="dash-screen">
                <Toaster
                    position='top-center'
                    reverseOrder={false}
                    toastOptions={{
                        style: {
                            fontSize: '14px',
                        },
                    }}
                />
                <div className="search">
                    <input type="search"
                        placeholder="Filter"
                        value={keyword}
                        onChange={handleChange}
                        className="form-control mb-4">
                    </input>
                </div>
                {loading ? <p>Loading..</p> : <table className="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Title</th>
                            <th scope="col">Upcomming</th>
                            <th scope="col">Language</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.filter(searched(keyword)).map((n, i) => (
                            <tr key={n._id}>
                                <td>{i + 1}</td>
                                <td className='title'>{n.title}</td>
                                <td className='titles'>{n.upcomming}</td>
                                <td className='titles'>{n.language}</td>
                                <td className='description'>{ReactHtmlParser(n.body.slice(0, 200))}</td>
                                <td style={{ cursor: 'pointer' }}>
                                    <Link id="imgupdate" style={{ textDecoration: 'none' }}
                                        to={`/updatenImage/${n._id}`} className="me-5">
                                        <img src={`/images/${n.image}`} height="100px" width="100px" alt="blog" />&nbsp;&nbsp; &nbsp;<i className="fas fa-images "></i></Link>
                                    <Link id="updateAction" to={`/update-news/${n._id}`} className="me-4"><i className="fas fa-pencil-alt"></i></Link>
                                    <i onClick={() => {
                                        deleteNews(n._id)
                                    }} className="far fa-trash-alt" id="deleteAction"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    </div>;
};

export default AllNews;
