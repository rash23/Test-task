export type listItemType = {
	title: string
	link: string
}
export interface GeneralStateProps {
	navLinks: string[]
	email: string
	company: string[]
	legal: listItemType[]
	links: listItemType[]
}
