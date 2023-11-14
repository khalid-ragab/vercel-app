import React , { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card";
import Pagination from "./pagination";
const cardData=[
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/21.webp",
        name:"Delpha Crist",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/19.webp",
            name:"Amya Satterfield",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/18.webp",
        name:"Santina Leannon",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/17.webp",
        name:"Maximillia Hammes",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/16.webp",
            name:"Bianka Ward",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
        name:"Lennie Braun",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
            name:"Ellis Dicki",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
            name:"Carlos VonRueden",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/13.webp",
            name:"Jacklyn Olson",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",
        name:"Mia Brown",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/10.webp",
            name:"Elsa Tobais",
    },
    {
        img:"https://mdbcdn.b-cdn.net/img/new/avatars/11.webp",
            name:"Kathrene Joe",
    },
]
export default function Cards() {
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const visibleCards = cardData.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    return (
      <div className="container my-5 g-5 mx-auto">
        <div className="row">
          {visibleCards.map((card, index) => (
            <Card key={index} img={card.img} name={card.name} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }