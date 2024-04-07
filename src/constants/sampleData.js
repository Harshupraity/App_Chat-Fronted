export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },

    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Ram",
    },

    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "It's a Message",
    _id: "akdjfaksfdj",
    sender: {
      _id: "user._id",
      name: "Chamanji",
    },
    chat: "chatId",
    createdAt: "2024-04-12T10:41:30.630z",
  },
  {
    attachments: [
      {
        public_id: "adf",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "akdjfaksfdfdfdffdfdj",
    sender: {
      _id: "dsfkadfskd",
      name: "Chamanjiadf",
    },
    chat: "chatId",
    createdAt: "2024-04-12T10:41:30.630z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],
  chats: [
    {
      name: "John dev",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "John dev1",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "It's a Message",
      _id: "akdjfaksfdj",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chamanji",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-04-12T10:41:30.630z",
    },
    {
      attachments: [
        {
            public_id:"asdasad 2",
            url:"https://www.w3schools.com/howto/img_avatar.png"
        }
      ],
      content: "It's a Message",
      _id: "akdjfaksdssfdj",
      sender: {
        avatar:"https://www.w3schools.com/howto/img_avatar.png",
        name: "Chasdsmanji",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-04-12T10:41:30.630z",
    },
  ],
};
