import { notFound } from 'next/navigation'

const titles: Record<string, string> = {
  'first-wellness-session': 'Your first wellness session',
  'sleep-better': 'Simple ways to sleep better',
  'intentional-rest': 'The value of intentional rest',
}

export function generateStaticParams() { return Object.keys(titles).map(slug => ({ slug })) }
export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = titles[slug]
  if (!title) notFound()
  return <main className="hero"><p className="eyebrow">Journal</p><h1>{title}</h1><p>Practical reflections and considered guidance for a more restorative everyday rhythm.</p></main>
}
