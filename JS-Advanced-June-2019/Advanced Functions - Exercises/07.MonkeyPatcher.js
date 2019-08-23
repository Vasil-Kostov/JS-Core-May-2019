function solve(inputObj) {
    switch (inputObj) {
        case "upvote":
            this.upvotes++;
            break;
        case "downvote":
            this.downvotes++;
            break;
        case "score":
            return score(this);
    }

    function score(postObj) {
        let modifier = 0;

        if (postObj.upvotes + postObj.downvotes > 50) {
            modifier = Math.ceil(Math.max(postObj.upvotes, postObj.downvotes) * 0.25);
        }

        let score = postObj.upvotes - postObj.downvotes;

        let rating = "";
        
        if (postObj.upvotes + postObj.downvotes < 10) {
            rating = 'new';

        } else if (score < 0) {
            rating = 'unpopular';

        } else if (postObj.upvotes / (postObj.upvotes + postObj.downvotes) > 0.66) {
            rating = 'hot';

        } else if (postObj.upvotes > 100 || postObj.downvotes > 100) {
            rating = 'controversial';

        } else {
            rating = 'new';
        }

        return [postObj.upvotes + modifier,
            postObj.downvotes + modifier,
            score,
            rating];

    }
}
