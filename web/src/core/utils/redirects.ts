/// Next.js permanent redirect used inside serverside functions.

export const loginRedirect = {
    redirect: {
        destination: "/login",
        permanent: true,
    },
}

export const patientsRedirect = {
    redirect: {
        destination: "/apps/patients",
        permanent: true,
    },
}