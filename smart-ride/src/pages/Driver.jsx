export default function Driver() {
const rides = [
{ id: 1, passenger: 'Passenger A', from: 'Bangalore', to: 'Chitradurga', fare: 1300 },
{ id: 2, passenger: 'Passenger B', from: 'Tumkur', to: 'Chitradurga', fare: 1000 },
]


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Driver Dashboard</h2>
<ul className="space-y-2">
{rides.map((ride) => (
<li key={ride.id} className="bg-white p-4 rounded shadow flex justify-between">
<div>{ride.passenger} ({ride.from} → {ride.to})</div>
<div>₹{ride.fare}</div>
</li>
))}
</ul>
</div>
)
}