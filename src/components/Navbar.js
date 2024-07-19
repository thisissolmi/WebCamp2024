// import React from 'react';

// const Navbar = () => (
//   <nav className="navbar">
//     <ul>
//       <li>무탠다드</li>
//       <li>추천</li>
//       <li>뷰티</li>
//       <li>랭킹</li>
//       <li>매일 14시 세일 </li>
//       <li>스타일 </li>
//       <li>이벤트</li>
//     </ul>
//   </nav>
// );

// export default Navbar;



// import React from 'react';

// const Navbar = () => (
//   <nav class="main__sc-hdln0h-0 dUvrff"><div class="main__sc-hdln0h-1 RBple"><button type="button" class="main__sc-hdln0h-2 gXHcZq">무탠다드</button><button type="button" class="main__sc-hdln0h-2 eDfzCW">추천</button><button type="button" class="main__sc-hdln0h-2 jMFAZW">뷰티</button><button type="button" class="main__sc-hdln0h-2 jMFAZW">랭킹</button><button type="button" class="main__sc-hdln0h-2 jMFAZW">세일<span class="main__sc-hdln0h-3 cVYELs"><span class="main__sc-5myq0a-0 cRAVhG">매일 14시</span></span></button><button type="button" class="main__sc-hdln0h-2 jMFAZW">스타일</button><button type="button" class="main__sc-hdln0h-2 jMFAZW">이벤트</button></div></nav>
// );

// export default Navbar;

import React from 'react';
import './Navbar.css';
import './MainContent';

const Navbar = () => (
  <nav className="main__nav">
    <div className="main__nav-container">
      <button type="button" className="main__nav-button active">무탠다드</button>
      <button type="button" className="main__nav-button">추천</button>
      <button type="button" className="main__nav-button">뷰티</button>
      <button type="button" className="main__nav-button">랭킹</button>
      <button type="button" className="main__nav-button">
        세일
        <span className="main__nav-sale-time">
          <span className="main__nav-sale-text">매일 14시</span>
        </span>
      </button>
      <button type="button" className="main__nav-button">스타일</button>
      <button type="button" className="main__nav-button">이벤트</button>
    </div>
  </nav>
);

export default Navbar;




