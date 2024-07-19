import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardGrid.css'; 
import './Category1';
import './MainContent';

const cards = [
  { id: 1, name: '무탠다드', image: '/path/to/image1.png', path: '/category1' },
  { id: 2, name: '장마 준비', image: '/path/to/image2.png', path: '/category1' },
  { id: 3, name: '뷰티', image: '/path/to/image3.png', path: '/category1' },
  { id: 4, name: '아울렛', image: '/path/to/image4.png', path: '/category1' },
  { id: 5, name: '럭셔리', image: '/path/to/image5.png', path: '/category1' },
  { id: 6, name: '어스', image: '/path/to/image6.png', path: '/category1' },
  { id: 7, name: '체험단', image: '/path/to/image7.png', path: '/category1' },
  { id: 8, name: '단독 할인', image: '/path/to/image8.png', path: '/category1' },
  { id: 9, name: '무신사단독', image: '/path/to/image9.png', path: '/category1' },
  { id: 10, name: '스포츠', image: '/path/to/image10.png', path: '/category1' },
  { id: 11, name: '키즈', image: '/path/to/image11.png', path: '/category1' },
  { id: 12, name: '신발', image: '/path/to/image12.png', path: '/category1' },
  { id: 13, name: '편성표', image: '/path/to/image13.png', path: '/category1' },
  { id: 14, name: '무신사 홍대&대구 스토어', image: '/path/to/image14.png', path: '/category1' },
];

const CardGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
          <img src={card.image} alt={card.name} />
          <span>{card.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
