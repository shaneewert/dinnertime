import request from 'request';
import DomParser from 'dom-parser';
import decode from 'unescape';

export default async function parseRecipe(req, res) {
  const maybeUrl = req.query.url;

  request(maybeUrl, (err, _res, body) => {
    if (err) {
      console.error('unable to parse ' + maybeUrl, err);
      res.status(422).send('');
      return;
    }

    const parser = new DomParser();
    const dom = parser.parseFromString(body);

    const metaTags = dom.getElementsByTagName('meta');
    const ogTitle = metaTags.find((tag) => tag.getAttribute('property') == 'og:title');
    const ogImage = metaTags.find((tag) => tag.getAttribute('property') == 'og:image');

    res.status(200).json({
      title: decode(ogTitle.getAttribute('content')),
      imageUrl: ogImage.getAttribute('content'),
    });
  });
}
