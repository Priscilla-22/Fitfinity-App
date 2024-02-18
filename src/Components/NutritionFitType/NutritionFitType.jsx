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
      <img
        className=' w-full h-12 md:h-13 object-cover'
        src='https://images.indianexpress.com/2021/12/pexels-photo-5966430-food.jpg'
        alt='unavailable'
      />
      <h1 className='text-4xl font-bold text-center mt-12 mb-3'>
        Fit Nutrition
      </h1>
      <hr
        className='mx-auto w-auto'
        style={{ borderTop: '3px dotted #f04c0c', width: '220px' }}
      />
      <div className='max-w-screen-xl mx-auto px-4'>
        <YouTubeVideo />
        <div className='fit'>
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
          <div className='myArticle'>
            {selectedArticle ? (
              <div className='articlePage mt-8'>
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
                  className='w-full md:w-auto mt-4'
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
          <h2 className='text-2xl  font-bold mb-2'>Suggested Resources</h2>
          <div className='flex flex-wrap'>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Nutrition Basics')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-2sm text-orange-600 font-semibold mb-2'>
                  Nutrition Basics
                </h3>
                <p className='text-gray-600'>
                  Understanding the fundamental principles of nutrition is
                  crucial for achieving your fitness goals. Learn about
                  macronutrients, micronutrients, and how they impact your
                  body's performance.
                </p>
                <div className='mt-4'>
                  <div className='text-sm font-medium text-gray-900'>
                    Nehemiah Cheruiyot 🍲
                  </div>
                  <div className='text-sm text-gray-500'>Kenya, Thika</div>
                </div>
              </div>
            </div>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Meal Planning')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-2sm text-orange-600 font-semibold mb-2'>
                  Meal Planning
                </h3>
                <p className='text-gray-600'>
                  Discover the importance of effective meal planning for your
                  fitness journey. Explore balanced and personalized meal plans
                  to support your specific fitness goals, whether it's fat loss,
                  muscle gain, or overall well-being.
                </p>
                <div className='mt-4'>
                  <div className='text-sm font-medium text-gray-900'>
                    Monica Mwangi 🍹
                  </div>
                  <div className='text-sm text-gray-500'>Kenya, Rongai</div>
                </div>
              </div>
            </div>
            <div
              className='w-full md:w-1/3 p-4'
              onClick={() => handleResourceClick('Supplements Guide')}
            >
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-2sm text-orange-600 font-semibold mb-2'>
                  Supplements Guide
                </h3>
                <p className='text-gray-600'>
                  Learn about the role of supplements in enhancing your fitness
                  journey. From protein shakes to vitamins, explore the right
                  supplements to support your nutrition and optimize your
                  workouts.
                </p>
                <div className='mt-4'>
                  <div className='text-sm font-medium text-gray-900'>
                    Priscilla Wakahia 🦋
                  </div>
                  <div className='text-sm text-gray-500'>Kenya, Meru</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='nutrition-tip mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Nutrition Tip</h2>
          <p className='text-gray-600'>
            Fuel your body with nutrient-dense foods to maximize your energy
            levels and recovery. Remember, consistency in a balanced diet is key
            to achieving sustainable fitness results.
          </p>
        </div>
        <div className='nutrition-quiz mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Nutrition Quiz</h2>
          <p className='text-gray-600'>
            How much do you know about nutrition? Take our quiz and find out!
          </p>
          <button className='bg-orange-600 text-white py-1 px-2  mb-2 rounded mt-4'>
            Take the Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default NutritionFitType;
