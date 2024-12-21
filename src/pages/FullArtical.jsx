import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFoundImage from "../assets/NotFoundImage.png";
import DataContext from "../context/DataContext";

function FullArticlePage() {
  const { articlepublishedAt } = useParams(); // Get the articlepublishedAt from the URL
  const { data } = useContext(DataContext);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    try {
      // Simulate loading while checking
      setLoading(true);

      if (data !== null && articlepublishedAt !== null) {
        const selectedArticle = data.find(
          (article) => article.publishedAt === articlepublishedAt
        );

        if (selectedArticle) {
          setArticle(selectedArticle);
        } else {
          setError(new Error("Article not found"));
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [articlepublishedAt]); // Effect runs when data or articlepublishedAt changes

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error.message}</div>; // Show error state

  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            {article.title || "No title"}
          </h1>

          <img
            src={article?.urlToImage || NotFoundImage}
            alt={article.title || "No Title"}
            className="w-full h-64 object-cover rounded-md mb-4"
          />

          <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
            By {article.author || "No Author"}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
            {article.description || "No Description"}
          </p>
          <div className="prose dark:prose-dark">
            <p>{article.content || "No Content"}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FullArticlePage;
