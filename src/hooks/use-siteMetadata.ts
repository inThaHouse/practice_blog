import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataType } from '../models/SiteMetadata'

const useSiteMetadata = (): SiteMetadataType => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
