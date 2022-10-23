import React,{ useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SlLike } from "react-icons/sl";
import { VscRefresh } from "react-icons/vsc";
import { BiEuro } from "react-icons/bi";
import { useLikes } from '../queries/fetchQueries';

const Cards = ({ card, id }) => {

    const { mutate: toggleLike } = useLikes(id)
    const [likes, setLikes] = useState(0)
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if(card.likes_count < 10){
            setLikes("00"+card.likes_count)
        }
        else if(card.likes_count < 100){
            setLikes("0"+card.likes_count)
        }else{
            setLikes(card.likes_count)
        }
      }, [likes]);

      const handleMouseOver = () => {
        setIsHovering(true);
      };

      const handleMouseOut = () => {
        setIsHovering(false);
      };

      const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 600px)",
      });

    return (
        <div className='mx-2 my-2'>
            <Card className="cards" style={{ width: '18rem', borderRadius: '0px', border: 'none'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='container images-cards p-0'>
                
                <div className='item'>
                    <p>{card.price}.00 <BiEuro size="10" /></p>
                    <div className='over-shadow'></div>
                    <Card.Img variant="top" className='card-img-top' src={card.main_attachment.small} style={{ borderRadius: '0px' }} />
                </div>
                {isHovering && isMobileDevice && (
                    <div className='d-flex justify-content-end'>
                        <div className='align-center'>
                            <Button variant="light" className={card.liked ? "rounded-circle buttons-cards-active" : "rounded-circle buttons-cards"} size="sm" onClick={toggleLike}>
                                <SlLike className='icon-cards align-middle' />
                            </Button>
                            <p className='text-white texts-cards'>{likes} </p>
                            <Button variant="light" className="rounded-circle buttons-card-reset" size="sm" >
                            <div className='align-middle'>
                                <VscRefresh className='icon-cards'/>
                            </div>
                            </Button>
                            <p className='text-white texts-cards-reset'>{"000"} </p>
                        </div>
                    </div>
                 )}
            </div>
            <Card.Body className=' cards-body p-0'>
                <Card.Title className='text-center card-title mt-3'>{ card.title.toUpperCase() }</Card.Title>
                <Card.Text className='text-center card-text'>
                    <div className="d-flex justify-content-center"> 
                        <p className='by-text me-1'>by</p> {card.author}
                    </div>
                </Card.Text>
                {!isMobileDevice && (
                    <div className='footer-card-container d-flex align-content-center flex-wrap '>
                        <div className='d-flex align-content-center flex-wrap me-5 ms-4 mobile-like'>
                            <p className=''>{likes} </p>
                            <Button variant="light" className={card.liked ? "rounded-circle buttons-mobile-active" : "rounded-circle buttons-mobile"} size="sm" onClick={toggleLike}>
                                <SlLike />
                            </Button>
                        </div>
                        <div className='d-flex align-content-center flex-wrap ms-5'>
                            <Button variant="light" className="rounded-circle buttons-mobile-reset" size="sm" >
                                <div className=''>
                                    <VscRefresh />
                                </div>
                            </Button>
                            <p className=' texts-mobile-reset'>{"000"} </p>
                        </div>
                    </div>
                )}
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards