const { HTTP } = require('http-call');
const DomParser = require('dom-parser');
var decode = require('unescape');

export default async function parseRecipe(req, res) {
  const maybeUrl = req.query.url;
  try {
    const parser = new DomParser();

    const { body: html } = await HTTP.get(maybeUrl);
    const dom = parser.parseFromString(html);

    const metaTags = dom.getElementsByTagName('meta');
    const ogTitle = metaTags.find((tag) => tag.getAttribute('property') == 'og:title');
    const ogImage = metaTags.find((tag) => tag.getAttribute('property') == 'og:image');

    res.status(200).json({
      title: decode(ogTitle.getAttribute('content')),
      imageUrl: ogImage.getAttribute('content'),
    });
  } catch (err) {
    console.error('unable to parse ' + maybeUrl, err);
    res.status(422).json({});
  }
}
