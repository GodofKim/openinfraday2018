import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { fontFace } from 'polished'

export default () => injectGlobal`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    font-family: CoreGTD, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD1',
    fontWeight: 100,
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD3',
    fontWeight: 300,
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD5',
    fontWeight: 500,
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD9',
    fontWeight: 900,
    fileFormats: ['woff'],
  })}

`
