import { IVideoFinder } from '@/memberships/interfaces/video-finder'
import { videos } from '@/memberships/videos-data'

export class StandardVideoFinder implements IVideoFinder {
  private readonly videos: Array<{
    id: number
    title: string
  }> = videos

  all(): Array<{}> {
    return this.videos.filter((video) => video.id % 2 === 0)
  }
}
