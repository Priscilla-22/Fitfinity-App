


function FitType() {
    const [selectedType, setSelectedType] = useState("");
    const [displayArticle, setDisplayArticle] = useState(null); 
    const [selectedResource, setSelectedResource] = useState("");

    function handleClick() {
        const desiredURL = "https://www.healthline.com/nutrition";
        window.location.href = desiredURL;
      }

      function handleResourceClick(resource) {
        setSelectedResource(resource);
        setSelectedType(resource);
      }

      useEffect(() => {
        fetch("https://articles-jlcz.onrender.com/Articles")
          .then((resp) => resp.json())
          .then((data) => {
            setDisplayArticle(data);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []); 
      const selectedArticle = displayArticle
    ? displayArticle.find((article) => article.Title === selectedType)
    : null;

  function handleGoBack() {
    setSelectedType(""); 
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [selectedType]);

  return (
    <>
      <div>
        <YouTubeVideo />
        <div className="fit">
          <h1 id="topic">fitnutrition</h1>
          <p onClick={handleClick} id="aboutme">
            More on nutrition
          </p>
        </div>
        <div>
          <div className="coverArticle">
            <h2 id="myHeader">Diet to follow depending on your goal?</h2>
            <img
              id="healthy"
              src="https://images.indianexpress.com/2021/12/pexels-photo-5966430-food.jpg"
              alt="unavalaible"
            />
            <select
              className="optional"
              value={selectedType}
              onChange={handleChange}
            >
              <option value="">Select Goal to get diet</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Weight loss">Weight loss</option>
              <option value="Muscle gain">Muscle gain</option>
              <option value="Pre-Workout Foods">Pre-Workout Foods</option>
              <option value="Healthy foods">Healthy foods</option>
            </select>
          </div>
          <div className="myArticle">
            {selectedArticle ? ( // Only display the article when a selection is made
              <div className="articlePage">
                <button id="goback" onClick={handleGoBack}>
                  Go back
                </button>

                <h2>{selectedArticle.Title}</h2>
                <img
                  src={selectedArticle.ImageUrl}
                  alt="unavailable"
                  id="nutritionimg"
                />
                {selectedArticle.article.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p>{null}</p>
            )}
          </div>
          <div className="extraResources">
            <h2>Extra Resources</h2>
            <div className="cardsContainer">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Resource 1"
                />
                <p>vitamins</p>
                <button onClick={() => handleResourceClick("Fat Loss")}>
                  Read More
                </button>
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Resource 2"
                />
                <p>Calorie Deficit foods</p>
                <button onClick={() => handleResourceClick("Weight loss")}>
                  Read More
                </button>
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Resource 3"
                />
                <p>Body Bulding foods</p>
                <button onClick={() => handleResourceClick("Muscle gain")}>
                  Read More
                </button>
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Resource 4"
                />
                <p>fruits & vegetables</p>
                <button
                  onClick={() => handleResourceClick("Pre-Workout Foods")}
                >
                  Read More
                </button>
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1542444592-0d5997f202eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdoZXklMjBwcm90ZWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Resource 1"
                />
                <p>Trending healthy Foods</p>
                <button onClick={() => handleResourceClick("Healthy foods")}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );


}
export default FitType;