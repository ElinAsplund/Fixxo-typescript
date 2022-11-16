export interface IBreadcrumb {
    className: string,
    hideOrShowProducts: string,
    currentPage: string
}

export interface IBreadcrumbLink {
    hideOrShow: string,
    pageBefore: string
}

export interface IExternalLinkIcon {
    link: string,
    icon: string
}

export interface ILgCard {
    id: string,
    heading: string
}

export interface IMenuIcon {
    icon: string,
    quantity?: number
}