import Layout from '../components/Layout';
import TicketKanban from '../components/TicketKanban';

export default function Tickets() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Tickets e Solicitações</h2>
      <TicketKanban />
    </Layout>
  );
}