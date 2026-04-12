export const categories = [
  {
    id: 'booking-confirmed',
    label: 'Booking Confirmed',
    icon: '✅',
    color: 'green',
    description: 'Send right after a booking is approved',
    messages: [
      {
        id: 'bc-1',
        title: 'Welcome & Confirmation',
        content: `Hi [Guest Name]! 🤙 Welcome to Tropical Transports — we're Taylor & Madi, your Turo hosts here in Hawaii!

Your booking is confirmed and we're so excited to have you. We want to make sure your trip is smooth from start to finish.

A few things to know:
• You'll receive pickup details 24 hours before your trip
• Please have your driver's license ready at pickup
• Our car is clean, fueled up, and ready for your adventure

Feel free to message us anytime if you have questions. Aloha! 🌺`,
      },
      {
        id: 'bc-2',
        title: 'What to Bring at Pickup',
        content: `Hi [Guest Name]! Just a quick note ahead of your trip — here's what you'll need at pickup:

📋 **Required:**
• Valid driver's license (must match Turo account)
• The card used to book (may be asked to verify)

📱 **Helpful to have:**
• Turo app open and ready
• Our contact number saved: [Your Number]

If anything comes up before pickup day, don't hesitate to reach out. We're here to help! See you soon 🤙`,
      },
      {
        id: 'bc-3',
        title: 'Pre-Trip Checklist',
        content: `Aloha [Guest Name]! We want to set you up for a perfect trip. Here's a quick pre-trip checklist:

✅ Turo account verified
✅ Driver's license ready
✅ Review our car's features in the listing photos
✅ Check the trip start time & pickup location
✅ Save our number for day-of questions

Any questions at all — message us here on Turo. We respond fast! 🌺`,
      },
    ],
  },
  {
    id: 'pickup-day',
    label: 'Pickup Day',
    icon: '🗝️',
    color: 'blue',
    description: 'Send on the morning of pickup',
    messages: [
      {
        id: 'pd-1',
        title: 'Pickup Day Morning Reminder',
        content: `Good morning [Guest Name]! 🌅 Today's the day — your Tropical Transports adventure starts!

Here's your pickup summary:
📍 Location: [Pickup Address]
🕐 Time: [Pickup Time]
🚗 Vehicle: [Car Make/Model] — [Color]

I'll be there to meet you or the keys will be in [lockbox/glove box] — I'll send exact details shortly.

Text or message me if you're running early/late. See you soon! 🤙`,
      },
      {
        id: 'pd-2',
        title: 'Key & Car Location Details',
        content: `Hey [Guest Name]! Here are your exact pickup details:

🚗 **Your Car:**
[Car Make, Model, Color] — License plate: [PLATE]

📍 **Where to find it:**
[Exact parking location / address]

🔑 **Keys:**
[Option A] I'll hand them to you directly
[Option B] Keys are in the lockbox — code is [CODE]

📸 Please take the Turo pre-trip photos before driving off (this protects both of us!).

Any trouble finding it, call or text me: [Your Number]. Aloha! 🌺`,
      },
      {
        id: 'pd-3',
        title: 'Quick Car Walkthrough',
        content: `Hi [Guest Name]! A few quick tips for the car:

⛽ Gas: [Full / X/4 tank] — please return at the same level
🅿️ Parking: Any standard spot works, no oversized/commercial lots
🚗 Features: [Backup cam / Bluetooth / USB ports]
🛞 If you get a flat: Spare is in the trunk, or call Turo roadside: 1-415-965-4525

Take a quick walk-around video before leaving — it's the best way to document the car's condition.

Have an amazing time exploring Hawaii! 🌺🤙`,
      },
    ],
  },
  {
    id: 'checkout',
    label: 'Checkout',
    icon: '🏁',
    color: 'orange',
    description: 'Send before or at trip end',
    messages: [
      {
        id: 'co-1',
        title: 'Checkout Day Reminder',
        content: `Aloha [Guest Name]! 🌺 Just a reminder that your trip ends today at [Return Time].

**Return checklist:**
✅ Return the car to [Return Location]
✅ Fill gas to the level it was at pickup
✅ Remove all personal belongings
✅ Take post-trip photos in the Turo app
✅ Lock the car and leave keys [in lockbox / with me]

We've loved having you — hope Hawaii treated you well! 🤙`,
      },
      {
        id: 'co-2',
        title: 'Fuel Up Reminder',
        content: `Hey [Guest Name]! Quick reminder before you return the car:

⛽ Please fill up the tank to [same level as pickup / full] before returning.

Nearest gas stations to the return spot:
📍 [Station 1 name / cross streets]
📍 [Station 2 name / cross streets]

If it's easier, we also offer a prepaid fuel option — just let us know and we can add it for $[amount]. Otherwise no worries, just fill it up and we're good! 🤙`,
      },
      {
        id: 'co-3',
        title: 'Return Location & Instructions',
        content: `Hi [Guest Name]! Here are your return details:

📍 **Return Location:**
[Return Address]
[Parking instructions — e.g., "Pull into the driveway, spot on the right"]

🕐 **Return Time:** [Time]

🔑 **Keys:**
[Option A] Leave in the lockbox — code [CODE]
[Option B] Leave in the glove box and lock the car
[Option C] Hand off to me directly

📱 Don't forget to complete your post-trip photos in the Turo app before you leave — it only takes 2 minutes!

Thank you so much for choosing Tropical Transports! 🌺`,
      },
    ],
  },
  {
    id: 'post-trip',
    label: 'Post-Trip',
    icon: '⭐',
    color: 'purple',
    description: 'Send after the trip ends',
    messages: [
      {
        id: 'pt-1',
        title: 'Thank You & Review Request',
        content: `Aloha [Guest Name]! 🌺 Thank you SO much for choosing Tropical Transports — it was a pleasure hosting you!

We hope you had an amazing time exploring Hawaii. If everything went smoothly, we'd really appreciate a 5-star review on Turo — it means the world to us as hosts and helps other travelers find us!

We'll leave you a great review too. 😊

Safe travels and come back to Hawaii soon! 🤙
— Taylor & Madi`,
      },
      {
        id: 'pt-2',
        title: 'Issue Follow-Up',
        content: `Hi [Guest Name], thank you for returning the car!

We noticed [describe issue] and wanted to follow up about it. We always try to handle things fairly — can you share what happened?

We appreciate honest communication and want to resolve this smoothly for both of us. Please respond here or reach out through the Turo resolution center if needed.

Thanks for your understanding 🙏`,
      },
      {
        id: 'pt-3',
        title: 'Return Guest Discount',
        content: `Aloha [Guest Name]! 🌺 It was such a pleasure having you — we hope you had an incredible trip!

As a thank-you for being an awesome guest, here's a little aloha from us:

🎉 **Return Guest Perk:** Next time you book with us, message us and we'll hook you up with a discount or upgrade if available.

We'd love to host you again on your next Hawaii adventure. Safe travels and mahalo! 🤙
— Taylor & Madi, Tropical Transports`,
      },
    ],
  },
  {
    id: 'trip-changes',
    label: 'Trip Changes',
    icon: '🔄',
    color: 'teal',
    description: 'Use for modifications, extensions, and FAQs',
    messages: [
      {
        id: 'tc-1',
        title: 'Trip Extension Approved',
        content: `Hey [Guest Name]! No problem at all — I've approved your extension request! 🤙

**Updated trip details:**
📅 New end date/time: [New Date & Time]
📍 Return location stays the same: [Location]

Just a reminder to keep an eye on fuel and let me know if anything else changes. Enjoy the extra time in Hawaii! 🌺`,
      },
      {
        id: 'tc-2',
        title: 'Early Return Acknowledgment',
        content: `Hi [Guest Name], no worries about the early return — thanks for letting me know!

I'll head over to pick up the car at [time/location]. The Turo app should automatically process any applicable refund for the unused days.

If you have any issues with the refund calculation, reach out to Turo support directly and they'll sort it out. Hope you had a great time! 🌺`,
      },
      {
        id: 'tc-3',
        title: 'Location Change Confirmation',
        content: `Hi [Guest Name]! I've approved your location change request — you're all set! ✅

**Updated pickup/return location:**
📍 [New Location Name]
[Address or landmark details]

Let me know if you need directions or have any other questions. See you then! 🤙`,
      },
    ],
    faqs: [
      {
        id: 'faq-1',
        question: 'How do I change my pickup to HNL airport delivery?',
        answer: `Perfect! We can switch you to airport delivery. Here's how:

1. Open Turo app → Your Bookings → Select this trip
2. Tap "Edit Trip" → Choose "Change Location"
3. Search for HNL (Daniel K. Inouye International)
4. Select the designated airport lot
5. Review the airport delivery fee and submit

Once you send the change request, I'll approve it immediately and send you exact parking lot details + where the car keys will be.

**What I'll need from you:**
- Confirm your flight departure time (so I time drop-off right)
- Cell number for day-of coordination

We'll take care of the rest!`,
      },
    ],
  },
];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
