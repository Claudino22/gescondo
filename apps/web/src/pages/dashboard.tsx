import Layout from '../components/Layout';
import ChartKPI from '../components/ChartKPI';

export default function Dashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartKPI title="Inadimplência" value={12} />
        <ChartKPI title="Reservas do mês" value={8} />
      </div>
    </Layout>
  );
}