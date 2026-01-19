import routes from "../constants/routes"
import { Configuration } from "../types/configuration"

import content from "./content.json"

const CONFIGURATION: Configuration = {
  colorMode: 'light', // dark or light

  discovery: [
    content.HOME_PAGE.Discover_Congress_Park,
    content.HOME_PAGE.Discover_Race_Course,
    content.HOME_PAGE.Discover_Performing_Arts_Center,
    content.HOME_PAGE.Discover_Performing_Arts_Center,
    content.HOME_PAGE.Discover_Springs_City_Center,
    content.HOME_PAGE.Discover_Spa_State_Park,
    content.HOME_PAGE.Discover_Festivals_Events,
  ],

  footer: [
    {
      title: 'Terms',
      urls: [
        {
          label: 'Policies',
          url: routes.reservationPolicies
        }
      ]
    }
  ],

  information: {
    homePage: [
      {
        title: content.HOME_PAGE.Information_Title_Historic_Mansion,
        description: content.HOME_PAGE.Information_Description_Historic_Mansion,
      },
      {
        title: content.HOME_PAGE.Information_Title_Elegant_Rooms,
        description: content.HOME_PAGE.Information_Description_Elegant_Rooms,
      },
      {
        title: content.HOME_PAGE.Information_Title_Hospitality,
        description: content.HOME_PAGE.Information_Description_Hospitality,
      },
    ],

    policies: [
  {
    title: 'General Policies',
    description: 'The Brunswick Bed and Breakfast is an exclusive property where every guest reservation is both important and special to us. Guests who arrive after their intended arrival date or check out before their intended departure date are responsible for the days reserved in full. Check-in time: 4:00 PM - 7:00 PM. If arriving outside of check-in times, please call us to make arrangements. Check-out time: 11:00 AM. Checking out later than 12pm will be billed as an additional night stay for the current value of the room if no prior arrangements were made. Management reserves the right to charge the card on file for damages, losses, or costs incurred due to violation of house policies. Guests are responsible for any damage, loss, or excessive cleaning required. As part of our Earth Conscious Initiatives, your payment receipt is emailed to you unless you request a printed receipt.',
  },
  {
    title: 'Saratoga Racing Season',
    description: 'Racing Season dates run from July until usually the end of the first week in September. Payment for all reservations during the Saratoga Racing Season must be made in full beginning January 1st of the booking year. If booking a future year, the deposit will be the first night in full to hold your reservation, and then the remainder will be taken on January 1st. Cancellation Policy: All cancellations must be made in writing by email. A refund may be given ONLY if the room has been re-rented equal to the dates reserved. If re-rented, a refund check is mailed minus a $100 cancellation fee.',
  },
  {
    title: 'Special Event Weekends',
    description: 'At the time of booking, your credit card on file will be charged for the reservation in full. Special weekends include: Skidmore Graduation, Skidmore Parent Weekends, Memorial Day Weekend, 4th of July Weekend, New Year’s Eve, Dance Flurry Festival Weekend, Special Concert Weekends (Dave Matthews, Phish, etc.) and the entire Saratoga Racing Meet. Cancellation Policy: You may cancel this reservation in writing or e-mail. A refund is given ONLY if the room has been re-rented equal to the dates reserved. If re-rented, a refund check is mailed minus the $100 cancellation fee.',
  },
  {
    title: 'Spring, Summer, and Fall Season',
    description: 'Valid April 1 – July 2 and September 2 – November 31. Your credit card on file will be charged for the first night in full and the balance will be charged within seven (7) days prior to your arrival. Cancellation Policy: You may cancel this reservation in writing or e-mail within 7 days. All cancellations will be charged a $100 processing fee. For cancellations less than 7 days, the guest is responsible for the full value of the reservation unless re-rented. A refund is given ONLY if the room has been re-rented equal to the dates reserved.',
  },
  {
    title: 'Winter Season',
    description: 'Valid December 1 – March 31. Your credit card on file will be charged for the first night in full, and the balance will be charged within three (3) days prior to your arrival. Cancellation Policy: You may cancel this reservation in writing or e-mail within 24 hours. For cancellations less than 24 hours, the guest is responsible for the full value of the reservation unless re-rented. A refund is given ONLY if the room has been re-rented equal to the dates reserved minus the $100 cancellation fee.',
  },
  {
    title: 'Event Cancellations',
    description: 'All event fees are non-refundable.',
  },
  {
    title: 'Room Keys',
    description: 'Please be advised that keys not returned to the Innkeeper will incur a $100 charge.',
  },
  {
    title: 'Smoke Free',
    description: 'We are a Smoke-Free property. Absolutely no smoking is permitted inside, and a minimum charge of $500.00 will incur if smoking in your room is detected.',
  },
  {
    title: 'Children',
    description: 'Throughout the year, we welcome children twelve (12) years of age and older. During the winter season, we can make exceptions if arranged prior to the stay for younger children. If a reservation is made where a child under the age of twelve (12) is staying without prior arrangement, we reserve the right to cancel your reservation upon arrival.',
  },
  {
    title: 'Rescheduling Fees',
    description: 'If a guest chooses to reschedule, we reserve the right to charge up to a $30 rescheduling fee per 3-night stay.',
  },
  {
    title: 'Gift Certificate Policy',
    description: 'Gift certificates must be noted when making the reservation. No refunds will be made if the gift certificate is not entered at the time of booking. Gift certificates are not transferable and cannot be redeemed for cash. Any remaining amount can be used at a later date up to the expiration date.',
  },
  {
    title: 'Additional Fees',
    description: 'If a guest causes a disturbance toward other guests or staff, there will be a $100 added charge. For guests that leave biohazardous materials/fluids in the room, there will be a $250 charge for specialized cleaning.',
  },
],

  reasonsToStay: [
    {
      // Charm
      title: content.HOME_PAGE.Reasons_Subtitle_Charm,
      description: content.HOME_PAGE.Reasons_Description_Charm
    },
    {
      // Location
      title: content.HOME_PAGE.Reasons_Subtitle_Location,
      description: content.HOME_PAGE.Reasons_Description_Location,
    },
    {
      // Bedding
      title: content.HOME_PAGE.Reasons_Subtitle_Bedding,
      description: content.HOME_PAGE.Reasons_Description_Bedding,
    },
    {
      // Food
      title: content.HOME_PAGE.Reasons_Subtitle_Food,
      description: content.HOME_PAGE.Reasons_Description_Food,
    },
    {
      // Proximity
      title: content.HOME_PAGE.Reasons_Subtitle_Proximity,
      description: content.HOME_PAGE.Reasons_Description_Proximity,
    },
    {
      // Exploration
      title: content.HOME_PAGE.Reasons_Subtitle_Exploration,
      description: content.HOME_PAGE.Reasons_Description_Exploration,
    },
  ],

  reviews: {
    title: content.HOME_PAGE.Reviews_Title,
    description: content.HOME_PAGE.Reviews_Description,
    reviews: [
      {
        stars: 5,
        name: 'Resort228563',
        quote: content.HOME_PAGE.Reviews_Review1_Quote,
        summary: content.HOME_PAGE.Reviews_Review1_Summary,
      }
    ]
  },

  socialMedia: {
    // To Add: I'll have to do it initially. 
    // To Remove: leave link blank( facebook: "" )
    facebook: "",
    instagram: "https://www.instagram.com/thebrunswicksaratoga/",
    tripadvisor: "https://www.tripadvisor.com/Hotel_Review-g48562-d121722-Reviews-The_Brunswick_at_Saratoga-Saratoga_Springs_New_York.html",
  }
} as const

// Supported in content
// inline css stylin
// <b>[content]</b> = bold
// <a href=[link]>[content]</a> = link
// <br/> = line-break

export default CONFIGURATION
