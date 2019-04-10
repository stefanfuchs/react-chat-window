import monsterImgUrl from "./../assets/monster.png";
import { MessageInterface } from 'src/components/Messages';
import { MessageType } from '@stefancfuchs/chat-message-protocol';

const messageHistory: MessageInterface[] =
  [
    { type: MessageType.TEXT, author: "me", content: "Why don't they have salsa on the table?" },
    { type: MessageType.TEXT, author: "them", content: "What do you need salsa for?" },
    { type: MessageType.TEXT, author: "me", content: "Salsa is now the number one condiment in America." },
    { type: MessageType.TEXT, author: "them", content: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" },
    { type: MessageType.TEXT, author: "me", content: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'" },
    { type: MessageType.TEXT, author: "them", content: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!" },
    { type: MessageType.TEXT, author: "me", content: "See, this should be a show. This is the show. " },
    { type: MessageType.TEXT, author: "them", content: "What?" },
    { type: MessageType.TEXT, author: "me", content: "This. Just talking." },
    { type: MessageType.TEXT, author: "them", content: "Yeah, right." },
    { type: MessageType.TEXT, author: "me", content: "I'm really serious. I think that's a good idea. " },
    { type: MessageType.TEXT, author: "them", content: "Just talking? Well what's the show about?" },
    { type: MessageType.TEXT, author: "me", content: "It's about nothing." },
    { type: MessageType.TEXT, author: "them", content: "No story?" },
    { type: MessageType.TEXT, author: "me", content: "No forget the story. " },
    { type: MessageType.TEXT, author: "them", content: "You've got to have a story." },

  ]

export default messageHistory