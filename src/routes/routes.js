import AuthRoute from "../pages/AuthRoute";
import { Dashboard, DashboardLayout } from "../pages/Dashboard";
import { ErrorLayout } from "../pages/Error404";

const routes = [

    {
        name: "home",
        path: "/",
        roles: [],
        element: <DashboardLayout />,
    },
    // {
    //     name: "auth",
    //     path: "auth",
    //     roles: [],
    //     element: <AuthLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Login />
    //         },
    //         {
    //             name: "login",
    //             path: "login",
    //             roles: [],
    //             element: <Login />
    //         },
    //         {
    //             name: "forgotpassword",
    //             path: "forgotpassword",
    //             roles: [],
    //             element: <ForgotPassword />
    //         },
    //         {
    //             name: "verifycode",
    //             path: "verifycode",
    //             roles: [],
    //             element: <VerifyCode />
    //         },
    //         {
    //             name: "updatepassword",
    //             path: "updatepassword",
    //             roles: [],
    //             element: <UpdatePassword />
    //         },
    //     ]
    // },
    {
        name: "dashboard",
        path: "dashboard",
        auth: true,
        roles: [],
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                auth: true,
                roles: [],
                element: <Dashboard />
            },
        ]
    },
    // {
    //     name: "teacher",
    //     path: "teacher",
    //     auth: true,
    //     roles: [],
    //     element: <TeacherLayout />,
    //     children: [
    //         {
    //             index: true,
    //             auth: true,
    //             element: <Teacher />
    //         },
    //         {
    //             name: 'create',
    //             path: 'create',
    //             auth: true,
    //             roles: [],
    //             element: <CreateTeacher />
    //         },
    //         {
    //             name: 'edit',
    //             path: 'edit/:teacherId',
    //             auth: true,
    //             roles: [],
    //             element: <EditTeacher />
    //         },
    //         {
    //             name: 'detail',
    //             path: 'detail/:teacherId',
    //             auth: true,
    //             roles: [],
    //             element: <TeacherDetail />
    //         },
    //         {
    //             name: 'program',
    //             path: 'program',
    //             auth: true,
    //             roles: [],
    //             element: <TeacherProgram />
    //         },
    //     ]
    // },
    {
        name: "error404",
        path: "*",
        auth: true,
        roles: [],
        element: <ErrorLayout />
    }
]

const authMap = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <AuthRoute>{route.element}</AuthRoute>;
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes);