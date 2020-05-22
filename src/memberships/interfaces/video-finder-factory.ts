import { IVideoFinder } from './video-finder'

export interface IVideoFinderFactory {
  createVideoFinder(): IVideoFinder
}
