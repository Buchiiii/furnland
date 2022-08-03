export type styleProps={
    style:React.CSSProperties,
    style2?:React.CSSProperties,
    style3?:React.CSSProperties,
    buttonstyle?:React.CSSProperties,
    buttonstyle2?:React.CSSProperties
}

export type inputProps={
    name:string,
    label:string,
    type:string
}

export type User={
    name?:string,
    email?:string,
    token?:string
}

export type Themecontext = {
    children:React.ReactNode
}

export type productProps = {
deliveryEstimation:string,
id: number,
imageUrl: string,
itemCategory: string,
itemDescription: string,
itemName: string,
itemPrice:string,
itemType: string,
vendorId: number
}