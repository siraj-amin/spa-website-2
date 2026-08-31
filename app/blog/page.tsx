import Link from 'next/link'

const posts = [
  ['first-wellness-session', 'Your first wellness session'],
  ['sleep-better', 'Simple ways to sleep better'],
  ['intentional-rest', 'The value of intentional rest'],
]

export default function BlogPage() {
  return <main className="hero"><p className="eyebrow">Journal</p><h1>Thoughtful ways to feel restored.</h1><div>{posts.map(([slug, title]) => <p key={slug}><Link href={`/blog/${slug}`}>{title}</Link></p>)}</div></main>
}
