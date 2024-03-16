type DefaultThemes = 'dark' | 'light'
type Discovery = Array<string>

type Foot = {
  title: string
  urls: Array<{ label: string, url: string }>
}
type Footer = Array<Foot>

export type Info = { title?: string, description: string }
type Information = {
  homePage: Array<Info>
  policies: Array<Info>
}

type ReasonToStay = {
  title: string
  description: string
}

type Review = {
  stars: number
  quote: string
  name: string
  summary: string
}
type Reviews = {
  title?: string,
  description?: string
  reviews?: Array<Review>
}

type SocialMedia = {
  facebook: string
  instagram: string
  tripadvisor: string
}

export interface Configuration {
  colorMode: DefaultThemes

  discovery: Discovery

  footer: Footer

  information: Information

  reasonsToStay: Array<ReasonToStay>

  reviews?: Reviews

  socialMedia: SocialMedia
}