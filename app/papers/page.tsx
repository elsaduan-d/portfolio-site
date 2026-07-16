import { PageHeader } from '@/components/PageHeader';
import { PaperExplorer } from '@/components/PaperExplorer';
import { papers } from '@/data/papers';

export default function PapersPage() {
  return (
    <main className="container-shell section-padding">
      <PageHeader
        i18nKey="papers"
        eyebrow="Papers"
        title="Course papers and analyses on AI products, educational design, and media."
        intro="Each paper opens directly in a new browser tab as a PDF. Use the index to move between items."
      />
      <section className="pt-8">
        <PaperExplorer items={papers} />
      </section>
    </main>
  );
}
