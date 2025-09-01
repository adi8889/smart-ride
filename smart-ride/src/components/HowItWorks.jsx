export default function HowItWorks(){
const items = [
{ title: 'Book', desc: 'Pick source & destination', icon: '📅' },
{ title: 'Share', desc: 'We match overlapping routes', icon: '👥' },
{ title: 'Save', desc: 'Fair split on shared segment', icon: '₹' },
]
return (
<section className="card p-6 mt-8">
<h3 className="text-xl font-semibold mb-4">How it works</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{items.map((it) => (
<div key={it.title} className="rounded-2xl border border-gray-200 p-5 bg-white">
<div className="text-3xl mb-3" aria-hidden>{it.icon}</div>
<div className="font-medium">{it.title}</div>
<div className="text-sm text-gray-600">{it.desc}</div>
</div>
))}
</div>
</section>
)
}