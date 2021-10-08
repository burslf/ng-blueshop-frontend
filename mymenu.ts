export interface NavItem {
    displayName: string;
    route?: string;
    children?: NavItem[];
}


export const mymenu: NavItem[] = [
    {
        displayName: "Clothing",
        children: [
            {
                displayName: "All",
                route: "collection/all",
            },
            {
                displayName: "Corsets",
                route: "collection/corsets"
            },
            {
                displayName: "Dresses",
                children: [
                    {
                        displayName: "Maxi dresses",
                        route: "collection/maxi-dresses"
                    },
                    {
                        displayName: "Midi dresses",
                        route: "collection/midi-dresses"
                    },
                    {
                        displayName: "Mini dresses",
                        route: "collection/mini-dresses"
                    },
                ],
            },
            {
                displayName: "Denim",
                route: "collection/denim"
            },
            {
                displayName: "Tops",
                route: "collection/tops"
            },
            {
                displayName: "Bottoms",
                route: "collection/bottoms"
            },
            {
                displayName: "Loungewear",
                route: "collection/loungewear"
            }]
    },
    {
        displayName: "By Collection",
        children: [
            {
                displayName: "Summer collection",
                route: "collection/summer",
            },
            {
                displayName: "Winter collection",
                route: "collection/winter"
            },
            {
                displayName: "Spring collection",
                route: "collection/spring"
            },
            {
                displayName: "Fall collection",
                route: "collection/fall"
            }]
    },
    {
        displayName: "Accessories",
        route: "collection/accessories"
    }
];