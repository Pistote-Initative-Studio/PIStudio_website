import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function SiteMapPage() {
  return (
    <SubpageLayout title="Site Map">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory-tracker">Inventory Tracker</Link></li>
          <li><Link to="/wheelsup">Wheels Up</Link></li>
          <li><Link to="/budget-balanced">Budget Balanced</Link></li>
          <li><Link to="/marriage-managed">Marriage Managed</Link></li>
          <li><Link to="/business-directory">US Business Directory</Link></li>
        </ul>
      </nav>
    </SubpageLayout>
  );
}
