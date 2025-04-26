// controllers/friendsController.js
import friends from '../models/friends.js';

// Get all friends
export const getAllFriends = (req, res) => {
  res.json(friends);
};

// Filter friends
export const filterFriends = (req, res) => {
  const { gender, letter } = req.query;
  let matchingFriends = [...friends];

  if (gender) {
    matchingFriends = matchingFriends.filter(friend => friend.gender === gender);
  }

  if (letter) {
    matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(letter));
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: 'No friends found with given filters' });
  }
};

// Info from headers
export const getInfo = (req, res) => {
  const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;
  res.json({ userAgent, contentType, accept });
};

// Get friend by ID
export const getFriendById = (req, res) => {
  const id = parseInt(req.params.id);
  const friend = friends.find(f => f.id === id);

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: 'Friend not found' });
  }
};

// Add new friend
export const addFriend = (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    res.status(400).json({ error: 'Name and gender are required' });
    return;
  }

  newFriend.id = friends.length + 1;
  friends.push(newFriend);
  res.status(201).json(newFriend);
};

// Update existing friend
export const updateFriend = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const index = friends.findIndex(f => f.id === id);

  if (index !== -1) {
    friends[index] = { ...friends[index], ...updatedData };
    res.json(friends[index]);
  } else {
    res.status(404).json({ error: 'Friend not found' });
  }
};
