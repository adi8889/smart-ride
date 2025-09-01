// import BookingForm from '../components/BookingForm'
// import FareBreakdown from '../components/FareBreakdown'

// export default function Home() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Smart Ride 🚖</h1>
//       <p className="text-gray-600">Book affordable shared rides easily!</p>
//       <div className="grid md:grid-cols-2 gap-6">
//         <BookingForm />
//         <FareBreakdown />
//       </div>
//     </div>
//   )
// }




import BookingForm from "../components/BookingForm"
import FareBreakdown from "../components/FareBreakdown"

export default function Home() {
  // Mock data just to test UI
  const mockQuote = {
    form: { pickup: "Bangalore", drop: "Chitradurga" },
    solo: { total: 2000, km: 200, rate: 10 },
    shared: { a: 1300, b: 1000, total: 2300 },
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <BookingForm />
      <FareBreakdown quote={mockQuote} />
    </main>
  )
}
