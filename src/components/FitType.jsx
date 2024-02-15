


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
      }, []); // Empty dependency array to fetch data only once

}
export default FitType;