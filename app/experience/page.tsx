import { ExperienceExplorer } from '@/components/ExperienceExplorer';
import { PageHeader } from '@/components/PageHeader';
import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <main className="container-shell section-padding">
      <PageHeader
        i18nKey="experience"
        eyebrow="Experience"
        title="Roles spanning product operations, educational programming, and public-facing learning work."
        intro="A mix of product work, event operations, educational programming, and research-informed design practice."
      />
      <section className="pt-8">
        <ExperienceExplorer items={experiences} />
      </section>
    </main>
  );
}
