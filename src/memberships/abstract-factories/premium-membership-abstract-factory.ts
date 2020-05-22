import { IMembershipAbstractFactory } from '../interfaces/membership-abstract-factory'
import { IVideoFinder } from '../interfaces/video-finder'
import { PremiumVideoFinderFactory } from '../factories/video-finders/premium-video-finder-factory'
import { PremiumBadgeFactory } from '../factories/badges/premium-badge-factory'
import { IBadge } from '../interfaces/badge'

export class PremiumMembershipAbstractFactory
implements IMembershipAbstractFactory {
  private readonly videoFinderFactory: PremiumVideoFinderFactory
  private readonly badgeFactory: PremiumBadgeFactory

  constructor() {
    this.videoFinderFactory = new PremiumVideoFinderFactory()
    this.badgeFactory = new PremiumBadgeFactory()
  }

  createVideoFinder(): IVideoFinder {
    return this.videoFinderFactory.createVideoFinder()
  }

  createBadge(): IBadge {
    return this.badgeFactory.createBadge()
  }
}
