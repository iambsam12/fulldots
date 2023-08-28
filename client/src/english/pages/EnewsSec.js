import React, { useEffect } from 'react'
import Footer from '../nav/footer/Footer'
import Header from '../nav/Header'
import Header1 from '../nav/Header1'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './estyle.css'
import { fetchNews } from '../../components/store/asyncAction/NewsAction';


const EnewsSec = () => {
    const { news, loading } = useSelector(state => state.NewsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);
    return (
        <div>
            <Header1 />
            <Header />
            <div className="news-section">
                <div className="news-hero">
                    <img src="./images/c2s.jpg" className='w-100 mb-5 ps-md-5 pe-md-5' alt="" />
                </div>
                <div className="news-sec-head text-center">
                    <h2><span>News Section</span></h2>
                </div>
                <div className="newss  p-md-5 p-3 m-md-5">
                    <div className="row w-100">
                        <div className="col-md-7">
                            <div className="row ">
                                {news && news.map(n => {
                                    if (n.language == 'English') {
                                        return <div className='col-md-6'>
                                            <div className="main-news" key={n._id}>
                                                <div className="news-img">
                                                    <img src={`/images/${n.image}`} className='w-100' alt="" />
                                                </div>
                                                <div className="news-head">
                                                    <Link to={`/news-details/${n._id}`}
                                                        style={{
                                                            color: '#000',
                                                            textDecoration: 'none',
                                                        }} ><h3 className='p-3' style={{ fontWeight: 'bold', fontSize: '19px' }} >{n.title}</h3></Link>
                                                </div>
                                            </div><hr />
                                        </div>
                                    }
                                    else return;
                                }
                                )}
                            </div>
                        </div>
                        <div className="col-md-5 ps-3 pe-3 ps-md-5 pe-md-5 text-center">
                            <div className="news-side">
                                <center className="mt-3">
                                    <div className="latest-news-head">
                                        <h3>Latest News</h3>
                                    </div>
                                </center>
                                <hr style={{ marginTop: '0px' }} />
                                <div className="recent-news">
                                    {news.map(n => {
                                        if (n.language == 'English') {
                                            return <div className="news1" key={n._id}>
                                                <Link to={`/news-details/${n._id}`}
                                                    style={{
                                                        color: '#000',
                                                        textDecoration: 'none'
                                                    }}>
                                                    <h5>{n.title}</h5>
                                                </Link>
                                            </div>
                                        }
                                        else return;
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EnewsSec