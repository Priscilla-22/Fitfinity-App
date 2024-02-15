


function FitType() {
    const [selectedType, setSelectedType] = useState("");
    const [displayArticle, setDisplayArticle] = useState(null); 
    const [selectedResource, setSelectedResource] = useState("");

    function handleClick() {
        const desiredURL = "https://www.healthline.com/nutrition";
        window.location.href = desiredURL;
      }

}
export default FitType;