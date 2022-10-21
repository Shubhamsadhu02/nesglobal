import React, {useEffect, useState} from 'react';
import Header from '../../Partials/Header';
import BlogCard from "../../Partials/BlogCard";
import {Link} from "react-router-dom";
import '../../Styles/Blog.scss'
import Footer from "../../Partials/Footer";

function Blog(props) {
    const NEWS_API_KEY = "7ebe63ba26c04c6181a83ee9a68a7b5c";
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchLatestNews() {
        try {
            var res = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7ebe63ba26c04c6181a83ee9a68a7b5c');
            var data = await res.json();
            if (res.status == 200) {
                setPosts(data.articles)
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(function () {
        fetchLatestNews();
    }, [])
    return (
        <>
            <Header showNav={true} isWhite={true}/>
            <section className="blog-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 blog-content">
                            <div className="blog-date text-uppercase">
                                <h6>May 9, 2022</h6>
                            </div>
                            <h1 className="blog-title ">
                                How to Turn Supply Chain Uncertainty Into a Competitive Advantage
                            </h1>
                            <button className="read-btn btn-primary" type='submit'>Read More</button>
                        </div>
                        <div className="col-md-6 blog-thumbnail">
                            <img src="/images/blog/header-placeholder.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-articles">
                <h6 className="heading-6 text-center text-uppercase">Articles</h6>
                <h3 className="heading-3 text-center">News and Views</h3>
                <div className="container blog-articles-list">
                    <ul className="row">
                        {
                            posts.map(blog => <li className="col-md-4">
                                <BlogCard thumb={blog.urlToImage} title={blog.title} date={blog.publishedAt} link={blog.url} />
                            </li>)
                        }
                    </ul>
                    <hr/>
                </div>
            </section>
            <section className="flex-port-more">
                <h3 className="heading-3 text-center">More From NES Global</h3>
                <div className="container blog-more-details">
                    <div className="row">
                        <div className="col-md-6">
                            <article className="blog-more-card">
                                <img src="/images/blog/laptop.png" alt=""/>
                                <small className="text-uppercase mt-3 d-block">our tech platform</small>
                                <h4 className="text-capitalize mt-2 mb-4 w-75">Ocean, Air, Ground, All From the Cloud</h4>
                                <Link to={"/"} className="heading-6 article-read-more"> Read More
                                    <i className="fal fa-angle-right"></i></Link>
                            </article>
                        </div>

                        <div className="col-md-6 mt-3 mt-md-0 mt-lg-0">
                            <article className="blog-more-card">
                                <img src="/images/blog/team-chat.png" alt=""/>
                                <small className="text-uppercase mt-3 d-block">our service modal</small>
                                <h4 className="text-capitalize mt-2 mb-4 w-75">Expert Teams Dedicated to Your Business</h4>
                                <Link to={"/"} className="heading-6 article-read-more"> Read More
                                    <i className="fal fa-angle-right"></i></Link>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Blog;