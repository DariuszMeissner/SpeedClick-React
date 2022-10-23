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
    borderRadius: '10px',
    paddingTop: '8px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: '60px',
    marginBottom: '0'
  },
  hint: {
    marginBottom: '0',
    fontSize: '12px'
  },
  colors: {
    green: 'rgb(31 90 39)',
    blue: 'rgb(23 37 102)',
    gray: 'rgb(79 79 79)'
  }
} as const

export default PAGE_CONFIG
