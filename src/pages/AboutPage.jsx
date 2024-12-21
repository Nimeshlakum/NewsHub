import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 md:p-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-8">
            About NewsHub
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg mb-4">
                NewsHub is a modern and user-friendly news platform dedicated to
                delivering breaking news, insightful articles, and trending
                stories. Our mission is to provide users with the latest news
                from various fields including technology, entertainment,
                politics, and more.
              </p>
              <p className="text-lg mb-4">
                With NewsHub, you'll always be up to date with the news that
                matters to you. Whether you're looking for global headlines or
                local news, we have you covered.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                Our goal is to keep you informed and engaged. We are passionate
                about providing high-quality news content that's easy to access,
                informative, and diverse. At NewsHub, we believe in the power of
                knowledge and strive to present news that sparks conversation
                and helps you stay ahead in this fast-paced world.
              </p>
              <p className="text-lg mb-4">
                We ensure that every news article is thoroughly researched and
                delivered in a clear, concise format so you can quickly digest
                the information that matters most.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 text-lg space-y-3">
              <li>Up-to-date news from reliable sources</li>
              <li>Easy-to-navigate interface for all users</li>
              <li>Customizable categories to suit your interests</li>
              <li>Trending news stories and featured articles</li>
              <li>Local and global news coverage</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
