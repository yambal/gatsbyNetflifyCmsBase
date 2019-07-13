import React from 'react'
import Img from 'gatsby-image'

interface iPreviewCompatibleImageProps {
  imageInfo?: any
}

const PreviewCompatibleImage:React.SFC<iPreviewCompatibleImageProps> = (props) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = props.imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
