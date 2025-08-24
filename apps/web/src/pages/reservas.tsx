import Layout from '../components/Layout';
import ReservationCalendar from '../components/ReservationCalendar';

export default function Reservas() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Reservas de Áreas Comuns</h2>
      <ReservationCalendar />
    </Layout>
  );
}