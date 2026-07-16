import { ExperienceExplorer } from '@/components/ExperienceExplorer';
import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <main className="container-shell section-padding">
      <ExperienceExplorer items={experiences} />
    </main>
  );
}
