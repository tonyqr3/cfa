import Link from "next/link";
import { Layout, PageHero, SectionTitle } from "../components";
import { people } from "./people";
export default function Team() {
 return <Layout><PageHero title="Our Team" text="Meet the professionals behind our audit, accounting and advisory work." />
 <section className="section"><SectionTitle eyebrow="Our People" title="Experience. Care. Professional judgement." text="Explore our team’s qualifications, specialist knowledge and approach to their work." />
 <div className="team-grid">{people.map(person=><article key={person.slug}>
 <div className="team-monogram" aria-hidden="true">{person.initials}</div>
 <div><h3>{person.name}</h3><p>{person.role}</p><p className="team-summary">{person.summary}</p>
 <Link className="profile-link" href={`/team/${person.slug}`} aria-label={`Read ${person.name}'s profile`}>View profile →</Link></div>
 </article>)}</div></section></Layout>;
}
