import { Children } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { AppRegistry } from 'react-native'
import config from '../app.json'
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps(
    {renderPage}: DocumentContext
  ): Promise<DocumentInitialProps> {

    AppRegistry.registerComponent(config.name, () => Main)
    // @ts-ignore - React Native Web doesn't  support typescript https://github.com/necolas/react-native-web/issues/832#issuecomment-772737720
    const { getStyleElement } = AppRegistry.getApplication(config.name)
    const page = await renderPage()
    const styles = [
      <style key="0" dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ]
    return { ...page, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
