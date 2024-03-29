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
        title: '',
        description: content.POLICIES_PAGE.General_Policies,
      },
      {
        title: content.POLICIES_PAGE.Racing_Season_Title,
        description: content.POLICIES_PAGE.Racing_Season_Description,
      },
      {
        title: content.POLICIES_PAGE.Special_Event_Title,
        description: content.POLICIES_PAGE.Special_Event_Description,
      },
      {
        title: content.POLICIES_PAGE.Seasonal_Title,
        description: content.POLICIES_PAGE.Seasonal_Description,
      },
      {
        title: content.POLICIES_PAGE.Winter_Title,
        description: content.POLICIES_PAGE.Winter_Description,
      },
      {
        title: content.POLICIES_PAGE.Event_Cancellation_Title,
        description: content.POLICIES_PAGE.Event_Cancellation_Description,
      },
      {
        title: content.POLICIES_PAGE.Room_Key_Title,
        description: content.POLICIES_PAGE.Room_Key_Description,
      },
      {
        title: content.POLICIES_PAGE.Smoking_Title,
        description: content.POLICIES_PAGE.Smoking_Description,
      },
      {
        title: content.POLICIES_PAGE.Pet_Title,
        description: content.POLICIES_PAGE.Pet_Description,
      },
      {
        title: content.POLICIES_PAGE.Child_Title,
        description: content.POLICIES_PAGE.Child_Description,
      },
      {
        title: content.POLICIES_PAGE.Rescheduling_Title,
        description: content.POLICIES_PAGE.Rescheduling_Description,
      },
      {
        title: content.POLICIES_PAGE.Gift_Certificate_Title,
        description: content.POLICIES_PAGE.Gift_Certificate_Description,
      },
    ],
  },

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