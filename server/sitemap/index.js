const pool = require('../db');

function handleRobotsRequest(req, res) {
    res.type('txt');
    res.send(`Sitemap: ${req.protocol}://${req.hostname}/sitemap.txt`)
}

function handleSitemapRequest(req, res) {
    res.type('txt');

    var query = {
        text: 'SELECT * FROM term WHERE EXISTS (SELECT * FROM entry WHERE entry.term=term.term AND action=2)',
        rowMode: 'array'
    };

    pool.connect((err, client, release) => {
        if (err) return console.error('Error acquiring client', err.stack);
        client.query(query, (err, result) => {
            release();
            if (err) {
                res.send("")
                return console.error('Error executing query', err.stack);
            }

            const terms = result.rows.map(term_array => {
                return term_array[0].toLowerCase()
            })

            const termsAsUrls = terms.map(term => {
                return `${req.protocol}://${req.hostname}/search/${term}`
            })

            res.send(termsAsUrls.join('\n'))
        })
    })

}

module.exports = (app) => {
    app.use('/robots.txt', handleRobotsRequest);
    app.use('/sitemap.txt', handleSitemapRequest)
}
