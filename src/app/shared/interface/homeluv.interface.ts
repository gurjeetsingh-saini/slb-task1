export interface ISearchResultModel {
  contentType : number
  contentId: number
  imageInfo : IImageResponseModel

  homeInfo : IHomeInfoModel
}


interface IImageResponseModel {
  altTag: string
  isLiked: boolean
  bookmarkDataId: number
  shortDesc : string | null

  shortTextId: number

  url : string | null

  title: string

  caption: string
  className: string
  type : any

  matchingScore: number
  id: number

  path: string
  category: string


}
interface IHomeInfoModel {
  homeId: number
  listingId: number
  commName: string

  commId: number

  planName: string

  isSpec: boolean

  isSaved: boolean
  bookmarkDataId: number
  beds : number

  baths: number

  garage: number

  st: number

  address: string

  area: number

  price: number

  city: string
  zip: string

  state: string
  marketName: string

  marketId: number

  imageCount: number
  brand: Object

}

export interface IHomeLuvResponseModel {
  searchResultModels : [ISearchResultModel]
}
