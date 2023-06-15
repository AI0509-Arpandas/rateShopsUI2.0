const baseUrl = process.env.REACT_APP_BASE_URL
export const config = {
  baseUrl,
  availableVerticals: ["flighrates", "reviews", "carrentals"],
  flightrate: "flightrates",
  reviews: "reviews",
  roomrates: "roomrates",
  carrentals: "carrentals"
}