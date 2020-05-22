import { IVideoFinder } from '@/memberships/interfaces/video-finder'
import { videos } from '@/memberships/videos-data'

export class PremiumVideoFinder implements IVideoFinder {
  private readonly videos: Array<{}> = videos

  all(): Array<{}> {
    return this.videos
  }
}
