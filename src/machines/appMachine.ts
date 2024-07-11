import { CategoryType } from "@utils/typeUtils";
import { createActorContext } from "@xstate/react";
import { assertEvent, assign, setup } from "xstate";

export interface AppMachineContext {
  desserts: CategoryType;
  openModal: boolean;
}

export type AppMachineEvents =
  | { type: "SET_DESIERTS"; value: CategoryType }
  | { type: "OPEN_MODAL"; value: boolean };

export const appMachine = setup({
  types: { context: {} as AppMachineContext, events: {} as AppMachineEvents },
  actions: {
    setDeserts: assign(({ event }) => {
      assertEvent(event, "SET_DESIERTS");

      return { desserts: event.value };
    }),
    openModal: assign(({ event }) => {
      assertEvent(event, "OPEN_MODAL");

      return { openModal: event.value };
    }),
  },
}).createMachine({
  id: "appMachine",
  context: {
    desserts: {},
    openModal: false,
  },
  on: {
    SET_DESIERTS: {
      actions: "setDeserts",
    },
    OPEN_MODAL: {
      actions: "openModal",
    },
  },
});

export const AppContext = createActorContext(appMachine);
