import React, { useEffect } from "react";
import { Router } from "@router/router";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getHomeRoute } from "@router/routes";
import { useQueryClient } from "@tanstack/react-query";

export const App: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(getHomeRoute())
        }
    }, [location.pathname, navigate, queryClient])

    return <Router/>
}
