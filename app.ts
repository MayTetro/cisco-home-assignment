import express from 'express';
import snoowrap, {Submission} from 'snoowrap';
import {Post} from "./interfaces/post";
import * as Process from "process";

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
const articlesLimit:number = 10;
let distDir = __dirname + "/public/";
app.use(express.static(distDir));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/articles/:subredditName', (req, res) => {
    const subredditName = req.params.subredditName;
    console.log("Got request to get articles for the subreddit:" + subredditName);
    SubredditArticles(subredditName).then((subRedditArticles: Post[]) => {
        console.log(`Got ${subRedditArticles.length} articles for the requested subreddit`)
        res.send(subRedditArticles);
    }).catch((err: any) => {
        console.log(err);
        res.status(404).send([]);
    });
})

async function SubredditArticles(subredditName: string): Promise<Post[]> {
    let filteredTopPosts = [];
    try {
        const user = new snoowrap({
            userAgent: Process.env.USER_AGENT,
            clientId: Process.env.CLIENT_ID,
            clientSecret: Process.env.CLIENT_SECRET,
            refreshToken: Process.env.REFRESH_TOKEN
        });
        let subreddit = user.getSubreddit(subredditName);
        let topPosts = await subreddit.getTop({limit: articlesLimit});

        filteredTopPosts =  topPosts.map((post: Submission) => {
            return {title: post.title, author: post.author.name, score: post.score}
        });
        return filteredTopPosts;
    } catch (err) {
        throw new Error(`New error in app.SubredditArticles ${err}`);
    }

}
