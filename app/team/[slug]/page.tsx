import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Layout, PageHero } from "../../components";
import { people } from "../people";
export const dynamicParams = false;
export function generateStaticParams() { return people.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params; const person=people.find(p=>p.slug===slug);
 return {title:person ? `${person.name} | CFA & Associates` : "Profile not found",description:person?.summary};
}
export default async function Profile({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const person=people.find(p=>p.slug===slug); if(!person) notFound();
 return <Layout><PageHero title={person.name} text={person.role} />
 <section className="section profile-layout"><aside className="profile-aside">
 <div className="team-monogram" aria-hidden="true">{person.initials}</div><h2>Qualifications</h2>
 <ul>{person.qualifications.map(q=><li key={q}>{q}</li>)}</ul></aside>
 <div className="profile-copy"><Link className="profile-back" href="/team">← Back to our team</Link><h2>Professional profile</h2>
 {person.paragraphs.map(p=><p key={p}>{p}</p>)}<Link className="btn primary" href="/contact">Contact the firm</Link></div></section></Layout>;
}
