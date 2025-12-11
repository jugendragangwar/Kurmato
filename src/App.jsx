import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/home/Home";

import JobOpenings from "./components/JobOpenings";
import DataBaseAdministrator from "./components/DataBaseAdministrator";
import JobForm from "./components/JobForm";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import CreateBlogs from "./components/Admin/page/CreateBlogs";
import BlogPage from "./components/home/BlogPage";
import AllJobPosition from "./components/Admin/page/AllJobPosition";
import Navbar from "./components/Admin/page/Navbar";
// import CompanyOverview from './components/CompanyOverview';
import RecruitmentProcess from "./components/RecruitmentProcess";
import BlogPost from "./components/Admin/page/BlogPost";
import WebDevelopment from "./components/home/Solutions/WebDevelopment";
import SoftwareDevelopmemt from "./components/home/Solutions/SoftwareDevelopmemt";
import MetaverseDevelopment from "./components/home/Solutions/MetaverseDevelopment";
import ExchangeSolutions from "./components/home/Solutions/ExchangeSolutions";
import GameDevelopment from "./components/home/Solutions/GameDevelopment";
import NFTDevelopment from "./components/home/Solutions/NFTDevelopment";
import AllJobPost from "./components/Admin/page/AllJobPost";
import GetallJobResponsive from "./components/Admin/page/GetallJobResponsive";
import ContactFormdata from "./components/Admin/page/ContactFormdata";
import TermAndCondition from "./components/TermAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Breadcrumb from "./components/Breadcrumb";
import SearchEngine from "./components/home/digitalmarketing/SearchEngine";
import EmailMarketing from "./components/home/digitalmarketing/EmailMarketing";
import PayPerClick from "./components/home/digitalmarketing/PayPerClick";
import SocailMarketing from "./components/home/digitalmarketing/SocailMarketing";
import AppDevelopment from "./components/home/Solutions/AppDevelopment";
import BlockChain from "./components/home/Solutions/BlockChain";
import NotFound from "./components/NotFound";
import Login from "./components/Admin/page/LoginPage";
import Welcome from "./components/Admin/page/Welcome";
import SignupForm from "./auth/Signup";
import ForgotPassword from "./auth/ForgetPassword";
import LoginUser from "./auth/UserLogin";

const App = () => {
  const { pathname } = useLocation();
  // const location = useLocation();
  // const isAdminRoute = location.pathname.startsWith('/admin') ;
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoggedIn ? (
        <Navbar />
      ) : (
        <Header
          logout={() => {
            setIsLoggedIn(false);
            localStorage.removeItem("isLoggedIn");
          }}
        />
      )}

      {/* {isLoggedIn ?   <Navbar /> : <Header />} */}
      {/* <Breadcrumb/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/jobopenings" element={<JobOpenings />} />
        <Route path="/database/:jobpost_id" element={<DataBaseAdministrator />}/>
        <Route path="/jobform/:position" element={<JobForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/joinUs" element={<RecruitmentProcess />} />
        <Route path="/websiteDevelopment" element={<WebDevelopment />} />
        <Route path="/softwareDevelopment" element={<SoftwareDevelopmemt />} />
        <Route path="/metaverseDevelopment" element={<MetaverseDevelopment />}/>
        <Route path="/exchangeSolution" element={<ExchangeSolutions />} />
        <Route path="/appDevelopment" element={<AppDevelopment />} />
        <Route path="/blockchain" element={<BlockChain />} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/NftDevelopment" element={<NFTDevelopment />} />
        <Route path="/termcondition" element={<TermAndCondition />} />
        <Route path="/searchEngine" element={<SearchEngine />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/payPerClick" element={<PayPerClick />} />
        <Route path="/socialmarketing" element={<SocailMarketing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/LoginUser" element={<LoginUser/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="*" element={<NotFound />} />
        {/* admin page */}
        <Route path="/alljobposition" element={isLoggedIn ? <AllJobPosition /> : <Navigate to="/login" />}/>
        <Route path="/CreateBlogs" element={isLoggedIn ? <CreateBlogs /> : <Navigate to="/login" />}/>
        <Route path="/blogpost" element={isLoggedIn ? <BlogPost /> : <Navigate to="/login" />}/>
        <Route
          path="/alljobposts"
          element={isLoggedIn ? <AllJobPost /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobresponse"
          element={
            isLoggedIn ? <GetallJobResponsive /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/contactform"
          element={isLoggedIn ? <ContactFormdata /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/home/Home';
// import LoginPage from './components/LoginPage';
// import JobOpenings from './components/JobOpenings';
// import DataBaseAdministrator from './components/DataBaseAdministrator';
// import JobForm from './components/JobForm';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';
// import CreateBlogs from './components/Admin/page/CreateBlogs';
// import BlogPage from './components/home/BlogPage';
// import AllJobPosition from './components/Admin/page/AllJobPosition';
// import Navbar from './components/Admin/page/Navbar';
// import AdminLayout from './components/Admin/page/AdminLayout';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin');

//   return (
//     <>
//       {isAdminRoute && isLoggedIn ? <Navbar /> : <Header />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path="/jobopenings" element={<JobOpenings />} />
//         <Route path="/database/:jobpost_id" element={<DataBaseAdministrator />} />
//         <Route path="/jobform" element={<JobForm />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog" element={<BlogPage />} />

//         {/* Admin routes */}
//         <Route
//           path="/admin/*"
//           element={
//             <AdminLayout>
//               <Routes>
//                 <Route path="createblogs" element={<CreateBlogs />} />
//                 <Route path="allblogs" element={<BlogPage />} />
//                 <Route path="postjob" element={<AllJobPosition />} />
//                 <Route path="alljobposts" element={<AllJobPosition />} />
//                 <Route path="alljobresponse" element={<JobForm />} />
//                 <Route path="getallcontactform" element={<Contact />} />
//               </Routes>
//             </AdminLayout>
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;
