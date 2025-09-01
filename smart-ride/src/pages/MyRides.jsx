export default function MyRides() {
const rides = [
{ id: 1, from: 'Bangalore', to: 'Chitradurga', fare: 1300, status: 'Confirmed' },
{ id: 2, from: 'Tumkur', to: 'Chitradurga', fare: 1000, status: 'Completed' },
]


return (
<div>
<h2 className="text-2xl font-semibold mb-4">My Rides</h2>
<ul className="space-y-2">
{rides.map((ride) => (
<li key={ride.id} className="bg-white p-4 rounded shadow flex justify-between">
<div>{ride.from} → {ride.to}</div>
<div>₹{ride.fare} ({ride.status})</div>
</li>
))}
</ul>
</div>
)
}