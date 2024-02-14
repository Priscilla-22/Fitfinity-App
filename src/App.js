// import React from 'react';
// import ImageSlider from './Components/ImageSlider/ImageSlider.jsx'
// import WorkoutPlans from './Components/WorkoutPlans/WorkoutPlans.jsx';

// function App() {
//   return (
//     <div className='App'>
//       <ImageSlider />
//       <h1 className='text-4xl font-bold text-center my-8'>My Exercise Plan</h1>
//       <WorkoutPlans />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';

function App() {
  return (
    <div className='App'>
      <ImageSlider />
     <h1 className='text-4xl font-bold text-center my-8'>My Exercise Plan</h1>
      <WorkoutPlanList />
    </div>
  );
}

export default App;