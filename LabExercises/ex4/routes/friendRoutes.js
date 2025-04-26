const express = require("express");
const router = express.Router();
const friends = require('../models/friends');

// 1. Filter endpoint: support filtering by starting 'letter'
router.get('/filter', (req, res) => {
    console.log(req.query)
    let { gender, letter } = req.query;
    let matchingFriends = [...friends];

    if (gender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender.toLowerCase() === gender.toLowerCase());
    }

    if (letter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(letter));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching the given filters." });
    }
});

// 2. Info route: Only return user-agent, content-type, accept headers
router.get('/info', (req, res) => {
    const headersInfo = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        'accept': req.headers['accept'],
    };
    res.json(headersInfo);
});

// 3. Dynamic GET route: Find friend by id
router.get('/:id', (req, res) => {
    console.log(req.params);
    let friendId = parseInt(req.params.id); // convert to number
    const friend = friends.find(f => f.id === friendId);

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({ error: "Friend not found with ID " + friendId });
    }
});

// POST route: Add new friend (already correctly written)
router.post('/', (req, res) => {
    let newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({ error: 'Friend object must contain a name and gender' });
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1;
    }

    friends.push(newFriend);
    res.status(200).json(newFriend);
});

// 4. PUT route: Update friend data by ID
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);
    let updatedFriend = req.body;

    const index = friends.findIndex(f => f.id === friendId);

    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedFriend };
        res.status(200).json(friends[index]);
    } else {
        res.status(404).json({ error: "Friend not found with ID " + friendId });
    }
});

// default endpoint: gets all friends
router.get('/', (req, res) => {
    res.json(friends);
});

module.exports = router;
