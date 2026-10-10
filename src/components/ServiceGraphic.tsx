import type { ReactNode } from 'react'

type ServiceId = 'digital-marketing' | 'it-services' | 'hrms-software' | 'crm-software'

// These diagrams explain the services; they contain no claimed performance data.
export default function ServiceGraphic({ service }: { service: string }) {
  const graphics: Record<ServiceId, ReactNode> = {
    'digital-marketing': <>
      <path className="diagram-connector" d="M104 45h38q12 0 12 12v23M104 135h38q12 0 12-12v-23M256 90h-37" />
      <rect className="diagram-card" x="24" y="25" width="80" height="40" rx="7" /><text x="64" y="50">Search</text>
      <rect className="diagram-card" x="24" y="115" width="80" height="40" rx="7" /><text x="64" y="140">Social</text>
      <rect className="diagram-card" x="256" y="70" width="80" height="40" rx="7" /><text x="296" y="95">Paid ads</text>
      <circle className="diagram-hub" cx="177" cy="90" r="38" />
      <path d="M163 101h28M165 96l9-10 7 5 10-14M182 77h9v9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="diagram-dot" cx="117" cy="45" r="3" /><circle className="diagram-dot" cx="243" cy="90" r="3" />
    </>,
    'it-services': <>
      <rect className="diagram-card" x="52" y="20" width="225" height="139" rx="8" />
      <path className="diagram-rule" d="M52 43h225" /><circle fill="#f17c21" cx="65" cy="32" r="3" /><circle fill="#c4cce0" cx="76" cy="32" r="3" /><circle fill="#c4cce0" cx="87" cy="32" r="3" />
      <rect fill="#151b50" x="68" y="58" width="113" height="7" rx="3" /><rect fill="#c4cce0" x="68" y="75" width="92" height="4" rx="2" /><rect fill="#c4cce0" x="68" y="86" width="79" height="4" rx="2" />
      <rect fill="#f17c21" x="68" y="103" width="58" height="16" rx="4" /><rect fill="#eef1f8" x="197" y="58" width="63" height="61" rx="5" /><path d="m211 90 10-10 10 12 12-19" stroke="#151b50" strokeWidth="2" fill="none" />
      <rect className="diagram-card" x="248" y="85" width="57" height="83" rx="7" /><path className="diagram-rule" d="M266 94h21" /><rect fill="#eef1f8" x="256" y="107" width="41" height="35" rx="3" /><rect fill="#f17c21" x="256" y="149" width="29" height="6" rx="2" />
    </>,
    'hrms-software': <>
      <path className="diagram-connector" d="M109 52h40M109 128h40M211 90h40" />
      <rect className="diagram-card" x="25" y="30" width="84" height="44" rx="7" /><text x="67" y="56">Attendance</text>
      <rect className="diagram-card" x="25" y="106" width="84" height="44" rx="7" /><text x="67" y="132">Leave</text>
      <rect className="diagram-card" x="251" y="68" width="84" height="44" rx="7" /><text x="293" y="94">Payroll</text>
      <rect className="diagram-hub" x="137" y="45" width="86" height="90" rx="12" />
      <circle cx="180" cy="72" r="10" stroke="#fff" strokeWidth="2" fill="none" /><path d="M162 104v-3a18 18 0 0 1 36 0v3M161 116h38" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle className="diagram-dot" cx="121" cy="52" r="3" /><circle className="diagram-dot" cx="239" cy="90" r="3" />
    </>,
    'crm-software': <>
      <rect className="diagram-card" x="30" y="27" width="300" height="127" rx="8" />
      <path className="diagram-rule" d="M130 27v127M230 27v127M30 59h300" />
      <text x="80" y="48">New leads</text><text x="180" y="48">Follow-up</text><text x="280" y="48">Customers</text>
      <rect fill="#eef1f8" x="44" y="73" width="72" height="25" rx="4" /><rect fill="#151b50" x="53" y="82" width="29" height="4" rx="2" /><rect fill="#c4cce0" x="53" y="89" width="48" height="3" rx="1.5" />
      <rect fill="#eef1f8" x="44" y="109" width="72" height="25" rx="4" /><rect fill="#c4cce0" x="53" y="118" width="41" height="4" rx="2" />
      <rect fill="#eef1f8" x="144" y="73" width="72" height="25" rx="4" /><rect fill="#151b50" x="153" y="82" width="34" height="4" rx="2" /><rect fill="#c4cce0" x="153" y="89" width="48" height="3" rx="1.5" />
      <rect fill="#fff0e3" x="244" y="73" width="72" height="25" rx="4" /><path d="m270 85 5 5 10-11" stroke="#bc5710" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>,
  }

  return <div className="service-graphic" aria-hidden="true"><svg viewBox="0 0 360 180" fill="none" focusable="false">{graphics[service as ServiceId]}</svg></div>
}
