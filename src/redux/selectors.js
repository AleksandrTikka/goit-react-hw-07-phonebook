export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizeFilter = filter && filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
