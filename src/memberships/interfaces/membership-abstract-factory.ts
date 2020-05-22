import { IBadge } from './badge'
import { IVideoFinder } from './video-finder'

export interface IMembershipAbstractFactory {
  createVideoFinder(): IVideoFinder
  createBadge(): IBadge
}
