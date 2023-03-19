// create an anchor component using tailwindcss with p-4 and an hover effect
export const NavBarAnchor = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <a href={href} className="p-4 hover:text-blue-500">{children}</a>
    )
}