import { PaperExplorer } from '@/components/PaperExplorer';
import { papers } from '@/data/papers';

export default function PapersPage() {
  return (
    <main className="container-shell section-padding">
      <PaperExplorer items={papers} />
    </main>
  );
}
