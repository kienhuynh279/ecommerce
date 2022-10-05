import { makeStyles } from '@mui/styles';

const sidebarStyle = makeStyles(() => ({
  root: {
    backgroundColor: 'var(--admin-white)',
    width: 'var(--admin-sidebar-width)',
    color: '#fff !important',
    transition: 'all ease 0.3s',
    zIndex: 1200,

    '& .admin-sidebar-brand': {
      '& img': {
        objectFit: 'cover',
        objectPosition: 'left top',
        transition: 'all ease 0.3s',
      },
    },
  },

  sidebar: {
    height: 'calc(100% - var(--admin-topbar-height) - 151px)',
  },

  panel: {
    overflow: 'hidden',
    // transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
    margin: '0',
  },

  navigation: {
    padding: '10px var(--admin-sidebar-padding)',

    '& .sidebar-icon-nav': {
      width: '20px',
      height: '20px',
      border: 'solid 1px var(--admin-primary)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      marginRight: '6px',

      '& span': {
        display: 'inline-block',
        width: '2px',
        height: '10px',
        backgroundColor: 'var(--admin-primary)',
        marginTop: '4px',
        position: 'relative',
        transition: 'all ease 0.3s',

        '&::before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: '10px',
          height: '2px',
          backgroundColor: 'var(--admin-primary)',
          top: '5px',
          left: '-5px',
          transform: 'translate(1px, -1px)',
          transition: 'all ease 0.3s',
        },
      },
    },

    '& .admin-sidebar-icon': {
      width: '30px',
      height: '30px',
      backgroundColor: 'transparent',
      marginRight: '8px',
      transition: 'all ease 0.3s',

      '& svg': {
        color: 'var(--admin-primary)',
        fontSize: '16px',
      },
    },

    '& .sidebar-non-icon': {
      fontSize: '7px',
      marginRight: '9px',
      marginLeft: '12px',
    },

    '& .admin-sidebar-item': {
      fontSize: '16px',
      height: '50px',
      maxWidth: '100%',
      marginBottom: '4px',
      textDecoration: 'none',
      color: 'var(--admin-primary)',

      '&.has-submenu': {
        marginBottom: '0',

        '& .sidebar-navbar-left': {
          width: 'calc(100% - 20px)',
        },
      },

      '&.open': {
        backgroundColor: 'var(--admin-primary)',
        borderRadius: '8px 8px 0 0',

        '&:hover': {
          borderRadius: '8px 8px 0 0',
        },

        '& > .flex > span': {
          color: 'var(--admin-white)',
          '& svg': {
            color: 'var(--admin-white)',
          },
        },

        '& > .item-arrow .sidebar-icon-nav span': {
          transform: 'rotate(-90deg)',
          backgroundColor: 'var(--admin-white)',
          '&::before': {
            opacity: 0,
          },
        },
      },

      '&:hover': {
        backgroundColor: 'var(--admin-primary)',
        color: 'var(--admin-white)',
        fontWeight: 500,
        borderRadius: '8px',
        textDecoration: 'none',

        '& .admin-sidebar-icon': {
          color: 'var(--admin-white)',
          '& svg': {
            color: 'var(--admin-white)',
            fontSize: '16px',
          },
        },
      },

      '&.active': {
        backgroundColor: 'var(--admin-primary)',
        color: 'var(--admin-white)',
        fontWeight: 500,
        borderRadius: '8px',
        textDecoration: 'none',

        '& .admin-sidebar-icon': {
          color: 'var(--admin-white)',
          '& svg': {
            color: 'var(--admin-white)',
            fontSize: '16px',
          },
        },
      },
    },

    '& .admin-sidebar-navbar-name': {
      textAlign: 'left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    '& .submenu': {
      backgroundColor: 'var(--admin-primary)',
      color: 'var(--admin-white) !important',
      borderRadius: '0 0 9px 9px',
      marginBottom: '4px',

      '& .admin-sidebar-item': {
        color: 'var(--admin-white)',

        '&:hover': {
          backgroundColor: 'var(--admin-white)',
          color: 'var(--admin-primary)',
        },
      },

      '& .submenu': {
        marginLeft: '0!important',
        color: 'var(--admin-white) !important',
      },
    },
  },
  '@global': {
    '.admin-sidebar-collapsed': {
      '& .admin-content-wrapper': {
        width: 'calc(100% - var(--admin-sidebar-collapsed-width))',
        marginLeft: 'var(--admin-sidebar-collapsed-width)',
      },

      '& .admin-topbar': {
        width: 'calc(100% - var(--admin-sidebar-collapsed-width))',
        left: 'var(--admin-sidebar-collapsed-width)',
      },

      '& .admin-sidebar-brand': {
        '& img': {
          width: '30px',
        },
      },

      '& .admin-sidebar-navbar-name': {
        display: 'none',
      },

      '& .admin-sidebar-icon': {
        marginRight: 0,
      },

      '& .admin-sidebar-branch': {
        height: 0,
        overflow: 'hidden',
      },

      '& .admin-sidebar-avatar': {
        width: '34px !important',
        height: '34px !important',
      },

      '& .admin-sidebar-user-info': {
        pointerEvents: 'none',

        '&>div': {
          height: 0,
          width: 0,
          overflow: 'hidden',
        },
      },

      '& .admin-sidebar-copyright': {
        display: 'none!important',
      },

      '& .admin-sidebar-navbar': {
        height: 'calc(100% - var(--admin-topbar-height) - 34px)',
      },

      '& .item-arrow': {
        opacity: 0,
        pointerEvents: 'none',
      },

      '& .submenu': {
        '& .submenu': {
          marginLeft: 'calc(0px - var(--admin-sidebar-padding))!important',
        },
      },

      '& .admin-sidebar': {
        width: 'var(--admin-sidebar-collapsed-width)',

        '&:hover': {
          width: 'var(--admin-sidebar-width)',

          '& .admin-sidebar-navbar': {
            height: 'calc(100% - var(--admin-topbar-height) - 151px)',
          },

          '& .admin-sidebar-brand': {
            '& img': {
              width: 'auto',
            },
          },

          '& .admin-sidebar-navbar-name': {
            display: 'block',
          },

          '& .admin-sidebar-icon': {
            marginRight: '8px',
          },

          '& .admin-sidebar-user-info': {
            '&>div': {
              height: 'auto',
              width: '100%',
              overflow: 'hidden',
            },
          },

          '& .item-arrow': {
            opacity: 1,
          },

          '& .submenu': {
            '& .submenu': {
              marginLeft: '0!important',
            },
          },

          '& .admin-sidebar-copyright': {
            display: 'flex!important',
          },
        },
      },
    },
  },
}));

export default sidebarStyle;
