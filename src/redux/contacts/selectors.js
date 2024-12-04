import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectCurrentItem = (state) => state.contacts.currentItem;
export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, search) => {
    const items = !search
      ? contacts
      : contacts.filter(({ name, number }) => {
          return name.toLowerCase().includes(search) || number.includes(search);
        });

    return items.length > 0
      ? items.toSorted((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
      : items;
  }
);
