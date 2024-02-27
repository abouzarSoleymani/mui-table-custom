import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderRadius:10
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    borderRadius:10,
                    boxShadow: 'inset 0px 2px 0 1px rgba(144, 147, 153, 0.1), 0px 7px 0 rgba(144, 147, 153, 0.14)',
                    '&.Mui-selected': {
                        backgroundColor: alpha('#919EAB', 0.16),
                        '&:hover': {
                            backgroundColor: alpha('#919EAB', 0.08),
                        },
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: 22,
                    borderBottom: 'none',
                },
                head: {
                    color: '#637381',
                    backgroundColor: '#F4F6F8',
                    '&:first-of-type': {
                        paddingLeft: 20,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    },
                    '&:last-of-type': {
                        paddingRight: 20,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                    },
                },
                stickyHeader: {
                    backgroundColor: '#fff',
                    backgroundImage: `linear-gradient(to bottom, #F4F6F8 0%, #F4F6F8 100%)`,
                },
                body: {
                    '&:first-of-type': {
                        paddingLeft: 20,
                    },
                    '&:last-of-type': {
                        paddingRight: 20,
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    borderTop: `solid 1px alpha('#919EAB', 0.24)`,
                },
                toolbar: {
                    height: 64,
                },
                select: {
                    '&:focus': {
                        borderRadius: 8,
                    },
                },
                selectIcon: {
                    width: 20,
                    height: 20,
                    marginTop: -4,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    boxShadow: `0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12);`,
                    borderRadius: 10,
                    zIndex: 0, // Fix Safari overflow: hidden with border radius
                },
            },
        },
    }
});