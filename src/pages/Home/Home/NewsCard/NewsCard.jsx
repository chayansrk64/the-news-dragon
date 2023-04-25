import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    // console.log(news);
    const {_id, title, details, image_url,author, rating, total_view} = news;
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'> 
        <Image src={author.img} style={{height:'40px'}} roundedCircle />
        <div className='ms-3 flex-grow-1'>
            <p className='mb-0'>{author.name}</p>
            <p>{moment(author.published_date).format('MMMM D YYYY')} {}</p>
        </div>
        <div>
        <FaRegBookmark /> <FaShareAlt />
        </div>
       </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <>{details} </> :
             <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </> }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex"> 
          <div className='flex-grow-1'>
           <Rating  placeholderRating={rating.number}
              emptySymbol={<FaRegStar/>}
              placeholderSymbol={<FaStar className='text-warning'></FaStar>}
              fullSymbol={ <FaStar></FaStar> }
               
              >
           </Rating>
            <span> {rating.number}</span>
          </div>
          <div>
          <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;