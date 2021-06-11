import { DialogPageType } from "./types";

let initialState = {
  dialogs: [
    { id: 1, name: "Pasha" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Alexej" },
    { id: 4, name: "Dima" },
    { id: 5, name: "Shizofreniya" },
    { id: 6, name: "freedom_Belarus" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u" },
    { id: 3, message: "What is ur name" },
    { id: 4, message: "Любишь пёсиков? =)" },
    { id: 5, message: "London is a capital of great Britain" },
    { id: 6, message: "Live Belarus!" },
  ],
};

export const dialogsPageReducer = (state: DialogPageType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      let body = action.newMessage;
      return {
        ...state,
        messages: [...state.messages, { id: state.messages.length + 1, message: body }],
      };
    }
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof sendMessageCreator>;

export const sendMessageCreator = (newMessage: string) => {
  return {
    type: "SEND_MESSAGE",
    newMessage,
  } as const;
};
