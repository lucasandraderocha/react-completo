import Header from "../components/Header";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import User from "../components/user/User";
import NotFound from "../NotFound";
import Login from "../components/login/Login";
import Home from "../components/Home";
import Footer from "../components/Footer";
import UserContext from "../UserContext";

import styles from "./Page.module.css";

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

const Page = () => {
  const { modalPhoto } = useContext(UserContext);
  return (
    <div className={`${styles.page} ${modalPhoto && styles.hasModal}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route
          path="account/*"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {modalPhoto && (
        <style>
          {`
        body {
          overflow: clip;
        }
        `}
        </style>
      )}
    </div>
  );
};

export default Page;
