import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="logo" href="/">Karachi Best Escorts</a>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/services/">Services</Link>
          <Link href="/areas-we-serve/">Areas</Link>
          <Link href="/blog/">Blogs</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </header>
      <section className="hero">
        <p className="eyebrow">Private, thoughtful wellness experiences</p>
        <h1>Premium companionship in Karachi.</h1>
        <p>Discover discreet, considered experiences tailored to your preferences.</p>
        <Link className="button" href="/blog/">Explore our blogs</Link>
      </section>
      <footer className="site-footer"><p>© 2026 Karachi Best Escorts. All rights reserved.</p><a href="tel:+923350246669">+92 335 0246669</a></footer>
    </main>
  )
}
