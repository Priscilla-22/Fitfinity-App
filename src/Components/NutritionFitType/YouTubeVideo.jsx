import React, { useEffect, useState } from 'react';
import YouTubeVideo from './YouTubeVideo';

function NutritionFitType() {
  const [selectedType, setSelectedType] = useState('');
  const [displayArticle, setDisplayArticle] = useState(null);
  const [selectedResource, setSelectedResource] = useState('');

  function handleClick() {
    const desiredURL = 'https://www.healthline.com/nutrition';
    window.location.href = desiredURL;
  }

  function handleResourceClick(resource) {
    setSelectedResource(resource);
    setSelectedType(resource);
  }

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    fetch('https://your-api-endpoint.com/articles')
      .then((resp) => resp.json())
      .then((data) => {
        setDisplayArticle(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const selectedArticle = displayArticle
    ? displayArticle.find((article) => article.Title === selectedType)
    : null;

  function handleGoBack() {
    setSelectedType('');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedType]);

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4'>
        <YouTubeVideo />
        <div className='fit mt-8'>
          <h1 className='text-4xl font-bold' id='topic'>
            Fit Nutrition
          </h1>
          <p
            className='text-blue-500 cursor-pointer'
            onClick={handleClick}
            id='aboutme'
          >
            More on nutrition
          </p>
        </div>
        <div className='mt-8'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-2'>
              Diet to follow depending on your goal?
            </h2>
            <img
              className='mx-auto w-full md:w-auto rounded'
              src='https://images.indianexpress.com/2021/12/pexels-photo-5966430-food.jpg'
              alt='unavailable'
            />
            <select
              className='block mx-auto mt-4 p-2 border border-gray-300 rounded-md'
              value={selectedType}
              onChange={handleChange}
            >
              <option value=''>Select Goal to get diet</option>
              <option value='Fat Loss'>Fat Loss</option>
              <option value='Weight loss'>Weight loss</option>
              <option value='Muscle gain'>Muscle gain</option>
              <option value='Pre-Workout Foods'>Pre-Workout Foods</option>
              <option value='Healthy foods'>Healthy foods</option>
            </select>
          </div>
          <div className='myArticle mt-8'>
            {selectedArticle ? (
              <div className='articlePage'>
                <button
                  className='bg-blue-500 text-white py-2 px-4 rounded'
                  onClick={handleGoBack}
                >
                  Go back
                </button>

                <h2 className='text-2xl font-bold mt-4'>
                  {selectedArticle.Title}
                </h2>
                <img
                  src={selectedArticle.ImageUrl}
                  alt='unavailable'
                  className='w-full md:w-auto mt-4 rounded'
                />
                {selectedArticle.article.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className='text-center'>{null}</p>
            )}
          </div>
        </div>
        <div className='suggested-resources mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Suggested Resources</h2>
          <div className='flex flex-wrap'>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Resource 1')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-2'>Resource 1</h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Resource 2')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-2'>Resource 2</h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Resource 3')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-2'>Resource 3</h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='nutrition-tip mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Nutrition Tip</h2>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            commodo, velit at fermentum eleifend, quam nisi elementum nibh, ac
            finibus velit nisl vel sapien.
          </p>
        </div>
        <div className='nutrition-quiz mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Nutrition Quiz</h2>
          <p className='text-gray-600'>
            How much do you know about nutrition? Take our quiz and find out!
          </p>
          <button className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>
            Take the Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default NutritionFitType;
