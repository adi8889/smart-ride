import { useState } from 'react'
import BookingForm from '../components/BookingForm'
import FareBreakdown from '../components/FareBreakdown'


export default function BookRide(){
const [quote, setQuote] = useState(null)
return (
<div className="space-y-6">
<h2 className="text-2xl font-semibold">Book a Ride</h2>
<BookingForm onQuote={setQuote} />  
<FareBreakdown quote={quote} />
</div>
)
}