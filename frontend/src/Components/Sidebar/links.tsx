import sidebarContents from './types';

type linksArray = Array<sidebarContents>

export const links: linksArray = [
    {
        header: "APPLICATIONS"
    },
    {
        path: "/dashboard",
        label: "Dashboard",
        icon:""
    },
    {
        header: "COMPONENTS"
    },
    {
        path: "/ui-elements",
        label: "UI Elements",
        icon:"",
        sublinks: [
            {
                path: "/badges",
                label: "Badges",
                icon:"",
            },
            {
                path: "/breadcrumbs",
                label: "Breadcrumbs",
                icon:"",
            },
            {
                path: "/buttons",
                label: "Buttons",
                icon:""
            },
            {
                path: "/dropdowns",
                label: "Dropdowns",
                icon:""
            },
            {
                path: "/images",
                label: "Images",
                icon:""
            },
            {
                path: "/lists",
                label: "Lists",
                icon:""
            },
            {
                path: "/progress-bar",
                label: "Progress bar",
                icon:""
            },
            {
                path: "/pagination",
                label: "Pagination",
                icon:""
            },
            {
                path: "/tabs",
                label: "Tabs",
                icon:""
            },
            {
                path: "/typography",
                label: "Typography",
                icon:""
            },
            {
                path: "/alerts",
                label: "Alerts",
                icon:""
            },
            {
                path: "/notifications",
                label: "React notifications",
                icon:""
            },
        ]
    },
    {
        path: "/tables",
        label: "Table screen",
        icon:"",
        sublinks: [
            {
                path: "/regular",
                label: "Regular table",
                icon:""
            },
            {
                path: "/sidebar-category",
                label: "Sidebar category table",
                icon:""
            },
            {
                path: "/datatable",
                label: "Datatable",
                icon:""
            },
        ]
    },
    {
        path: "/pricing",
        label: "Pricing page",
        icon:""
    },
    {
        path: "/terms",
        label: "Terms of Service",
        icon:""
    },
    {
        path: "/doc",
        label: "Documentation",
        icon:""
    },
    {
        path: "/forms",
        label: "Form screen",
        icon:"",
        sublinks: [
            {
                path: "/sample-forms",
                label: "Sample forms",
                icon:""
            },
            {
                path: "/default-forms",
                label: "Default forms",
                icon:""
            },
            {
                path: "/sliders",
                label: "Sliders",
                icon:""
            },
            {
                path: "/switches",
                label: "Switches",
                icon:""
            },
            {
                path: "/formsteps",
                label: "Form steps",
                icon:""
            },
        ]
    },
    {
        path: "/charts",
        label: "Charts",
        icon:"",
        sublinks: [
            {
                path: "/line-charts",
                label: "Line charts",
                icon:""
            }
        ]
    },
    {
        header: "PAGES"
    },
    {
        path: "/auth",
        label: "Authorization",
        icon:"",
        sublinks: [
            {
                path: "/signup",
                label: "Sign Up",
                icon:""
            },
            {
                path: "/login",
                label: "Login",
                icon:""
            },
            {
                path: "/forgot-password",
                label: "Forgot Password",
                icon:""
            },
        ]
    }
]