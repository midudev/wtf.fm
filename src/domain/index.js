import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'

import PodcastsUseCasesFactory from './podcasts/UseCases/factory'

const config = new Config()
const useCases = {
  list_podcasts_use_case: PodcastsUseCasesFactory.listPodcastsUseCase({config})
}

const Domain = EntryPointFactory({useCases})
const instance = new Domain({config})

export default instance
