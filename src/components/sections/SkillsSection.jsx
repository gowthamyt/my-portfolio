import { Code2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { skills } from '../../data/portfolioData';

const orbitPositions = [
  { left: '5%', top: '10%' },
  { left: '28%', top: '2%' },
  { left: '58%', top: '6%' },
  { left: '78%', top: '14%' },
  { left: '84%', top: '34%' },
  { left: '73%', top: '61%' },
  { left: '56%', top: '76%' },
  { left: '34%', top: '82%' },
  { left: '11%', top: '66%' },
  { left: '4%', top: '40%' },
  { left: '18%', top: '28%' },
  { left: '40%', top: '20%' },
  { left: '65%', top: '26%' },
  { left: '20%', top: '54%' },
  { left: '44%', top: '60%' },
  { left: '62%', top: '46%' },
  { left: '84%', top: '80%' },
  { left: '1%', top: '83%' },
  { left: '46%', top: '90%' },
];

function SkillsSection() {
  return (
    <section className="section values-section reveal">
      <SectionHeading
        eyebrow={<p className="eyebrow"><Code2 size={16} /> Core Skills</p>}
        title="The stack I use across design, development, testing, and delivery."
        description="This reflects how I work: build the Python backend, shape the interface, test the flow, and keep the release practical."
      />

      <div className="skills-shell">
        <p className="skills-lead">
          I&apos;m currently looking to contribute to a cross-functional team where thoughtful implementation,
          steady communication, and dependable delivery all matter.
        </p>
        <div className="skills-orbit">
          <div className="orbit-core">G</div>
          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span key={skill} style={orbitPositions[index]}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
