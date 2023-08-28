import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import './details.css';
import { fetchNew, fetchNews, newsDetails } from '../../../components/store/asyncAction/NewsAction';
import Header from '../../nav/Header';
import Header1 from '../../nav/Header1';
import Footer from '../../nav/footer/Footer';

const Details = () => {

    const { id } = useParams();

    const { onew, loading, news } = useSelector((state) => state.NewsReducer);

    console.log(onew)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
        dispatch(fetchNew(id));
    }, [dispatch]);

    return (
        <div>
            <Header1 />
            <Header />
            <div className="detailss">
                <div className="row p-3">
                    <div className="col-md-8">
                        <div className="title pt-md-4 pb-4">
                            <h2>{onew.title}
                            </h2>
                        </div>
                        <div className="img pb-4">
                            <img src={`/images/${onew.image}`} className='w-100' alt="" />
                        </div>
                        <div>{ReactHtmlParser(onew.body)}</div>
                    </div>
                    <div className="col-md-4 p-3 ps-md-5 mt-md-4">
                        <div className="latest mt-md-5">
                            <div className="latest-news-heads">
                                <h3 className='pt-md-4 pb-3'><span>Latest News</span></h3>
                            </div>
                            <div className="news">
                                {news.map(n => {
                                    if (n.language == 'English') {
                                        return <h5 key={n._id} onClick={() => window.location.reload(`/news-details/${n.slug}`)}>
                                            <Link to={`/news-details/${n._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                                {n.title}
                                            </Link>
                                        </h5>
                                    }
                                    else return;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details