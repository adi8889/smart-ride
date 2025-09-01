import { mockUpcomingRides } from '../data/mock'


export default function MyRidesPanel(){
return (
<aside className="card p-5">
<h3 className="text-lg font-semibold">My Rides</h3>
<div className="mt-3 space-y-3">
{mockUpcomingRides.map(r => (
<div key={r.id} className="rounded-xl border border-gray-200 p-3">
<div className="font-medium">{r.from} → {r.to}</div>
<div className="text-xs text-gray-500">{r.date}</div>
</div>
))}
</div>
</aside>
)
}