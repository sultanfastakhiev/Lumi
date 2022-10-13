import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@feats/auth/redux/auth/auth-selectors";
import { useSearchParams } from "react-router-dom";

export function useAccount() {
    const user = useAppSelector(selectUser)
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "personal-info";
    
    const handleTabChange = (tab: string) => {
        setSearchParams({tab});
    }

    return {
        user,
        activeTab,
        activeTabIndex: accountTabs.findIndex(x => x.value === activeTab),
        activeTabForDropdown: accountTabs.find(x => x.value === activeTab),
        handleTabChange: (i: number) => {
            const tab = accountTabs[i].value;
            console.log(tab)
            handleTabChange(tab);
        },
        handleTabChangeByDropdown: (dropdownOption: any) => {
            handleTabChange(dropdownOption.value)
        }
    }
}

export const accountTabs = [
    {
        label: 'Personal info',
        value: 'personal-info',
    },
    {
        label: 'Password',
        value: 'password',
    },
    {
        label: 'Team',
        value: 'team',
    },
    {
        label: "Plan",
        value: 'plan',
    },
    {
        label: "Billing",
        value: "billing",
    },
    {
        label: "Email",
        value: "email",
    },
    {
        label: "Integration", 
        value: "integrations",
    },
    {
        label: "API",
        value: "api",
    }
]