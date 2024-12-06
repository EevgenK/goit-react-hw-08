import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectCurrentItem = (state) => state.contacts.currentItem;

export const selectFilteredSortedContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, search) => {
    // let items = contacts.toSorted((a, b) =>
    //   a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    // );
    // items = !search
    //   ? items
    //   : items.filter(({ name, number }) => {
    //       return name.toLowerCase().includes(search) || number.includes(search);
    //     });
    // return items;
    let items = [...contacts].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    items = !search
      ? items
      : items.filter(({ name, number }) => {
          return name.toLowerCase().includes(search) || number.includes(search);
        });
    return items;
  }
);
