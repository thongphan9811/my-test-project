import { createFileRoute } from '@tanstack/react-router';
import { Templates } from '../components/Templates/Templates';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return <Templates />;
}
