import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
import options from "../Request";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL, options).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <div className=" bg-black w-[200px] h-full absolute z-10 rounded-full left-[-130px] hidden group-hover:block opacity-80"></div>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute cursor-pointer z-20 hidden group-hover:block group-hover:opacity-100"
        />

        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <div className=" bg-black w-[200px] h-full absolute z-10 right-[-130px] rounded-full hidden group-hover:block opacity-80"></div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute cursor-pointer z-20 hidden group-hover:block group-hover:opacity-100"
        />
      </div>
    </>
  );
};

export default Row;
