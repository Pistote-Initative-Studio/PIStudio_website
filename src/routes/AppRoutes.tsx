import { Routes, Route } from 'react-router-dom';
import ProjectsCarousel from '../components/ProjectsCarousel.jsx';
import WheelsUpPage from '../pages/WheelsUpPage';
import InventoryTrackerPage from '../pages/InventoryTrackerPage';
import BudgetBalancedPage from '../pages/BudgetBalancedPage';
import MarriageManagedPage from '../pages/MarriageManagedPage';
import BusinessDirectoryPage from '../pages/BusinessDirectoryPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProjectsCarousel />} />
      <Route path="/wheelsup" element={<WheelsUpPage />} />
      <Route path="/inventory-tracker" element={<InventoryTrackerPage />} />
      <Route path="/budget-balanced" element={<BudgetBalancedPage />} />
      <Route path="/marriage-managed" element={<MarriageManagedPage />} />
      <Route path="/business-directory" element={<BusinessDirectoryPage />} />
    </Routes>
  );
}
