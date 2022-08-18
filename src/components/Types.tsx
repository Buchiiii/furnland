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
    email:string,
    token:string,
    role:number
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

export type getrequestwithtoken={
    url:string,
    token:string
}

export type ordertype={
    count: number,
deliveryEstimation: string,
hasBeenConfirmed: boolean,
hasBeenDelivered: boolean,
hasBeenSent: boolean,
imageUrl: string,
itemCategory: string,
itemDescription: string,
itemName: string,
itemPrice:string, 
itemType: string ,

orderId: number,
orderedItemId: number,
userId: number,
vendorId: number}