import db from '../../data/data'

export default function handler(req, res) {
    let one = db.filter((x) => x.id == req.query.id)[0]
    res.status(200).json(one)
}