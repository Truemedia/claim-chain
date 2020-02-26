class Claim
{
    constructor(photos = [], weight = null)
    {
       this.photos = photos
       this.weight = weight
    }

    get scores()
    {
        let {aScore, iScore} = this
        return {aScore, iScore}
    }

    // Authenticity
    get aScore()
    {
        return this.photos.length
    }

    // Integrity
    get iScore()
    {
        return this.weight > 0 ? 1 : 0
    }
}

module.exports = Claim