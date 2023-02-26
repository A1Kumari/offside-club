import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const RewardsCard = ({ title, text, icon }) => {
    return (
        <React.Fragment>
            <Card style={{ width: '100%', border: 0, maxWidth: '270px' }} className='bg-secondary text-white d-block mx-auto'>
                <Card.Body className='p-0 m-0'>
                    <Image variant="left" src={icon} className='services-icon mb-3' width="30%" />
                    <Card.Title className='fs-1 fw-bold text-primary'>{title}</Card.Title>
                    <Card.Text className="text-2 fs-3">{text}</Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default RewardsCard;