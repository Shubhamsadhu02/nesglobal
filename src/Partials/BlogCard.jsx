import React from 'react';
import {Card} from "react-bootstrap";

var options = { weekday: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
function BlogCard(props) {

    var today = new Date(props.date);
    return (
        <Card>
            <div className="image-holder">
                <Card.Img variant="top" src={props.thumb} />
            </div>
            <Card.Body>
                <h6 className="article-date">{today.toDateString("en-us", "dddd, mmmm dS, yyyy, h:MM:ss TT")}</h6>
                <Card.Text className="article-title">
                    {props.title}
                </Card.Text>
                <a href={props.link} className="heading-6 article-read-more"> Read More
                    <i className="fal fa-angle-right"></i>
                </a>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;