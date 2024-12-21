import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataFetch from "../hooks/DataFetch";
import NotFoundImage from "../assets/NotFoundImage.png";
import DataContext from "../context/DataContext";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("us");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 15;
  const navigate = useNavigate(); // For navigation

  // Fetch data from the API
  const { loading, error } = DataFetch(searchTerm);
  const { data } = useContext(DataContext);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles =
    data?.slice(indexOfFirstArticle, indexOfLastArticle) || [];
  const totalPages = Math.ceil(data.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    setSearchTerm(searchInput);
    setSearchInput(""); // Reset input box value
    setCurrentPage(1); // Reset to page 1
  };

  // Handle Enter key press for search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(searchInput);
      setSearchInput(""); // Reset input box value
      setCurrentPage(1); // Reset to page 1
    }
  };
  const handleReadMoreClick = (articlepublishedAt) => {
    navigate(`/full-article/${articlepublishedAt}`); // Navigate to the full article page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 md:p-16">
        {/* Search Bar */}
        <div className="flex justify-center my-4">
          <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-2 max-w-md w-full">
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Search Here..."
              className="flex-grow p-2 rounded-l-lg text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Display Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article, index) => (
            <div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              key={index}
            >
              <img
                src={article?.urlToImage || NotFoundImage}
                alt={article.title || "No Title"}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h5 className="text-xl font-semibold mb-2">{article.title}</h5>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {article.description || "No Description"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                By {article.author || "No Author"}
              </p>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleReadMoreClick(article.publishedAt)}
              >
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex justify-center my-8">
          <ul className="flex items-center space-x-4">
            <li>
              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-400"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index + 1}>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-400"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
