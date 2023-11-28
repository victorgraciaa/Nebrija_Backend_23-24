export type Client = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  dni: string,
  bookings: Array<Booking>
}

export type Restaurant = {
  name: string,
  cif: string,
  address: string,
  bookings: Array<Booking>
}

export type Booking = {
  date: Date,
  client: string,
  restaurant: string
}
