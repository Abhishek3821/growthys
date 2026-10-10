type IconName = 'arrow' | 'check' | 'growth' | 'web' | 'people' | 'pipeline' | 'phone' | 'menu' | 'close' | 'spark' | 'shield'
export default function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    arrow: 'M5 12h14M12 5l7 7-7 7',
    check: 'm5 12 4 4L19 6',
    growth: 'M4 19h16M6 15l5-5 4 3 5-8M15 5h5v5',
    web: 'M4 5h16v14H4zM4 9h16M7 7h.01M10 7h.01M9 12l-2 2 2 2M15 12l2 2-2 2',
    people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    pipeline: 'M4 4h16l-6 7v7l-4 2v-9z',
    phone: 'M8 3H4v4a14 14 0 0 0 13 13h4v-4l-5-2-2 2a11 11 0 0 1-6-6l2-2z',
    menu: 'M4 6h16M4 12h16M4 18h16',
    close: 'm6 6 12 12M6 18 18 6',
    spark: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z',
    shield: 'm12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6',
  }
  return <svg className="shrink-0 align-middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
