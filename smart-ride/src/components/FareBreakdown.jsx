export default function FareBreakdown({ quote }){
if(!quote) return null
const { form, solo, shared } = quote


return (
<section className="card p-6">
<h3 className="text-xl font-semibold mb-4">Fare Estimation</h3>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-gray-200 p-5">
<div className="text-sm text-gray-500">Solo ride cost</div>
<div className="text-2xl font-semibold mt-1">₹{solo.total}</div>
<div className="text-sm text-gray-600 mt-2">Distance: {solo.km} km · Rate: ₹{solo.rate}/km</div>
</div>


<div className="rounded-2xl border border-gray-200 p-5">
<div className="text-sm text-gray-500">Shared ride (if matched)</div>
<div className="mt-2 space-y-1">
<div><span className="font-medium">Passenger A:</span> ₹{shared.a}</div>
FareBreakdown.jsx


<div><span className="font-medium">Passenger B:</span> ₹{shared.b}</div>
<div className="text-sm text-gray-600">Total driver earning: ₹{shared.total} (↑ vs solo)</div>
</div>
</div>


<div className="rounded-2xl border border-gray-200 p-5">
<div className="text-sm text-gray-500">Route overview</div>
<div className="h-32 mt-3 rounded-xl bg-gradient-to-r from-brand-100 to-brand-200 flex items-center justify-center text-brand-900">Map preview</div>
<div className="text-xs text-gray-500 mt-2">(Use Google Maps/OSM in production)</div>
</div>
</div>


<div className="mt-6">
<button className="btn-primary">Confirm Booking</button>
</div>
</section>
)
}