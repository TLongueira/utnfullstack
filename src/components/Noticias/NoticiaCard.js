import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './NoticiasCard.css'

export default function NoticiaCard({ article }) {
    let fechaPublicacion = new Date(article.publishedAt)
    let urlToImage = article.urlToImage ? article.urlToImage : "placeholder.png"
    const RedirectPage = () => {
        window.open(article.url, '_blank');
    }
    return (
        <Card className='cardNoticia' onClick={RedirectPage}>
            <Card.Header>
                <Row>
                    <Col>
                        {article.source.name}
                    </Col>
                    <Col>
                        {fechaPublicacion.toLocaleString()}
                    </Col>
                </Row>
            </Card.Header>
            <Card.Img className='imgCard' variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                    {article.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
