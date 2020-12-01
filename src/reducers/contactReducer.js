export default function (state, action) {
  console.log('ENTERING SWITCH');
  switch (action.type) {
    case 'ADD':
      return [...state, action.contact];
    default:
      return state;
  }
}
