import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Application from './pages/Application';
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import Addjob from './pages/Addjob';
import ManageJobs from './pages/ManageJobs';
import ViewApplication from './pages/ViewApplication';
import 'quill/dist/quill.snow.css'

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/application' element={<Application />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-job' element={<Addjob />} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-application' element={<ViewApplication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
