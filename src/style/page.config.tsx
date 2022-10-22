const PAGE_CONFIG = {
  wrap: {
    width: '100vw',
    height: '100vh',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  component: {
    minWidth: '200px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    background: 'black',
    boxShadow: 'rgba(74 74 74 / 35%) 0px 5px 15px',
    border: '1px solid gray',
    borderRadius: '10px',
    paddingTop: '8px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: '40px',
    marginBottom: '0'
  },
  hint: {
    fontSize: '12px'
  }
} as const

export default PAGE_CONFIG
