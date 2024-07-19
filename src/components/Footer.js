// import React from 'react';

// const Footer = () => (
  
//   <footer>
//   <nav className="navbar">
//     <ul>
//       <li>카테고리</li>
//       <li>스냅</li>
//       <li>홈</li>
//       <li>좋아요</li>
//       <li>마이</li>
//     </ul>
//   </nav>

//   </footer>
// );

// export default Footer;



// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faCamera, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {

//   const handleClick = (item) => {
//     // 각 항목 클릭 시 동작할 내용을 여기에 추가
//     console.log(`Clicked ${item}`);
//   };

//   return (
//     <footer>
//       <nav className="navbar">
//         <ul>
//           <li onClick={() => handleClick('카테고리')}>
//             <FontAwesomeIcon icon={faList} />
//             <span>카테고리</span>
//           </li>
//           <li onClick={() => handleClick('스냅')}>
//             <FontAwesomeIcon icon={faCamera} />
//             <span>스냅</span>
//           </li>
//           <li onClick={() => handleClick('홈')}>
//             <FontAwesomeIcon icon={faHome} />
//             <span>홈</span>
//           </li>
//           <li onClick={() => handleClick('좋아요')}>
//             <FontAwesomeIcon icon={faHeart} />
//             <span>좋아요</span>
//           </li>
//           <li onClick={() => handleClick('마이')}>
//             <FontAwesomeIcon icon={faUser} />
//             <span>마이</span>
//           </li>
//         </ul>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCamera, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {

  const handleClick = (item) => {
    // 각 항목 클릭 시 동작할 내용을 여기에 추가
    console.log(`Clicked ${item}`);
  };

  return (
    <footer className="footer">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => handleClick('카테고리')}>
            <FontAwesomeIcon icon={faList} />
            <span>카테고리</span>
          </li>
          <li className="nav-item" onClick={() => handleClick('스냅')}>
            <FontAwesomeIcon icon={faCamera} />
            <span>스냅</span>
          </li>
          <li className="nav-item" onClick={() => handleClick('홈')}>
            <FontAwesomeIcon icon={faHome} />
            <span>홈</span>
          </li>
          <li className="nav-item" onClick={() => handleClick('좋아요')}>
            <FontAwesomeIcon icon={faHeart} />
            <span>좋아요</span>
          </li>
          <li className="nav-item" onClick={() => handleClick('마이')}>
            <FontAwesomeIcon icon={faUser} />
            <span>마이</span>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
