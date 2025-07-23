import { useLayoutEffect, type ReactNode } from 'react'
import HomePage from '../pages/HomePage';
import App from '../App.tsx'
import { Routes, Route, useLocation, useNavigate, useHref } from "react-router";
import AboutPage from '../pages/AboutPage.tsx';
import {HeroUIProvider} from "@heroui/react";
import NotFoundPage from '../pages/NotFoundPage.tsx';
import MealPage from '../pages/MealPage.tsx';
import CategoryPage from '../pages/CategoryPage.tsx';
import CategoriesPage from '../pages/CategoriesPage.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import FilterPage from '../pages/FilterPage.tsx';

const RouterWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    // if (location.pathname.includes("/gallery")) {
    //   return;
    // }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return children;
};

const AnimatedRoutes = () => {
  return (
    <RouterWrapper>
      <Routes>
      <Route element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/meal" element={<NotFoundPage />} />
        <Route path="/meal/:id" element={<MealPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      </Routes>
    </RouterWrapper>
  )
}

const Router = () => {
  const navigate = useNavigate();
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <AnimatedRoutes />
    </HeroUIProvider>
  )
}

export default Router