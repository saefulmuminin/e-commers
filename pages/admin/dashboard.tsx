// pages/dashboard.tsx
import withAuth from '../../components/withAuth';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default withAuth(Dashboard);
