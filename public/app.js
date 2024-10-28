const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const forumPosts = [
    {
        "id": 1,
        "author_id": 1,
        "title": "Let's see this awesome post!",
        "body": "I'm really glad to see this forums popular!",
        "image_url": "https://picsum.photos/id/1/320/240",
        "created_at": "2020-05-08T17:01:15Z"
    },
    {
        "id": 2,
        "author_id": 5,
        "title": "One Does Not Simply Walk into Mordor",
        "body": "After day, don't sixth were divide creepeth living him it heaven...",
        "image_url": "https://picsum.photos/id/2/320/240",
        "created_at": "2020-04-15T06:33:29Z"
    },
    {
        "id": 3,
        "author_id": 1,
        "title": "Don't mess with me",
        "body": "Forth great fruit above, evening greater without great their winged...",
        "image_url": "https://picsum.photos/id/3/320/240",
        "created_at": "2020-04-01T22:31:15Z"
    },
    {
        "id": 4,
        "author_id": 2,
        "title": "Grandpa plays GTA",
        "body": "Evening the may herb tree years of one void give green herb...",
        "image_url": "https://picsum.photos/id/4/320/240",
        "created_at": "2020-03-29T11:09:08Z"
    },
    {
        "id": 5,
        "author_id": 3,
        "title": "How To Take A Good Selfies",
        "body": "Appear signs heaven have us form fish gathering beast fish...",
        "image_url": "https://picsum.photos/id/5/320/240",
        "created_at": "2020-03-29T09:09:09Z"
    },
    {
        "id": 6,
        "author_id": 5,
        "title": "The Eye of Sauron came to Nashville",
        "body": "Whales replenish greater Light thing after. After. Years...",
        "image_url": "https://picsum.photos/id/6/320/240",
        "created_at": "2020-02-19T12:12:12Z"
    },
    {
        "id": 7,
        "author_id": 4,
        "title": "Next level inception!",
        "body": "Meat fruit isn't man light Won't from second, third...",
        "image_url": "https://picsum.photos/id/7/320/240",
        "created_at": "2019-09-02T02:03:04Z"
    },
    {
        "id": 8,
        "author_id": 2,
        "title": "So, do you play any instruments?",
        "body": "Yielding great so also unto form earth. Them were fly...",
        "image_url": "https://picsum.photos/id/8/320/240",
        "created_at": "2019-07-25T11:22:33Z"
    },
    {
        "id": 9,
        "author_id": 6,
        "title": "Nomal Moon v. Supermoon",
        "body": "Fruit blessed unto be subdue itself man shall his of...",
        "image_url": "https://picsum.photos/id/9/320/240",
        "created_at": "2019-07-11T22:22:33Z"
    },
    {
        "id": 10,
        "author_id": 3,
        "title": "Sign eats guy on the street",
        "body": "Fourth don't blessed darkness sixth fruit fruit lesser...",
        "image_url": "https://picsum.photos/id/10/320/240",
        "created_at": "2019-03-15T03:04:05Z"
    }

];


app.get('/api/posts', (req, res) => {
    res.json(forumPosts);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});