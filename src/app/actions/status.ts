function statusUpdate (payload) {
  return {
    type: 'STATUS_UPDATE',
    payload
  }
}

export { statusUpdate }
