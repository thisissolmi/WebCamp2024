// import React from 'react';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Test  from './components/test'; 
// import './App.css'; // Add your styles here
// import ProductList from './components/ProductList';
// import CardGrid from './components/CardGrid';
// import Category1 from './components/Category1'; 


// const App = () => (
//   <div className="App">
//     <CardGrid/>
//     <Category1/> 
//     <Footer />
//     <Header />
//     <MainContent />
//     <Navbar />
//     <ProductList/>
//     <Test /> 
//   </div>
// );

// export default App;


// import React from 'react';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Test  from './components/test'; 
// import './App.css'; // Add your styles here
// import ProductList from './components/ProductList';
// import CardGrid from './components/CardGrid';
// import Category1 from './components/Category1'; // Create these component files for each category
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Router } from 'react-router-dom';

// const App = () => (
   
//     <Routes>
//       <Route exact path="/" component={CardGrid} />
//       <Route exact path="/" component={Footer} />
//       <Route exact path="/" component={Header} />
//       <Route exact path="/" component={MainContent} />
//       <Route exact path="/" component={Navbar} />
//       <Route exact path="/" component={ProductList} />
//       <Route exact path="/" component={Test} />
//       <Route exact path="/category1" component={Category1} />
//       {/* Add other routes here */}
//     </Routes>
// );

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Test from './components/test';
import ProductList from './components/ProductList';
import CardGrid from './components/CardGrid';
import Category1 from './components/Category1';
import './App.css'; // Add your styles here

const App = () => (
    <div>
      <Header />
    <Navbar />
  
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/Products" element={<ProductList />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/Category1" element={<Category1 />} />
      <Route path="/CardGrid" element={<CardGrid/>} />

      {/* Add other routes here */}
    </Routes>
    <Footer />
  
    </div>
);

export default App;


