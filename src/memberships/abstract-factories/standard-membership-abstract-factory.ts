import { IMembershipAbstractFactory } from '../interfaces/membership-abstract-factory'
import { IVideoFinder } from '../interfaces/video-finder'
import { StandardVideoFinderFactory } from '../factories/video-finders/standard-video-finder-factory'
import { StandardBadgeFactory } from '../factories/badges/standard-badge-factory'
import { IBadge } from '../interfaces/badge'

export class StandardMembershipAbstractFactory
implements IMembershipAbstractFactory {
  private readonly videoFinderFactory: StandardVideoFinderFactory
  private readonly badgeFactory: StandardBadgeFactory

  constructor() {
    this.videoFinderFactory = new StandardVideoFinderFactory()
    this.badgeFactory = new StandardBadgeFactory()
  }

  createVideoFinder(): IVideoFinder {
    return this.videoFinderFactory.createVideoFinder()
  }

  createBadge(): IBadge {
    return this.badgeFactory.createBadge()
  }
}
