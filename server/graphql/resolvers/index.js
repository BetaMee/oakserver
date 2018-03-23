import articleResolverMap from './articleResolverMap'
import archiveResolverMap from './archiveResolverMap'
import authorResolverMap from './authorResolverMap'
import queryResolverMap from './queryResolverMap'
import mutationResolverMap from './mutationResolverMap'

export default Object.assign(
  queryResolverMap,
  mutationResolverMap,
  articleResolverMap,
  archiveResolverMap,
  authorResolverMap
)
