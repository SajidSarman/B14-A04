interface BookingInfo {
    name: string
    guests: number
    time: string
}

function formatBookingConfirmation(booking: BookingInfo): string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

console.log(formatBookingConfirmation({name: "Sajid", guests: 2, time: "12:22 PM"}))

console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" }))