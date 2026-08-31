'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
const links = [['Services','/services/'],['Areas We Serve','/areas-we-serve/'],['About','/about/'],['Gallery','/gallery/'],['FAQ','/faq/'],['Blogs','/blog/'],['Contact','/contact/']]
export function SiteHeader() { const [open,setOpen]=useState(false); return <header className="site-header"><div className="wrap nav-inner"><Link className="logo" href="/"><span className="mark">✦</span>Karachi Best <b>Escorts</b></Link><nav className="desktop-nav" aria-label="Primary">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><div className="header-actions"><a className="phone-cta" href="tel:+923350246669"><Phone size={17}/><span>+92 335 0246669</span></a><button className="menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>{open&&<div className="mobile-drawer"><nav aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></div>}</header> }
