// Turo Message App - Tropical Transports
// Structure: Vehicle → Location → Message Type

export const vehicles = [
  {
    id: '2024-model-y',
    label: '2024 Model Y',
    icon: '🚗',
    color: 'blue',
    plate: '0T79',
    colorName: 'Space Grey',
    type: 'electric',
    locations: [
      {
        id: 'airport',
        label: 'Airport (HNL)',
        icon: '✈️',
        messages: [
          {
            id: '24my-appt-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly please complete the License Verification Process. (24+ Hours Before)

🚘 On Arrival:
On the day of your trip, once the car is dropped off at the airport, we'll send you:
1. The exact location
2. Lock box code

💡 There will be no parking ticket, the ticket arm will scan the license plate. Do not pay when exiting the garage — the parking fee is already covered. Please exit through the cash lane(s) upon exit and show reservation to gate attendant for exit if the gate does not automatically open

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear to include cooler, chairs and sand toys
• Car seat

⚡️ Charging
Please keep the battery charge level between 20% and 80% during your trip.

If you are using a Non-Tesla brand charger you can find the charging adapters are in a tray under the drivers side seat.

Check with your hotel they may have complimentary charging.

"Supercharging" (tesla brand fast chargers) costs will be billed to the Tesla account. Reimbursement requests will be sent through the Turo app after your trip ends.

Below is a list of Tesla Supercharger locations on Oahu for your convenience. Feel free to reach out with any questions about charging or using the vehicle!

Tesla Supercharger Locations on Oahu:
• Aiea, HI - Moanalua Road (Pearlridge Center)
• Honolulu, HI - Kahala Avenue (Kahala Hotel & Resort)
• Kaneohe, HI: Bay View Golf Course

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-appt-pickup',
            title: 'Pickup Day',
            content: `Aloha & Welcome to Oahu! 🌺

Your Turo rental is ready for pickup at Daniel K. Inouye International Airport (HNL).

🚘 Vehicle Info & Pickup
• Car: Space Grey Tesla Model Y
• License Plate: 0T79
• Location: Level 7, Row F
• Key: In a lockbox attached to the driver's side window
→ Code is sent in the parking instructions!

📸 Please take clear photos of the car from all angles before driving off.
If you notice any damage or concerns, message us before leaving the garage.

🅿️ Parking Info
No need to pay for parking — Turo covers the fee.

Please leave the garage through the CASH ticket box. This will ensure that you are not paying for parking. If any issues arise, please inform the attendant that it is a Turo rental.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-appt-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off to the Airport:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
Return to the International Parking Garage at Honolulu Airport.

From the Arrival Level, stay in the left lane before Terminal 1 and look for the "International" sign after the Lei Stand.

‼️‼️‼️VERY IMPORTANT ‼️‼️‼️

***When you turn left to enter the garage please enter through the LEFT ticket arm with the signage labeled International***

🚨DO NOT🚨 go to the right arm entrance🚫 (that's for Terminal 1).

***If you go through the terminal 1 entrance FEES WILL be incurred and a reimbursement requested to you***

The ticket arm will scan the license plate and should open automatically. No ticket needed

We highly recommend viewing the instructional video on YouTube to help make the vehicles return a breeze: https://youtu.be/Sm2zpl12iXA?si=Ik61NXL3YEbZDZ1B

Park preferably in the EV stalls on the 7th floor near the elevators. If that's not available then anywhere on the 7th and 8th floor.

Keys: please leave the key in the lock box on the drivers side window as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-appt-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
      {
        id: 'home',
        label: 'Home (Kaneohe)',
        icon: '🏠',
        messages: [
          {
            id: '24my-home-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly please complete the License Verification Process. (24+ Hours Before)

🚘 On Arrival:
The car will be parked at 45-315 Lilipuna Rd. Kaneohe 96744.

On the day of your trip, we'll send you Lockbox information and placement.

💡 Please be careful exiting and entering the parking garage.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear to include cooler, chairs and sand toys
• Car seat

⚡️ Charging
Please keep the battery charge level between 20% and 80% during your trip.

If you are using a Non-Tesla brand charger you can find the charging adapters are in a tray under the drivers side seat.

Check with your hotel they may have complimentary charging.

"Supercharging" (tesla brand fast chargers) costs will be billed to the Tesla account. Reimbursement requests will be sent through the Turo app after your trip ends.

Below is a list of Tesla Supercharger locations on Oahu for your convenience. Feel free to reach out with any questions about charging or using the vehicle!

Tesla Supercharger Locations on Oahu:
• Aiea, HI - Moanalua Road (Pearlridge Center)
• Honolulu, HI - Kahala Avenue (Kahala Hotel & Resort)
• Kaneohe, HI: Bay View Golf Course

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-home-pickup',
            title: 'Pickup Day',
            content: `Aloha and welcome to Honolulu! 🌺

Your Turo rental is ready for pickup located at 45-315 Lilipuna Rd. Kaneohe 96744. Please follow the steps below to find your vehicle:

The car is located in the parking garage closest to the road. It is parked in stall 19.

Key: In a lockbox attached to the driver's side window

→ Code for the lock box is: 0219

📸 Please take clear photos of the car from all angles before driving off. If you notice any damage or concerns, message us before leaving the garage.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🌴
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-home-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
45-315 Lilipuna Rd. Stall 19

Keys: leave the key in the lockbox as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24my-home-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
    ],
  },
  {
    id: '2022-sonata',
    label: '2022 Sonata',
    icon: '🚗',
    color: 'green',
    plate: '097H',
    colorName: 'White',
    type: 'hybrid',
    locations: [
      {
        id: 'airport',
        label: 'Airport (HNL)',
        icon: '✈️',
        messages: [
          {
            id: '22son-appt-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly:
Please complete the License Verification Process at least 24 hours before your trip.

🚘 On Arrival:
On the day of your trip, once the car is dropped off at the airport, we'll send you:
1. The exact location
2. Lock box code

💡 Do not pay when exiting the garage — the parking fee is already covered through Turo. Please exit through the cash lane(s) and show your reservation to the gate attendant if the gate does not automatically open.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear (cooler, chairs, sand toys)
• Car seat

⛽️ Fuel Info:
The Sonata takes regular unleaded gas, so you'll enjoy excellent mileage throughout your trip. Please return the car with the same fuel level as when you received it.

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-appt-pickup',
            title: 'Pickup Day',
            content: `Aloha & Welcome to Oahu! 🌺

Your Turo rental is ready for pickup at Daniel K. Inouye International Airport (HNL).

🚘 Vehicle Info & Pickup
• Car: White Hyundai Sonata Hybrid
• License Plate: 097H
• Location: Level 7, Row F
• Key: In a lockbox attached to the driver's side window
→ Code is sent in the parking instructions!

📸 Please take clear photos of the car from all angles before driving off.
If you notice any damage or concerns, message us before leaving the garage.

🅿️ Parking Info
No need to pay for parking — Turo covers the fee.

Please leave the garage through the CASH ticket box. This will ensure that you are not paying for parking. If any issues arise, please inform the attendant that it is a Turo rental.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-appt-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off to the Airport:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
Return to the International Parking Garage at Honolulu Airport.

From the Arrival Level, stay in the left lane before Terminal 1 and look for the "International" sign after the Lei Stand.

‼️‼️‼️VERY IMPORTANT ‼️‼️‼️

***When you turn left to enter the garage please enter through the LEFT ticket arm with the signage labeled International***

🚨DO NOT🚨 go to the right arm entrance🚫 (that's for Terminal 1).

***If you go through the terminal 1 entrance FEES WILL be incurred and a reimbursement requested to you***

The ticket arm will scan the license plate and should open automatically. No ticket needed

We highly recommend viewing the instructional video on YouTube to help make the vehicles return a breeze: https://youtu.be/Sm2zpl12iXA?si=Ik61NXL3YEbZDZ1B

Park on the 7th floor near the elevators. If that's not available then anywhere on the 7th and 8th floor.

Keys: please leave the key in the lock box on the drivers side window as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-appt-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
      {
        id: 'home',
        label: 'Home (Kaneohe)',
        icon: '🏠',
        messages: [
          {
            id: '22son-home-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly:
Please complete the License Verification Process at least 24 hours before your trip.

🚘 On Arrival:
The car will be parked at 45-315 Lilipuna Rd. Kaneohe 96744.

On the day of your trip, we'll send you Lockbox information and placement.

💡 Please be careful exiting and entering the parking garage.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear (cooler, chairs, sand toys)
• Booster seat

⛽️ Fuel Info:
The Sonata is a gas-electric hybrid, so you'll enjoy excellent mileage throughout your trip. Please return the car with the same fuel level as when you received it.

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-home-pickup',
            title: 'Pickup Day',
            content: `Aloha and welcome to Honolulu! 🌺

Your Turo rental is ready for pickup located at 45-315 Lilipuna Rd. Kaneohe 96744. Please follow the steps below to find your vehicle:

The car is located in the parking garage closest to the road. It is parked in stall 19.

Key: In a lockbox attached to the driver's side window

→ Code for the lock box is: 0219

📸 Please take clear photos of the car from all angles before driving off. If you notice any damage or concerns, message us before leaving the garage.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🌴
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-home-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
45-315 Lilipuna Rd. Stall 19

Keys: leave the key in the lockbox as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '22son-home-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
    ],
  },
  {
    id: '2026-model-y',
    label: '2026 Model Y',
    icon: '🚗',
    color: 'teal',
    plate: '02791',
    colorName: 'White',
    type: 'electric',
    locations: [
      {
        id: 'airport',
        label: 'Airport (HNL)',
        icon: '✈️',
        messages: [
          {
            id: '26my-appt-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly please complete the License Verification Process. (24+ Hours Before)

🚘 On Arrival:
On the day of your trip, once the car is dropped off at the airport, we'll send you:
1. The exact location
2. Lock box code

💡 There will be no parking ticket, the ticket arm will scan the license plate. Do not pay when exiting the garage — the parking fee is already covered. Please exit through the cash lane(s) upon exit and show reservation to gate attendant for exit if the gate does not automatically open

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear to include cooler, chairs and sand toys
• Car seat

⚡️ Charging
Please keep the battery charge level between 20% and 80% during your trip.

If you are using a Non-Tesla brand charger you can find the charging adapters are in a tray under the drivers side seat.

Check with your hotel they may have complimentary charging.

"Supercharging" (tesla brand fast chargers) costs will be billed to the Tesla account. Reimbursement requests will be sent through the Turo app after your trip ends.

Below is a list of Tesla Supercharger locations on Oahu for your convenience. Feel free to reach out with any questions about charging or using the vehicle!

Tesla Supercharger Locations on Oahu:
• Aiea, HI - Moanalua Road (Pearlridge Center)
• Honolulu, HI - Kahala Avenue (Kahala Hotel & Resort)
• Kaneohe, HI: Bay View Golf Course

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-appt-pickup',
            title: 'Pickup Day',
            content: `Aloha & Welcome to Oahu! 🌺

Your Turo rental is ready for pickup at Daniel K. Inouye International Airport (HNL).

🚘 Vehicle Info & Pickup
• Car: White 2026 Tesla Model Y (Juniper)
• License Plate: 02791
• Location: Level 7, Row F
• Key: In a lockbox attached to the driver's side window
→ Code is sent in the parking instructions!

📸 Please take clear photos of the car from all angles before driving off.
If you notice any damage or concerns, message us before leaving the garage.

🅿️ Parking Info
No need to pay for parking — Turo covers the fee.

Please leave the garage through the CASH ticket box. This will ensure that you are not paying for parking. If any issues arise, please inform the attendant that it is a Turo rental.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-appt-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off to the Airport:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
Return to the International Parking Garage at Honolulu Airport.

From the Arrival Level, stay in the left lane before Terminal 1 and look for the "International" sign after the Lei Stand.

‼️‼️‼️VERY IMPORTANT ‼️‼️‼️

***When you turn left to enter the garage please enter through the LEFT ticket arm with the signage labeled International***

🚨DO NOT🚨 go to the right arm entrance🚫 (that's for Terminal 1).

***If you go through the terminal 1 entrance FEES WILL be incurred and a reimbursement requested to you***

The ticket arm will scan the license plate and should open automatically. No ticket needed

We highly recommend viewing the instructional video on YouTube to help make the vehicles return a breeze: https://youtu.be/Sm2zpl12iXA?si=Ik61NXL3YEbZDZ1B

Park preferably in the EV stalls on the 7th floor near the elevators. If that's not available then anywhere on the 7th and 8th floor.

Keys: please leave the key in the lock box on the drivers side window as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-appt-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
      {
        id: 'home',
        label: 'Home (Kaneohe)',
        icon: '🏠',
        messages: [
          {
            id: '26my-home-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly please complete the License Verification Process. (24+ Hours Before)

🚘 On Arrival:
The car will be parked at 45-315 Lilipuna Rd. Kaneohe 96744.

On the day of your trip, we'll send you Lockbox information and placement.

💡 Please be careful exiting and entering the parking garage.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear to include cooler, chairs and sand toys
• Car seat

⚡️ Charging
Please keep the battery charge level between 20% and 80% during your trip.

If you are using a Non-Tesla brand charger you can find the charging adapters are in a tray under the drivers side seat.

Check with your hotel they may have complimentary charging.

"Supercharging" (tesla brand fast chargers) costs will be billed to the Tesla account. Reimbursement requests will be sent through the Turo app after your trip ends.

Below is a list of Tesla Supercharger locations on Oahu for your convenience. Feel free to reach out with any questions about charging or using the vehicle!

Tesla Supercharger Locations on Oahu:
• Aiea, HI - Moanalua Road (Pearlridge Center)
• Honolulu, HI - Kahala Avenue (Kahala Hotel & Resort)
• Kaneohe, HI: Bay View Golf Course

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-home-pickup',
            title: 'Pickup Day',
            content: `Aloha and welcome to Honolulu! 🌺

Your Turo rental is ready for pickup located at 45-315 Lilipuna Rd. Kaneohe 96744. Please follow the steps below to find your vehicle:

The car is located in the parking garage closest to the road. It is parked in stall 19.

Key: In a lockbox attached to the driver's side window

→ Code for the lock box is: 0219

📸 Please take clear photos of the car from all angles before driving off. If you notice any damage or concerns, message us before leaving the garage.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🌴
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-home-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
45-315 Lilipuna Rd. Stall 19

Keys: leave the key in the lockbox as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '26my-home-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
    ],
  },
  {
    id: '2024-kicks',
    label: '2024 Kicks',
    icon: '🚗',
    color: 'orange',
    plate: 'YBR 401',
    colorName: 'Silver',
    type: 'gas',
    locations: [
      {
        id: 'airport',
        label: 'Airport (HNL)',
        icon: '✈️',
        messages: [
          {
            id: '24kicks-appt-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly:
Please complete the License Verification Process at least 24 hours before your trip.

🚘 On Arrival:
On the day of your trip, once the car is dropped off at the airport, we'll send you:
1. The exact location
2. Lock box code

💡 Do not pay when exiting the garage — the parking fee is already covered through Turo. Please exit through the cash lane(s) and show your reservation to the gate attendant if the gate does not automatically open.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear (cooler, chairs, sand toys)
• Car seat

⛽️ Fuel Info:
The Kicks takes regular unleaded gas (87 octane), so you'll enjoy excellent mileage throughout your trip. Please return the car with the same fuel level as when you received it.

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-appt-pickup',
            title: 'Pickup Day',
            content: `Aloha & Welcome to Oahu! 🌺

Your Turo rental is ready for pickup at Daniel K. Inouye International Airport (HNL).

🚘 Vehicle Info & Pickup
• Car: Silver 2024 Nissan Kicks
• License Plate: YBR 401
• Location: Level 7, Row F
• Key: In a lockbox attached to the driver's side window
→ Code is sent in the parking instructions!

📸 Please take clear photos of the car from all angles before driving off.
If you notice any damage or concerns, message us before leaving the garage.

🅿️ Parking Info
No need to pay for parking — Turo covers the fee.

Please leave the garage through the CASH ticket box. This will ensure that you are not paying for parking. If any issues arise, please inform the attendant that it is a Turo rental.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-appt-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off to the Airport:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
Return to the International Parking Garage at Honolulu Airport.

From the Arrival Level, stay in the left lane before Terminal 1 and look for the "International" sign after the Lei Stand.

‼️‼️‼️VERY IMPORTANT ‼️‼️‼️

***When you turn left to enter the garage please enter through the LEFT ticket arm with the signage labeled International***

🚨DO NOT🚨 go to the right arm entrance🚫 (that's for Terminal 1).

***If you go through the terminal 1 entrance FEES WILL be incurred and a reimbursement requested to you***

The ticket arm will scan the license plate and should open automatically. No ticket needed

We highly recommend viewing the instructional video on YouTube to help make the vehicles return a breeze: https://youtu.be/Sm2zpl12iXA?si=Ik61NXL3YEbZDZ1B

Park on the 7th floor near the elevators. If that's not available then anywhere on the 7th and 8th floor.

Keys: please leave the key in the lock box on the drivers side window as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-appt-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
      {
        id: 'home',
        label: 'Home (Kaneohe)',
        icon: '🏠',
        messages: [
          {
            id: '24kicks-home-book',
            title: 'Booking Confirmed',
            content: `Aloha [Guest Name]!!

Exciting trip ahead — we're so glad you booked with us! 🌺

✅ To Check In Smoothly:
Please complete the License Verification Process at least 24 hours before your trip.

🚘 On Arrival:
The car will be parked at 45-315 Lilipuna Rd. Kaneohe 96744.

On the day of your trip, we'll send you Lockbox information and placement.

💡 Please be careful exiting and entering the parking garage.

🏖️ Beach Tips (Help Avoid Cleaning Fees):
• Brush off sand before getting into the car
• Sit on a towel if your clothes are wet — saltwater can stain the seats

🎒 Extras Available:
Check the app for add-ons like:
• Beach gear (cooler, chairs, sand toys)
• Booster seat

⛽️ Fuel Info:
The Kicks takes regular unleaded gas (87 octane), so you'll enjoy excellent mileage throughout your trip. Please return the car with the same fuel level as when you received it.

Thank you again for choosing our vehicle for your island adventure. We're here if you need anything!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-home-pickup',
            title: 'Pickup Day',
            content: `Aloha and welcome to Honolulu! 🌺

Your Turo rental is ready for pickup located at 45-315 Lilipuna Rd. Kaneohe 96744. Please follow the steps below to find your vehicle:

The car is located in the parking garage closest to the road. It is parked in stall 19.

Key: In a lockbox attached to the driver's side window

→ Code for the lock box is: 0219

📸 Please take clear photos of the car from all angles before driving off. If you notice any damage or concerns, message us before leaving the garage.

Thank you for choosing our vehicle for your island adventure! Feel free to message us if you need help at any point.

Mahalo 🌴
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-home-checkout',
            title: 'Checkout Instructions',
            content: `Aloha 🌺

Please carefully review instructions below for drop off:

Fuel: Return the car with the same fuel level as when you picked it up.

Cleanliness: Remove any excessive sand, dirt, or trash

Belongings: Double-check for personal items before leaving the vehicle.

Drop-off Location:
45-315 Lilipuna Rd. Stall 19

Keys: leave the key in the lockbox as you found it.

If you have any questions or need assistance, feel free to call 📞 or message 💬 me

Thanks for choosing us for your trip — we hope to host you again!

Mahalo 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
          {
            id: '24kicks-home-posttrip',
            title: 'Post-Trip Review',
            content: `Mahalo [Guest Name],

We hope you had an incredible time exploring with our vehicle during your trip! We strive to provide the best possible experience for our renters, and your feedback means a lot to us.

If you could take a moment to leave a detailed 5-star review about your rental experience, it would be greatly appreciated. Sharing your thoughts can help future renters understand what to expect when they choose our car for their adventures.

Thank you for choosing our car, I'll be sure to send over a discount for your next trip. We hope to welcome you back for another adventure in the future!

Aloha 🤙🏽
Taylor & Madi
Turo Hosts`,
          },
        ],
      },
    ],
  },
];

// Helper functions
export const getVehicleById = (id) => vehicles.find((v) => v.id === id);
export const getLocationById = (vehicleId, locationId) => {
  const vehicle = getVehicleById(vehicleId);
  return vehicle?.locations.find((l) => l.id === locationId);
};
